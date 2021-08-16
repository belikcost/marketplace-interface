import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper/core';

import { SendReviewModal } from "./SendReviewModal";
import { StarsGroup } from "./StarsGroup";
import { Attribute } from "./Attribute";
import { ReviewsSort } from "./ReviewsSort";
import Review from "./Review";

import starFillIcon from '/src/img/star_fill.svg';
import heartIcon from '/src/img/heart.svg';
import feedbackIcon from '/src/img/feedback.svg';
import boxIcon from '/src/img/delivery-box.svg';
import creditCardIcon from '/src/img/credit card.svg';
import guaranteeIcon from '/src/img/shield.svg';
import bannerFirst from '/src/img/adsmall.jpg';
import bannerSecond from '/src/img/ad2small.jpg';

import './index.scss';


const Product = ({product, variableAttributes, handleSetAttributeValue, count, handleSetCount, reviews, handleSetReviews}) => {
    const {t} = useTranslation();
    const isMedium = document.documentElement.scrollWidth <= 900;

    const [viewedImage, setViewedImage] = useState();
    const [isShowSendReview, setIsShowSendReview] = useState(false);

    const calcTotalReviewRating = (rating) => {
        const result = (rating.delivery + rating.feedback + rating.productQuality)/3;
        return Math.floor(result);
    }

    const calcTotalStarsCount = ({...stars}) => {
        reviews.forEach(review => {
            stars[review.stars_count-1] = +stars[review.stars_count-1] + 1;
        });
        return stars;
    }

    const calcSupplierRating = (rating) => Math.floor(rating);

    const calcStarsCountPercent = (starsCount, reviewsCount) => starsCount * 100 / reviewsCount;

    const handleOnChangeCount = (e) => {
        const { value } = e.target;
        handleSetCount(value);
    };

    const handleOnChangeSlide = (index) => {
        const swiper = document.querySelector('.swiper-container').swiper;
        setViewedImage(product.images[index]);
        swiper.slideTo(index)
    }

    const handleShowModal = () => {
        setIsShowSendReview(true);
    }

    useEffect(() => {
        if (product.images) {
            setViewedImage(product.images[0]);
        }
    }, [product.images]);

    SwiperCore.use([Navigation]);

    if (Object.keys(product).length < 5) {
        return null;
    } else {
        const totalReviewRating = calcTotalReviewRating(product.reviewRating);
        const reviewStarsCount = Math.round(totalReviewRating);
        const reviewRatingStars = Object.fromEntries(Array.of(0,0,0,0,0).entries());
        const totalReviewStarsCount = calcTotalStarsCount(reviewRatingStars);
        const reviewsCount = reviews.length;

        return (
            <>
                <div className="container">
                    <div className="product-card">
                        {product.images && (
                            <div className="product-card__thumbnails">
                                <img src={viewedImage} className="product-card_viewed-image" alt={t(product.title)}/>
                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={20}
                                    navigation={!isMedium}
                                    centeredSlides={true}
                                >
                                    {product.images.map((image, i) => (
                                        <SwiperSlide key={i} onClick={() => handleOnChangeSlide(i)}>
                                            <img src={image} alt={t(product.title)}/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                        <div className="product-card__info">
                            <p className="product-card_text-right">
                                {t('vendorCode')}:
                                <span className="product-card_text-normal"> {product.vendor_code}</span>
                            </p>
                            <h1>{t(product.title)}</h1>
                            <div className="product-card_row">
                                {reviews && (
                                    <div className="product-card_rating product-card_row">
                                        <StarsGroup stars={Object.keys(reviewRatingStars)} fill={reviewStarsCount}/>
                                        <p>
                                            <span className="product-card_text-normal">{reviewsCount}</span>
                                            <span className="product-card_text-normal"> {t('reviews')}</span>
                                        </p>
                                    </div>
                                )}

                                {product.favorite && (
                                    <div className="product-card_favorite product-card_row">
                                        <img src={heartIcon} alt={t('favorite')}/>
                                        <p>{t('favorite')}</p>
                                    </div>
                                )}
                                <p>
                                    {t('inStock')}:
                                    <span className="product-card_text-normal"> {product.stock}</span>
                                </p>
                            </div>
                            <div className="product-card__price">
                                {product.sale ? (
                                    <>
                                        <h1>{product.price - product.price * (product.sale / 100)} ₽</h1>
                                        <h1 className="product-card_old-price">{product.price} ₽<span className="product-card_line"/></h1>
                                    </>
                                ) : (
                                    <h1>{product.price} ₽</h1>
                                )}
                            </div>
                            {product.type === 'variable' && (
                                <div className="product-card__attributes">
                                    {variableAttributes.map(attribute => (
                                        <Attribute
                                            data={attribute}
                                            handleSetDataValue={(value) => handleSetAttributeValue(attribute.id, value)}
                                            key={attribute.id}
                                        />
                                    ))}
                                </div>
                            )}
                            <div className="product-card__buy-area">
                                <div className="product-card__count">
                                    <span onClick={() => handleSetCount(count-1)}/>
                                    <input type="number" value={count} onChange={handleOnChangeCount}/>
                                    <span onClick={() => handleSetCount(count+1)}/>
                                </div>
                                <div className="product-card_button-group">
                                    <span className="product-card_button">{t('buyNow')}</span>
                                    <span className="product-card_button">{t('addToCart')}</span>
                                </div>
                            </div>
                            <div className="product-card__links">
                                <a href="#productDetails">{t('productDetails')}</a>
                                <a href="#productDescription">{t('productDescription')}</a>
                                <a href="#productReviews">{t('productReviews')}</a>
                            </div>
                            {product.supplier && (
                                <div className="product-card__supplier">
                                    <div className="product-card_flag">
                                        <p>{t(product.supplier.status)}</p>
                                    </div>
                                    <h4>{product.supplier.name}</h4>
                                    <div>
                                        <h4>
                                            {calcSupplierRating(product.supplier.rating)}
                                            <img src={starFillIcon} alt="star"/>
                                        </h4>
                                        <p>{t('supplierRating')}</p>
                                    </div>
                                    <div>
                                        <img src={feedbackIcon} alt={t('sendSupplierMessage')}/>
                                        <p>{t('sendSupplierMessage')}</p>
                                    </div>
                                </div>
                            )}
                            <div className="product-card__features">
                                <p>
                                    <img src={boxIcon} alt={t('doorDelivery')}/>
                                    {t('doorDelivery')}
                                </p>
                                <p>
                                    <img src={guaranteeIcon} alt={t('returnGuarantee')}/>
                                    {t('returnGuarantee')}
                                </p>
                                <p>
                                    <img src={creditCardIcon} alt={t('onlinePayment')}/>
                                    {t('onlinePayment')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-footer">
                        <div className="product-footer_col">
                            <div className="product-details">
                                <h1 id="productDetails">{t('productDetails')}</h1>
                                {product.attributes.map(attribute => (
                                    <div className="product-details_attribute" key={attribute.id}>
                                        <span>{t(attribute.name)}</span>
                                        <span className="product-details_line"/>
                                        <p>{t(attribute.value)}</p>
                                    </div>
                                ))}
                                <p className="product-details_info">{t('productDetailsInfo')}</p>
                            </div>
                            <div className="product-description">
                                <h1 id="productDescription">{t('productDescription')}</h1>
                                <p>{product.description}</p>
                            </div>
                            {reviews.length !== 0 && (
                                <div className="product-reviews">
                                    <h1 id="productReviews">{t('productReviews')}</h1>
                                    <div className="product-reviews__customers-photos">
                                        <h4>{t('photosFromCustomers')}</h4>
                                        <Swiper
                                            slidesPerView={5}
                                            spaceBetween={20}
                                            navigation={!isMedium}
                                            centeredSlides={true}
                                        >
                                            {reviews.map(review => review.images && (
                                                review.images.map((image, i) => (
                                                    <SwiperSlide key={i}>
                                                        <img
                                                            src={image}
                                                            alt={t(`${review.name} ${review.surname}`)}
                                                        />
                                                    </SwiperSlide>
                                                ))
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className="product-reviews_row">
                                        <div className="product-reviews_col-50">
                                        <span className="product-reviews__send-button" onClick={handleShowModal}>
                                            {t('sendReview')}
                                        </span>
                                        </div>
                                        <ReviewsSort
                                            reviews={reviews}
                                            handleSetReviews={handleSetReviews}
                                            defaultReviews={product.reviewRating.reviews}
                                        />
                                    </div>
                                    <div className="product-reviews__customers-reviews">
                                        {reviews.map(review => (
                                            <Review review={review} ratingStars={reviewRatingStars} key={review.id}/>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="product-footer_col">
                            <div className="product-footer__banner-group">
                                <img src={bannerFirst} alt="BannerText"/>
                                <img src={bannerSecond} alt="BannerText"/>
                            </div>
                            {reviews.length !== 0 && (
                                <div className="product-rating">
                                    <div className="product-rating_row">
                                        <div className="product-rating__total">
                                    <span>
                                        {totalReviewRating}
                                        <img src={starFillIcon} alt={totalReviewRating}/>
                                    </span>
                                            <p>{`${t('basedOn')} ${reviewsCount} ${t('reviews')}`}</p>
                                        </div>
                                        <div className="product-rating__stars">
                                            {Object.keys(totalReviewStarsCount).map((starIndex, i) => (
                                                <div className="product-rating_row" key={i}>
                                                    <p>{`${+starIndex+1} ${t(+starIndex === 0 ? 'star' : 'stars')}`}</p>
                                                    <span className="product-rating__progress-bar">
                                                <span style={{width: `${calcStarsCountPercent(totalReviewStarsCount[starIndex], reviewsCount)}%`}}/>
                                            </span>
                                                    <p>{totalReviewStarsCount[starIndex]}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="product-rating_row product-rating__specific-reviews">
                                        <div>
                                            <span>{product.reviewRating.delivery}</span>
                                            <p>{t('deliverySpeed')}</p>
                                        </div>
                                        <div>
                                            <span>{product.reviewRating.feedback}</span>
                                            <p>{t('feedback')}</p>
                                        </div>
                                        <div>
                                            <span>{product.reviewRating.productQuality}</span>
                                            <p>{t('productQuality')}</p>
                                        </div>
                                    </div>
                                    <span className="product-rating__send-button" onClick={handleShowModal}>
                                    {t('sendReview')}
                                </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {isShowSendReview && (
                    <SendReviewModal
                        image={product.images[0]}
                        title={product.title}
                        ratingStars={reviewRatingStars}
                        handleCloseModal={() => setIsShowSendReview(false)}
                    />
                )}
            </>
        );
    }
};

export default Product;

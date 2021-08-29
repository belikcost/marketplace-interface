import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';

import './Item.scss';
import star from '../../img/star.svg';
import img from '../../img/t-shirt.jpg';
import { calculateSalePrice } from "../../utils";


export const Item = ({id, title, category, price, sale, brand, images, review_rating, review_count}) => {
    SwiperCore.use([Pagination]);

    return (
        <div
            className="item"
        >
            <div className="item__thumbnail">
                {sale && (
                    <span className="item_sale">{`-${sale}%`}</span>
                )}
                <Swiper slidesPerView={1} pagination={true} nested={true}>
                    {images.map((image, i) => (
                        <SwiperSlide key={i}>
                            <Link to={`/catalog/${category.join('/')}/${id}`}>
                                <img src={image} alt={title}/>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="item__price">
                {sale ? (
                    <>
                        <p>{calculateSalePrice(price, sale)} ₽</p>
                        <p className="item_old-price">{price} ₽<span className="item_line"/></p>
                    </>
                ) : (
                    <p>{price}</p>
                )}
            </div>
            <div className="item__review">
                <p>{review_rating}</p>
                <img src={star} alt={review_rating}/>
                <p>{review_count} отзывов</p>
            </div>
            <p className="item__brand">
                {brand}
            </p>
            <Link to={`/catalog/${category.join('/')}/${id}`} className="item__title">
                {title}
            </Link>
            <button className="item__add-cart">
                В корзину
            </button>
        </div>
    );
}

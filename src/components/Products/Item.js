import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';
import './Item.scss';
import star from '../../img/star.svg';
import img from '../../img/t-shirt.jpg';

export const Item = ({title, price, sale, brand, images, review_rating, review_count}) => {
    SwiperCore.use([Pagination]);
    return (
        <div className="item">
            <div className="item__thumbnail">
                <span className="item_sale">-25%</span>
                <Swiper slidesPerView={1} pagination={true} nested={true}>
                    <SwiperSlide>
                        <img src={img} alt={title}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt={title}/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="item__price">
                <p>{price-price*(sale/100)} ₽</p>
                <p className="item_old-price">{price} ₽<span className="item_line"/></p>
            </div>
            <div className="item__review">
                <p>{review_rating}</p>
                <img src={star} alt={review_rating}/>
                <p>{review_count} отзывов</p>
            </div>
            <p className="item__brand">
                {brand}
            </p>
            <p className="item__title">
                {title}
            </p>
            <button className="item__add-cart">
                В корзину
            </button>
        </div>
    );
}
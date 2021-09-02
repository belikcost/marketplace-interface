import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import ad1 from '../../img/ad1.jpg';

import "swiper/swiper.min.css";


export const Banner = () => {
    const isNotSmall = document.documentElement.scrollWidth > 580;
    SwiperCore.use([Navigation, Pagination]);

    return (
        <Swiper
            pagination={!isNotSmall}
            navigation={isNotSmall}
            slidesPerView={1}
            className="banners__swiper"
        >
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
            <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
        </Swiper>
    );
}
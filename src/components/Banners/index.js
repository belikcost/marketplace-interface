import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import ad1 from '../../img/ad1.jpg';
import ad2 from '../../img/ad2.jpg';
import ad3 from '../../img/ad3.jpg';
import "swiper/swiper.min.css";
import './index.scss';

const Banners = ({isShowMenu}) => {
    SwiperCore.use([Navigation, Pagination]);
    const isNotSmall = document.documentElement.scrollWidth > 580;
    return (
        <div className="container">
            <div className="banners">
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
                {!isShowMenu && (
                    <div className="banners__double-banners">
                        <img src={ad2} alt="Баннер"/>
                        <img src={ad3} alt="Баннер"/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Banners;
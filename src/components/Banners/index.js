import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import ad1 from '../../img/ad1.jpg';
import threeEllipse from '../../img/tripple_ellipse.svg';

import "swiper/swiper.min.css";
import './index.scss';

const Banners = () => {
    SwiperCore.use([Navigation, Pagination]);
    const { t } = useTranslation();
    const isNotSmall = document.documentElement.scrollWidth > 580;
    const isNotMedium = document.documentElement.scrollWidth > 800;
    const selector = useSelector(selector => selector);

    return (
        <div className="container">
            <div className="banners">
                {isNotMedium && (
                    <div className="small-menu">
                        <div className="small-menu__header">
                            <img src={threeEllipse} alt="Icon"/>
                            {t("popularCategories")}
                        </div>
                        <div className="small-menu__body">
                            {Object.keys(selector.shop).map((category, i) => (
                                <Link to={`/catalog/${category}`} key={i}>
                                    {selector.icons[category] && (
                                        <img src={selector.icons[category]} alt={t(category)}/>
                                    )}
                                    {t(category)}
                                </Link>
                            ))}
                        </div>
                        <div className="small-menu__footer">
                            <Link to="/catalog">
                                <p>{t('allCategories')}</p>
                            </Link>
                        </div>
                    </div>
                )}
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
            </div>
        </div>
    );
}

export default Banners;
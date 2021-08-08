import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import ad1 from "../../../img/ad1.jpg";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";

export const ShopArea = ({categories, isNotSmall, isMobileList, handleCurrentCategory}) => {
    const { t } = useTranslation();
    const iterableCategories = Array.isArray(categories) ? categories : Object.keys(categories);

    SwiperCore.use([Navigation]);

    const handleSetMobileList = (list, categoryName) => {
        if (!isNotSmall && !isMobileList) {
            handleCurrentCategory(list, categoryName);
        }
    }

    return (
        <div className="site-menu__shop-area">
            <div className="site-menu_cols">
                {iterableCategories.map((category, i) => (
                    <div
                        onClick={() => handleSetMobileList(categories[category], category)}
                        className={'site-menu_col' + (isMobileList ? ' site-menu_last-item' : '')}
                        key={i}
                    >
                        <span>{t(category)}</span>
                        {isNotSmall && categories[category].map((subCategory, i) => (
                            <p key={i}>{t(subCategory)}</p>
                        ))}
                    </div>
                ))}
            </div>
            {isNotSmall && (
                <Swiper
                    className="site-menu__swiper"
                    navigation={true}
                >
                    <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
                    <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
                    <SwiperSlide><img src={ad1} alt="Баннер"/></SwiperSlide>
                </Swiper>
            )}
        </div>
    );
};
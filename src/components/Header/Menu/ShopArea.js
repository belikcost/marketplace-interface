import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ad1 from "../../../img/ad1.jpg";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";

export const ShopArea = ({
                             categories,
                             isNotSmall,
                             isMobileList,
                             currentCategory,
                             handleCurrentCategory,
                             handleShowMenu
                         }) => {
    const {t} = useTranslation();
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
                        <Link onClick={handleShowMenu} to={`/catalog/${currentCategory}/${category}`}>
                            <span>{t(category)}</span>
                        </Link>
                        {isNotSmall && categories[category].map((subCategory, i) => (
                            <Link
                                key={i}
                                onClick={handleShowMenu}
                                to={`/catalog/${currentCategory}/${category}/${subCategory}`}
                            >
                                <p>{t(subCategory)}</p>
                            </Link>
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
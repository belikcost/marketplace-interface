import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";


export const ReviewsImages = ({images}) => {
    const {t} = useTranslation();
    const isMedium = document.documentElement.scrollWidth <= 900;

    return (
        <div className="product-reviews__customers-photos">
            <h4>{t('photosFromCustomers')}</h4>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                navigation={!isMedium}
                centeredSlides={true}
            >
                {images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img src={image} alt=""/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};


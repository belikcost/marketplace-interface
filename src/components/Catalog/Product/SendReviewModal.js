import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { StarsGroup } from "./StarsGroup";
import closeIcon from "../../../img/close_icon.svg";


export const SendReviewModal = ({image, title, ratingStars, handleCloseModal}) => {
    const {t} = useTranslation();

    const initialReviewData = {
        name: '',
        email: '',
        delivery: 0,
        feedback: 0,
        productQuality: 0,
        text: '',
        images: []
    };

    const [sendData, setSendData] = useState(initialReviewData);

    const handleSetData = (type, value) => {
        setSendData({...sendData, [type]: value})
    }

    const toBase64 = (file) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        };
    });

    const handleSetImages = (files) => {
        Array.from(files).forEach(async (file) => {
            await toBase64(file).then(r => handleSetData('images', [...sendData.images, r]));
        });
    }

    useEffect(() => console.log(sendData), [sendData])

    return (
        <div className="product-review-modal__container">
            <div className="product-review-modal">
                <div className="product-review-modal__title">
                    <h1>{t('yourReview')}</h1>
                    <img src={closeIcon} onClick={handleCloseModal} alt={t('close')}/>
                </div>
                <div className="product-review-modal__product-info">
                    <img src={image} alt={t(title)}/>
                    <h1>{t(title)}</h1>
                </div>
                <div className="product-review-modal_row product-review-modal_w-50">
                    <p>{t('yourName')}</p>
                    <input
                        type="text"
                        value={sendData.name}
                        onChange={(e) => handleSetData('name', e.target.value)}
                        placeholder={t('enterName')}
                    />
                </div>
                <div className="product-review-modal_row product-review-modal_w-50">
                    <p>{t('yourEmail')}</p>
                    <input
                        type="email"
                        value={sendData.email}
                        onChange={(e) => handleSetData('email', e.target.value)}
                        placeholder={t('enterEmail')}
                    />
                </div>
                <h4>{t('reviewShopWork')}</h4>
                <div className="product-review-modal_row">
                    <p>{t('deliverySpeed')}</p>
                    <StarsGroup
                        stars={Object.keys(ratingStars)}
                        fill={sendData.delivery}
                        setCount={(value) => handleSetData('delivery', value)}
                    />
                </div>
                <div className="product-review-modal_row">
                    <p>{t('feedback')}</p>
                    <StarsGroup
                        stars={Object.keys(ratingStars)}
                        fill={sendData.feedback}
                        setCount={(value) => handleSetData('feedback', value)}
                    />
                </div>
                <div className="product-review-modal_row">
                    <p>{t('productQuality')}</p>
                    <StarsGroup
                        stars={Object.keys(ratingStars)}
                        fill={sendData.productQuality}
                        setCount={(value) => handleSetData('productQuality', value)}
                    />
                </div>
                <h4>{t('yourReview')}</h4>
                <textarea
                    value={sendData.text}
                    onChange={(e) => handleSetData('text', e.target.value)}
                    placeholder={t('yourText')}
                />
                <h4>{t('addPhotos')}</h4>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    multiple={true}
                    value={undefined}
                    onChange={(e) => handleSetImages(e.target.files)}
                />
                <div className="product-review-modal__footer">
                    <span>
                        {t('sendReview')}
                    </span>
                </div>
            </div>
        </div>
    );
}
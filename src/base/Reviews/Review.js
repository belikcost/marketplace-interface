import { useState } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";

import { ratingStars } from "../../constants";

import { StarsGroup } from "../../components/Catalog/Product/StarsGroup";
import { calculateTotalRating } from "../../utils";


export const Review = ({locale, review}) => {
    const {t} = useTranslation();
    const [isShowCommentArea, setIsShowCommentArea] = useState(false);

    return (
        <div className="product-reviews__review product-reviews_row" key={review.id}>
            <div>
                <span className="product-reviews_user">{review.name[0]}</span>
            </div>
            <div>
                <div className="product-reviews_col">
                    <div className="product-reviews_row product-reviews__review-header">
                        <div className="product-reviews_col">
                            <span>{`${review.name} ${review.surname[0]}.`}</span>
                            <span>{review.city}</span>
                        </div>
                        {locale && (
                            <p>{format(new Date(review.created_at), 'PPP, H:m', {locale: locale})}</p>
                        )}
                        <div>
                            <StarsGroup stars={Object.keys(ratingStars)} fill={calculateTotalRating(review.rating)}/>
                        </div>
                    </div>
                    <p className="product-reviews__review-text">{review.text}</p>
                    {isShowCommentArea && (
                        <textarea cols="30" rows="6" placeholder={t('yourText')}/>
                    )}
                    <span className="product-reviews__send-request" onClick={() => setIsShowCommentArea(true)}>
                        {t('sendRequest')}
                    </span>
                </div>
            </div>
        </div>
    );
}

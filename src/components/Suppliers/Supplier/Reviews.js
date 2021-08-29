import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ReviewsSort } from "../../../base/Reviews/ReviewsSort";
import { Review } from "../../../base/Reviews/Review";


export const Reviews = ({locale, reviews, handleGetReviews}) => {
    const {t} = useTranslation();

    useEffect(() => handleGetReviews(), [handleGetReviews])

    if (reviews) {
        return (
            <div>
                <div className="supplier-page__reviews-header">
                    <h4>{t('supplierReviews')}</h4>
                    <ReviewsSort reviews={reviews}/>
                </div>
                <div className="supplier-page__reviews">
                    {reviews.map(review => (
                        <Review review={review} locale={locale} key={review.id}/>
                    ))}
                </div>
            </div>
        )
    } else {
        return null;
    }
}
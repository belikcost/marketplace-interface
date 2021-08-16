import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { asc, desc } from "../../../constants";


export const ReviewsSort = ({reviews, handleSetReviews, defaultReviews}) => {
    const {t} = useTranslation();

    const [onlyWithPhoto, setOnlyWithPhoto] = useState(false);
    const [byRating, setByRating] = useState(desc);

    useEffect(() => {
        let newReviews = [...defaultReviews];

        if (onlyWithPhoto) {
            newReviews = reviews.filter(review => review.images && review.images.length !== 0);
        }

        if (byRating === desc) {
            newReviews.sort((a, b) => a.stars_count - b.stars_count);
        } else if (byRating === asc ) {
            newReviews.sort((a, b) => b.stars_count - a.stars_count);
        }
        handleSetReviews(newReviews);
    }, [byRating, onlyWithPhoto, defaultReviews, handleSetReviews]);

    return (
        <div className="product-reviews__sort product-reviews_col-50">
            <div className="product-reviews__with-photo">
                <span
                    onClick={() => setOnlyWithPhoto(!onlyWithPhoto)}
                    className={`${onlyWithPhoto ? ` active` : ``}`}
                />
                <p>{t('onlyWithPhoto')}</p>
            </div>
            <div>
                <select value={byRating} onChange={(e) => setByRating(e.target.value)}>
                    <option value={asc}>{t('byRatingAsc')}</option>
                    <option value={desc}>{t('byRatingDesc')}</option>
                </select>
            </div>
        </div>
    )
}
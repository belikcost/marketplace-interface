import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { asc, desc } from "../../constants";


export const ReviewsSort = ({reviews, handleSetReviews, defaultReviews}) => {
    const {t} = useTranslation();

    const [onlyWithPhoto, setOnlyWithPhoto] = useState(false);
    const [byRating, setByRating] = useState(desc);

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
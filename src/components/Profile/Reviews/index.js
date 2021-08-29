import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { Link, Route } from "react-router-dom";

import { calculateTotalRating } from "../../../utils";

import { ResponseModal } from "./ResponseModal";

import editIcon from "/src/img/mini_button_edit.svg";
import deleteIcon from "/src/img/mini_button_delite.svg";

import './index.scss';


const Reviews = ({locale, reviews}) => {
    const {t} = useTranslation();
    const formatDate = (date) => format(new Date(date), 'MM/dd/yy', {locale: locale});


    return (
        <div>
            <h1>{t('reviewsList')}</h1>
            <div>
                {reviews && reviews.map(review => (
                    <div className="supplier-review" key={review.id}>
                        <div className="supplier-review__user-area">
                            <img src={review.avatar} alt={review.name}/>
                            <div>
                                <p>{`${review.name} ${review.surname[0]}`}</p>
                                <span>{formatDate(review.created_at)}</span>
                            </div>
                        </div>
                        <div className="supplier-review_col">
                            <h4>{t('reviewingProduct')}</h4>
                            <Link to={`/catalog${review.product.url}`}>{review.product.title}</Link>
                        </div>
                        <div className="supplier-review_col supplier-review__message">
                            <h4>{t('reviewMessage')}</h4>
                            <span>{review.text}</span>
                        </div>
                        <div className="supplier-review_col">
                            <h4>{t('totalRating')}</h4>
                            <span>{calculateTotalRating(review.rating)}</span>
                        </div>
                        <div className="supplier-review_col">
                            <h4>{t('ratingByParameters')}</h4>
                            <span>{review.rating.join('/')}</span>
                        </div>
                        <div className="supplier-review_col">
                            <Link to={`/profile/reviews/response/${review.id}`}>
                                <img src={editIcon} alt={t('edit')}/>
                            </Link>
                            <img src={deleteIcon} alt={t('delete')}/>
                        </div>
                    </div>
                ))}
            </div>
            <Route path="/profile/reviews/response/:id" component={ResponseModal}/>
        </div>
    );
}

export default Reviews;
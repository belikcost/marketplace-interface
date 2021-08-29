import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import editIcon from "../../../../img/mini_button_edit.svg";
import deleteIcon from "../../../../img/mini_button_delite.svg";

import './index.scss';


const ProductDetails = ({details, handleGetDetails}) => {
    const {t} = useTranslation();

    useEffect(() => {
        handleGetDetails();
    }, [handleGetDetails])

    return (
        <div className="supplier-details">
            <header>
                <Link to="add-detail" className="supplier-details_link">
                    {t('addDetail')}
                </Link>
            </header>
            <div>
                {details.map(detail => (
                    <div className="product-detail" key={detail.id}>
                        <div className="product-detail__body">
                            <h4>{t(detail.title)}</h4>
                            <div className="product-detail_label">
                                <p>{t('values')}</p>
                                <div className="product-detail__values">
                                    {detail.values.map((value, i) => (
                                        <span key={i}>{t(value)}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="product-detail_label">
                                <p>{t('category')}</p>
                                <div className="product-detail__categories">
                                    {detail.category.map((item, i) => i !== detail.category.length - 1 ? (
                                            <span key={i}>{`${t(item)} /`}</span>
                                        ) : (
                                            <p key={i}>{t(item)}</p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="product-detail__button-group">
                            <Link to={`/profile/catalog/edit-detail/${detail.id}`}>
                                <img src={editIcon} alt={t('edit')}/>
                            </Link>
                            <img src={deleteIcon} alt={t('delete')}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetails;
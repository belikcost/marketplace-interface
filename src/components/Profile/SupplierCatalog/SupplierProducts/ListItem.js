import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { calculateSalePrice } from "../../../../utils";

import onIcon from "../../../../img/mini_button_on.svg";
import editIcon from "../../../../img/mini_button_edit.svg";
import deleteIcon from "../../../../img/mini_button_delite.svg";



export const ListItem = ({product}) => {
    const {t} = useTranslation();
    const [isChosen, setIsChosen] = useState(false)

    return (
        <div className="supplier-product">
            <span
                className={`supplier-product_checkbox${isChosen ? ` active` : ``}`}
                onClick={() => setIsChosen(!isChosen)}
            />
            <div className="supplier-product__body">
                <img className="supplier-product_col" src={product.image} alt={t(product.title)}/>
                <div className="supplier-product_col">
                    <h5>{t('productTitle')}</h5>
                    <p>{t(product.title)}</p>
                </div>
                <div className="supplier-product_col">
                    <h5>{t('vendorCode')}</h5>
                    <p>{t(product.vendor_code)}</p>
                </div>
                <div className="supplier-product_col">
                    <h5>{t('catalogCategory')}</h5>
                    <div className="supplier-product__categories">
                        {product.category.map((category, i) => i === product.category.length - 1 ? (
                            <p key={i}>{t(category)}</p>
                        ) : (
                            <span key={i}>{`${t(category)} /`}</span>
                        ))}
                    </div>
                </div>
                <div className="supplier-product_col supplier-product_price">
                    <h5>{t('productPrice')}</h5>
                    {product.sale ? (
                        <div>
                            <p>{calculateSalePrice(product.price, product.sale)} ₽</p>
                            <p className="supplier-product_old-price">
                                {product.price} ₽
                                <span className="supplier-product_line"/>
                            </p>
                        </div>
                    ) : (
                        <p>{product.price} ₽</p>
                    )}
                </div>
                <div className="supplier-product_col">
                    <h5>{t('relatedProducts')}</h5>
                    <p>{product.related_products}</p>
                </div>
            </div>
            <div className="supplier-product__button-group">
                <img src={onIcon} alt={t('on')}/>
                <Link to={`/profile/catalog/edit-product/${product.id}`}>
                    <img src={editIcon} alt={t('edit')}/>
                </Link>
                <img src={deleteIcon} alt={t('delete')}/>
            </div>
        </div>
    )
}
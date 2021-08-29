import { useTranslation } from "react-i18next";

import './ListOfProducts.scss';
import { Link } from "react-router-dom";
import React from "react";


export const ListOfProducts = ({products}) => {
    const {t} = useTranslation();

    return products.map(product => (
            <div className="list-product" key={product.id}>
                <Link to={`/catalog/${product.category.join('/')}/${product.id}`}>
                    <img src={product.image} alt={t(product.title)}/>
                </Link>
                <div className="list-product__info">
                    <h4>
                        <Link to={`/catalog/${product.category.join('/')}/${product.id}`}>{product.title}</Link>
                    </h4>
                    <p>{t('vendorCode')}:
                        <span className="list-product_bold-text">{product.vendorCode}</span>
                    </p>
                </div>
                <h6>{product.price}</h6>
                <h6>{product.quantity} шт.</h6>
                <h6>{product.price * product.quantity}</h6>
            </div>
        )
    );
}


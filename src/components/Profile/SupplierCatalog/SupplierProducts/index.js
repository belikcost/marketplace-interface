import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ListItem } from "./ListItem";
import searchIcon from "../../../../img/loop.svg";

import './index.scss';


const SupplierProducts = ({products, handleGetProducts}) => {
    const {t} = useTranslation();

    useEffect(() => {
        handleGetProducts();
    }, [handleGetProducts])

    return (
        <div className="product-list">
            <header>
                <div className="product-list__search">
                    <label>
                        <input type="text" placeholder={t('enterProductName')}/>
                        <img src={searchIcon} alt={t('send')}/>
                    </label>
                </div>
                <Link to="add-product" className="product-list__add-product">
                    {t('addProduct')}
                </Link>
            </header>
            {products.map(product => (
                <ListItem key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default SupplierProducts;
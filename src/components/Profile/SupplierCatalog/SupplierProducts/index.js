import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ListItem } from "./ListItem";

import { Search } from "/src/base/Fields/Search";
import { Checkbox } from "/src/base/Fields/Checkbox";
import { Pagination } from "/src/base/Pagination";

import './index.scss';


const SupplierProducts = ({products, handleGetProducts}) => {
    const {t} = useTranslation();
    const mockCategories = ["tShirts", "tShirts", "tShirts"];
    const mockSelectAll = {
        "selectAll": false
    }

    useEffect(() => {
        handleGetProducts();
    }, [handleGetProducts])

    return (
        <div className="product-list">
            <header>
               <div className="product-list__search">
                   <Search options={mockCategories}/>
                   <Link to="add-product" className="product-list__add-product">
                       {t('addProduct')}
                   </Link>
               </div>
                <div className="product-list_select-all">
                    <Checkbox data={mockSelectAll} name="selectAll" className="product-list_checkbox"/>
                </div>
            </header>
            {products.map(product => (
                <ListItem key={product.id} product={product}/>
            ))}
            <div className="product-list_select-all">
                <select defaultValue="default">
                    <option value="default" disabled>{t('actionWithSelected')}</option>
                </select>
                <button>{t('apply')}</button>
            </div>
            <Pagination pageCount={3} active={1}/>
        </div>
    );
}

export default SupplierProducts;
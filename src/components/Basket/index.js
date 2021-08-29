import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { calculateSalePrice } from "../../utils";

import deleteIcon from "/src/img/mini_button_delite.svg";
import './index.scss';


const Basket = ({basket}) => {
    const {t} = useTranslation();
    const [data, setData] = useState();

    const calculateTotalPrice = (basket, withSale) => {
        let total = 0;
        basket.forEach(product => {
            if (withSale && product.sale) {
                total += calculateSalePrice(product.price, product.sale) * product.quantity;
            } else {
                total += product.price * product.quantity;
            }
        });
        return Math.round(total);
    };

    useEffect(() => {
        if (basket) {
            setData(basket);
        }
    }, [basket]);

    const handleAdd = (product) => setData([...data, product]);
    const handleRemove = (product) => setData(data.filter(item => item.id !== product.id));
    const handleChangeQuantity = (value, id) => setData(data.map(product => product.id === id ? {
        ...product,
        quantity: value
    } : product));

    const isChosen = (product) => data && data.some(item => item.id === product.id);

    return (
        <div className="container">
            <div>
                <h1>{t('basket')}</h1>
                {data && (
                    <div className="basket">
                        <div className="basket__products">
                            {data.map(product => (
                                <div className="basket-product" key={product.id}>
                                    <span
                                        className={`basket-product_checkbox${isChosen(product) ? ` active` : ``}`}
                                        onClick={() => isChosen(product) ? handleRemove(product) : handleAdd(product)}
                                    />
                                    <div className="basket-product__body">
                                        <Link to={`/catalog/${product.category.join('/')}/${product.id}`}>
                                            <img src={product.image} alt={t(product.title)}/>
                                        </Link>
                                        <div className="basket-product_col">
                                            <h4>{t('productTitle')}</h4>
                                            <Link to={`/catalog/${product.category.join('/')}/${product.id}`}>
                                                {t(product.title)}
                                            </Link>
                                        </div>
                                        <div className="basket-product_col">
                                            <h4>{t('productPrice')}</h4>
                                            {product.sale ? (
                                                <div>
                                                    <p>{calculateSalePrice(product.price, product.sale)} ₽</p>
                                                    <p className="basket-product_old-price">
                                                        {product.price} ₽
                                                        <span className="basket-product_line"/>
                                                    </p>
                                                </div>
                                            ) : (
                                                <p>{product.price} ₽</p>
                                            )}
                                        </div>
                                        <div className="basket-product_col">
                                            <h4>{t('productQuantity')}</h4>
                                            <input
                                                type="number"
                                                value={product.quantity}
                                                onChange={(e) => handleChangeQuantity(e.target.value, product.id)}
                                            />
                                        </div>
                                        <img src={deleteIcon} className="basket-product_button" alt={t('delete')}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="basket__counter">
                            <Link to="/basket/make-order">{t('makingAnOrder')}</Link>
                            <div className="basket_row">
                                <h4>{t('yourBasket')}</h4>
                                <p>{`${data.length} ${t('productsInBasket')}`}</p>
                            </div>
                            <div className="basket_row">
                                <p>{t('products')}</p>
                                <span>{calculateTotalPrice(data)} ₽</span>
                            </div>
                            {calculateTotalPrice(basket) !== calculateTotalPrice(data, true) && (
                                <div className="basket_row">
                                    <p>{t('sale')}</p>
                                    <span>
                                            {calculateTotalPrice(data, true) - calculateTotalPrice(data)} ₽
                                         </span>
                                </div>
                            )}
                            <div className="basket_row">
                                <h4>{t('totalCount')}</h4>
                                <p>{calculateTotalPrice(data, true)} ₽</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Basket;
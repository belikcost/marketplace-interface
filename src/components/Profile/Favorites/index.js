import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";

import { calculateSalePrice } from "../../../utils";

import { SelectBar } from "/src/base/FilterItems/SelectBar";
import { Toggler } from "/src/base/FilterItems/Toggler";

import img from "../../../img/t-shirt.jpg";

import './index.scss';


const Favorites = ({favorites}) => {
    const {t} = useTranslation();
    const sortVariants = ['new', 'priceAsc', 'priceDesc'];

    const [sort, setSort] = useState(sortVariants[0]);
    const [onlyInStock, setOnlyInStock] = useState(false);

    return (
        <div className="favorites">
            <header>
                <h1>{t('myFavorites')}</h1>
                <div className="favorites_row">
                    <SelectBar text="sortBy" chosenValue={sort} handleChoose={setSort} values={sortVariants}/>
                    <Toggler name={t('inStock')} isActive={onlyInStock} handleActive={() => setOnlyInStock(!onlyInStock)}/>
                </div>
            </header>
            <div className="favorites__list">
                {favorites ? favorites.map(product => (
                    <div className="favorite-product" key={product.id}>
                        <div className="favorite-product__thumbnail">
                            {product.sale && (
                                <span className="favorite-product_sale">{`-${product.sale}%`}</span>
                            )}
                            <Link to={`/catalog/${product.category.join('/')}/${product.id}`}>
                                <img src={product.image} alt={t(product.title)}/>
                            </Link>
                        </div>
                        <div className="favorite-product_row">
                            {product.sale ? (
                                <>
                                    <p>{calculateSalePrice(product.price, product.sale)} ₽</p>
                                    <p className="favorite-product_old-price">{product.price} ₽<span className="favorite-product_line"/></p>
                                </>
                            ) : (
                                <p>{product.price}</p>
                            )}
                        </div>
                        <Link to={`/catalog/${product.category.join('/')}/${product.id}`}>
                            {t(product.title)}
                        </Link>
                        <p className="favorite-product_large-text favorite-product_row">
                            {product.supplierName}
                        </p>
                        {product.status === 1 ? (
                            <button className="favorite-product__add-cart">
                                {t('addToCard')}
                            </button>
                        ) : (
                            <button className="favorite-product__add-cart" disabled>
                                {t('outOfStock')}
                            </button>
                        )}
                    </div>
                )) : (
                    <h4>{t('favoritesNotFound')}</h4>
                )}
            </div>
        </div>
    );
};

export default Favorites;
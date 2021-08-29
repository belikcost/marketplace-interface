import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { createHandle } from "../../../utils";

import Filter from "../Filter";
import Products from "../../Products";

import { Toggler } from "../../../base/FilterItems/Toggler";
import { SelectBar } from "../../../base/FilterItems/SelectBar";

import starFill from '/src/img/star_fill.svg';
import starNotFill from '/src/img/star_not_fill.svg';
import sortIcon from '/src/img/sort.svg';
import filtersIcon from '/src/img/filters.svg';

import './index.scss';


const Category = ({shop, currentCategory, icons, filters, handleFilters, products}) => {
    const {t} = useTranslation();
    const sortByValues = ['popularity', 'priceASC', 'priceDESC'];
    const isSmall = document.documentElement.scrollWidth < 700;

    const [onlyDiscountItems, setOnlyDiscountItems] = useState(false);
    const [onlyNewItems, setOnlyNewItems] = useState(false);
    const [onlyFreeDelivery, setOnlyFreeDelivery] = useState(false);
    const [onlyHighRating, setOnlyHighRating] = useState(false);
    const [sortBy, setSortBy] = useState(sortByValues[0]);
    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const [isOpenSort, setIsOpenSort] = useState(false);

    const Navigation = () => {
        const parentCategory = currentCategory[currentCategory.length - 2];
        return (
            <div className="category__nav">
                {parentCategory ? (
                    <Link className="category_parent-category" to={`/catalog/${parentCategory}`}>
                        {t(parentCategory)}
                    </Link>
                ) : (
                    <Link className="category_parent-category" to={`/catalog`}>
                        {t('catalog')}
                    </Link>
                )}
                {Object.keys(shop[currentCategory[0]]).map((category, i) => (
                    <Link key={i} to={`/catalog/${currentCategory[0]}/${category}`}>
                        {t(category)}
                    </Link>
                ))}
            </div>
        );
    }



    const Rating = () => (
        <div className="category__row category_rating">
            <span
                onClick={() => createHandle(onlyHighRating, setOnlyHighRating)}
                className={`filter-checkbox${onlyHighRating ? ` active` : ``}`}
            />
            <div>
                {[0, 1, 2, 3, 4].map((i) => i === 4 ? (
                        <img src={starNotFill} key={i} alt="Star Not Fill"/>
                    ) : (
                        <img src={starFill} key={i} alt="Star Fill"/>
                    )
                )}
                {t('orMore')}
            </div>
        </div>
    );

    const Togglers = () => (
        <>
            <Toggler
                name={t('discounts')}
                isActive={onlyDiscountItems}
                handleActive={() => createHandle(onlyDiscountItems, setOnlyDiscountItems)}
            />
            <Toggler
                name={t('newItems')}
                isActive={onlyNewItems}
                handleActive={() => createHandle(onlyNewItems, setOnlyNewItems)}
            />
            <Toggler
                name={t('freeDelivery')}
                isActive={onlyFreeDelivery}
                handleActive={() => createHandle(onlyFreeDelivery, setOnlyFreeDelivery)}
            />
        </>
    );

    return (
        <div className="container">
            <div className="category">
                <div className="category__col">
                    <div className="category__header">
                        <h1>{t(currentCategory[currentCategory.length - 1])}</h1>
                        {isSmall && (
                            <div className="category_header-buttons">
                                <div className="category_modal-container">
                                    <img
                                        src={sortIcon}
                                        onClick={() => createHandle(isOpenSort, setIsOpenSort)}
                                        alt={t('sort')}
                                    />

                                    {isOpenSort && (
                                        <div className="category_modal">
                                            <SelectBar
                                                values={sortByValues}
                                                chosenValue={sortBy}
                                                handleChoose={(value) => setSortBy(value)}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="category_modal-container">
                                    <img
                                        src={filtersIcon}
                                        onClick={() => createHandle(isOpenFilters, setIsOpenFilters)}
                                        alt={t('filters')}
                                    />

                                    {isOpenFilters && (
                                        <div className="category_modal">
                                            {filters.map((filter, i) => (
                                                <Filter
                                                    key={i}
                                                    filter={filter}
                                                    handleFilters={handleFilters}
                                                    icons={icons}
                                                />
                                            ))}
                                            <Togglers/>
                                            <Rating/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {!isSmall && (
                        <div>
                            <div className="category__row">
                                <div className="category__row">
                                    <Togglers/>
                                </div>
                                <Rating/>
                            </div>
                            <SelectBar
                                text={'sortBy'}
                                values={sortByValues}
                                chosenValue={sortBy}
                                handleChoose={(value) => setSortBy(value)}
                            />
                        </div>
                    )}
                    <div className="category__items">
                        <Products products={products}/>
                    </div>
                </div>
                {!isSmall && (
                    <div className="category__col">
                        <Navigation/>
                        {filters.map((filter, i) => (
                            <Filter key={i} filter={filter} handleFilters={handleFilters} icons={icons}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Category;
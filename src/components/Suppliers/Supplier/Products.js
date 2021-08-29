import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createHandle } from "../../../utils";

import ProductList from '../../Products';

import { Toggler } from "../../../base/FilterItems/Toggler";
import { SelectBar as SelectBarField } from "../../../base/FilterItems/SelectBar";

import sortIcon from "../../../img/sort.svg";


export const Products = ({products, supplierTitle}) => {
    const {t} = useTranslation();
    const isSmall = document.documentElement.scrollWidth < 700;
    const sortValues = ['popularity', 'priceAsc', 'priceDesc'];

    const [sortBy, setSortBy] = useState(sortValues[0]);
    const [onlySale, setOnlySale] = useState(false);
    const [onlyNew, setOnlyNew] = useState(false);
    const [onlyFreeDelivery, setOnlyFreeDelivery] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const Togglers = () => (
        <>
            <Toggler
                name={t('onlySale')}
                isActive={onlySale}
                handleActive={() => createHandle(onlySale, setOnlySale)}
            />
            <Toggler
                name={t('onlyNew')}
                isActive={onlyNew}
                handleActive={() => createHandle(onlyNew, setOnlyNew)}
            />
            <Toggler
                name={t('onlyFreeDelivery')}
                isActive={onlyFreeDelivery}
                handleActive={() => createHandle(onlyFreeDelivery, setOnlyFreeDelivery)}
            />
        </>
    );
    const SelectBar = () => (
        <SelectBarField
            text="sortBy"
            values={sortValues}
            chosenValue={sortBy}
            handleChoose={(value) => setSortBy(value)}
        />
    );

    return (
        <div className="supplier-page__products">
            <h4>{t(supplierTitle)}</h4>
            <header>
                {isSmall ? (
                    <>
                        <div className="supplier-page_modal-container">
                            <img
                                src={sortIcon}
                                onClick={() => createHandle(modalOpen, setModalOpen)}
                                alt={t('sort')}
                            />

                            {modalOpen && (
                                <div className="supplier-page_modal">
                                    <SelectBar/>
                                    <Togglers/>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="supplier-page_row">
                            <Togglers/>
                        </div>
                        <SelectBar/>
                    </>
                )}
            </header>
            <ProductList products={products}/>
        </div>
    );
};
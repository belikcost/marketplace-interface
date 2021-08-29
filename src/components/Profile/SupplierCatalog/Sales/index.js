import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import editIcon from "../../../../img/mini_button_edit.svg";
import deleteIcon from "../../../../img/mini_button_delite.svg";

import './index.scss';


const Sales = ({sales, handleGetSales}) => {
    const {t} = useTranslation();

    useEffect(() => {
        handleGetSales();
    }, [handleGetSales]);

    if (sales) {
        return (
            <div className="supplier-sales">
                <header>
                    <Link to="add-sale" className="supplier-sales_link">
                        {t('addSale')}
                    </Link>
                </header>
                <div>
                    {sales.map(sale => (
                        <div className="supplier-sale" key={sale.id}>
                            <p>{t(sale.title)}</p>
                            <span>
                            {`${t(sale.amount)}% / ${sale.since}`}
                        </span>
                            <div className="supplier-sale__button-group">
                                <Link to={`/profile/catalog/edit-sale/${sale.id}`}>
                                    <img src={editIcon} alt={t('edit')}/>
                                </Link>
                                <img src={deleteIcon} alt={t('delete')}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Sales;
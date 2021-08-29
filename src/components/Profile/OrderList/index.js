import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { List as SupplierList } from "./Supplier/List";
import { List as CustomerList } from "./Customer/List";


const OrderList = ({locale, userRole, orderList}) => {
    const {t} = useTranslation();


    return (
        <>
            <h1>{t('orderList')}</h1>
            <div className="profile__header-tabs">
                <NavLink to="/profile/order-list/new">{t('newOrders')}</NavLink>
                <NavLink to="/profile/order-list/sent">{t('sentOrders')}</NavLink>
                <NavLink to="/profile/order-list/received">{t('receivedOrders')}</NavLink>
            </div>
            {userRole === 'supplier' ? (
                <SupplierList
                    locale={locale}
                    list={orderList}
                />
            ) : (
                <CustomerList
                    locale={locale}
                    list={orderList}
                />
            )}
        </>
    )
};

export default OrderList;
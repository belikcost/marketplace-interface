import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ListOfProducts } from "../ListOfProducts";

import contactSupplierIcon from '/src/img/mini_button_chat.svg';
import homeSupplierIcon from '/src/img/mini_button_home.svg';

import './Order.scss'


export const Order = ({locale, order, buttons}) => {
    const {t} = useTranslation();


    return (
        <div className="order">
            <div className="order__body">
                <div className="order__info">
                    {order.supplier ? (
                        <>
                            <h4>{order.supplier.title}</h4>
                            <Link to={`/supplier/${order.supplier.id}/send-message`}>
                                <img src={contactSupplierIcon} alt={t('contactSupplier')}/>
                            </Link>
                            <Link to={`/supplier/${order.supplier.id}`}>
                                <img src={homeSupplierIcon} alt={t('homeSupplier')}/>
                            </Link>
                        </>
                    ) : (
                        <>
                            <h4>{`${t('order')} № ${order.id}`}</h4>
                            <span>{format(new Date(order.createdAt), 'PPP, H:m', {locale: locale})}</span>
                        </>
                    )}
                    <p>{t(`orderStatus${order.status}`)}</p>
                    {order.trackId && (
                        <span>{order.trackId}</span>
                    )}
                </div>
                <div>
                    <ListOfProducts products={order.products}/>
                    {!order.supplier && (
                        <div className="order__total">
                            <h5>{t('total')}</h5>
                            <span>{order.total} ₽</span>
                        </div>
                    )}
                </div>
                <div className="order__button-group">
                    {buttons.map((button, i) => (
                        <Link to={`${button.url}/${order.id}`} title={t(button.name)} key={i}>
                            <img src={button.icon} alt={t(button.name)}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};


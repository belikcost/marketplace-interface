import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import { format } from "date-fns";

import { Order } from "../Order";
import { Search } from "../../../../base/Fields/Search";

import cancelIcon from '/src/img/Mini_button_cancel.svg';
import sendTrackIcon from '/src/img/mini_button_send.svg';

import './List.scss';


export const List = ({locale, list}) => {
    const {t} = useTranslation();
    const match = useRouteMatch();

    const buttons = [
        {
            name: 'track',
            url: `/profile/order-list/${match.params.status}/tracking`,
            icon: sendTrackIcon
        }
    ];

    return (
        <>
            <Search/>
            {list.map(item => (
                <div className="customer-order" key={item.id}>
                    <header>
                        <div className="customer-order_row">
                            <h4>{`${t('order')} №${item.id}`}</h4>
                            <span>{format(new Date(item.createdAt), 'PPP, H:m', {locale: locale})}</span>
                        </div>
                        <div className="customer-order_row">
                            <div className="customer-order_row">
                                <span>{t('total')}</span>
                                <h4>{item.total} ₽</h4>
                            </div>
                            <img src={cancelIcon} className="customer-order_button" alt={t('cancel')}/>
                        </div>

                    </header>
                    {item.orders.map(order => (
                        <Order
                            locale={locale}
                            order={order}
                            buttons={buttons}
                            key={order.id}
                        />
                    ))}
                </div>
            ))}
        </>
    )
};



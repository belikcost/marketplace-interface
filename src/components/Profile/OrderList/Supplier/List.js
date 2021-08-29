import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, useRouteMatch } from "react-router-dom";

import { TrackModal } from "./TrackModal";
import { Order } from "../Order";

import cancelIcon from '/src/img/Mini_button_cancel.svg';
import sendTrackIcon from '/src/img/mini_button_send.svg';
import searchIcon from '/src/img/loop.svg';


export const List = ({locale, list}) => {
    const {t} = useTranslation();
    const match = useRouteMatch();
    const [searchString, setSearchString] = useState('');

    const onChange = (e) => {
        const value = e.target.value;
        setSearchString(value);
    };

    const buttons = [
        {
            name: 'track',
            url: `/profile/order-list/${match.params.status}/tracking`,
            icon: sendTrackIcon
        },
        {
            name: 'cancel',
            url: `/profile/order-list/${match.params.status}/cancel`,
            icon: cancelIcon
        }
    ];

    return (
        <>
            <div className="order-list">
                <div className="order-list__search">
                    <input type="date" placeholder={t('chooseOrderDate')}/>
                    <label>
                        <input type="text" value={searchString} onChange={onChange} placeholder={t('enterOrderIdOrProductName')}/>
                        <img src={searchIcon} alt={t('send')}/>
                    </label>
                </div>
                {list.map(order => (
                    <Order
                        locale={locale}
                        order={order}
                        buttons={buttons}
                        key={order.id}
                    />
                ))}
            </div>
            <Route path="/profile/order-list/:status/tracking/:orderId" component={TrackModal}/>
        </>
    )
};
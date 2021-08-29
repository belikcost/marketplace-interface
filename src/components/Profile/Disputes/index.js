import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";

import { ListOfProducts } from "../ListOfProducts";

import contactSupplierIcon from '/src/img/mini_button_chat.svg';
import contactServiceIcon from '/src/img/mini_button_hammer.svg';

import './index.scss';


const Disputes = ({locale, disputes}) => {
    const {t} = useTranslation();

    const calculateTotalPrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    };

    return (
        <>
            <h1>{t('disputes')}</h1>
            <div className="profile__header-tabs">
                <NavLink to="/profile/disputes/opened">{t('openedDisputes')}</NavLink>
                <NavLink to="/profile/disputes/closed">{t('closedDisputes')}</NavLink>
            </div>
            <div>
                {disputes ? disputes.map(dispute => (
                    <div className="dispute" key={dispute.id}>
                        <div className="dispute__info">
                            <h4 className="dispute_bold-text">{`${t('dispute')} № ${dispute.id}`}</h4>
                            <p>{format(new Date(dispute.createdAt), 'MM/dd/yy', {locale: locale})}</p>
                            <p className="dispute__type">{t(`disputeType${dispute.type}`)}</p>
                            <p className="dispute_bold-text">{t(`disputeStatus${dispute.status}`)}</p>
                        </div>
                        <div className="dispute__body">
                            <ListOfProducts products={dispute.products}/>
                            <div className="dispute__total-price">
                                <h4>{t('totalPrice')}</h4>
                                <h4 className="dispute_bold-text">{calculateTotalPrice(dispute.products)}</h4>
                            </div>
                        </div>
                        <div className="dispute__button-group">
                            <img src={contactSupplierIcon} alt={t('contactSupplier')}/>
                            <img src={contactServiceIcon} alt={t('contactService')}/>
                        </div>
                    </div>
                )) : (
                    <h4>{t('disputesNotFound')}</h4>
                )}
            </div>
        </>
    );
}

export default Disputes;
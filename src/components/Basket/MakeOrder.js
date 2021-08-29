import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Input } from "../../base/Fields/Input";
import Modal from "../../base/Modal";

import './MakeOrder.scss';


export const MakeOrder = () => {
    const {t} = useTranslation();
    const history = useHistory();

    const initialData = {
        email: '',
        city: '',
    };
    const [data, setData] = useState(initialData);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessModal(true);
    }

    return (
        <div className="container">
            <div className="make-order">
                <h1>{t('makeOrder')}</h1>
                <form onSubmit={handleSubmit}>
                    <Input name="email" data={data} handleChange={handleChangeData} required={true}/>
                    <Input name="city" data={data} handleChange={handleChangeData} required={true}/>
                    <button>{t('sendOrder')}</button>
                </form>
                {showSuccessModal && (
                    <Modal title={t('thanksForOrder')} handleCloseModal={() => history.push('/')} className="make-order_modal">
                        <p>{t('orderSuccessMessage')}</p>
                        <Link to="/">{t('goToHome')}</Link>
                    </Modal>
                )}
            </div>
        </div>
    );
};
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { toUpperCaseFirst } from "../../utils";

import Modal from "../../base/Modal";
import './Login.scss';


export const LoginRegister = ({type, user, handleRequest, handleCloseModal, handleReverse}) => {
    const initialData = type === 'signIn' ? {
        email: '',
        password: ''
    } : {
        email: '',
        city: '',
        password: '',
        repeatPassword: ''
    };

    const {t} = useTranslation();
    let history = useHistory();
    const [sendData, setSendData] = useState(initialData);
    const [error, setError] = useState();

    const handleSetData = (key, value) => {
        setSendData({...sendData, [key]: value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (type === 'signUp') {
            if (sendData.password === sendData.repeatPassword) {
                handleRequest(sendData);
            } else {
                setError('passwordsDoNotEquals');
            }
        } else {
            handleRequest(sendData);
        }

    };

    useEffect(() => {
        console.log(user);
        if (user) {
            if (!user.error) {
                handleCloseModal();
                // history.push('/')
            } else {
                setError(user.error);
            }
        }
    }, [handleCloseModal, user])

    return (
        <Modal title={t(type)} handleCloseModal={handleCloseModal} className="login-modal">
            <form onSubmit={onSubmit}>
                {Object.keys(initialData).map((key, i) => (
                    <div className="login-modal_row" key={i}>
                        <p>{t(key)}</p>
                        <input
                            type={(key === 'email' && key) || (key === 'password' && key) || 'text'}
                            value={sendData[key]}
                            onChange={(e) => handleSetData(key, e.target.value)}
                            placeholder={t(`enter${toUpperCaseFirst(key)}`)}
                            required
                        />
                    </div>
                ))}
                <button>{t(type)}</button>
                <b>{t('byPhoneNumber')}</b>
            </form>
            {error && (
                <p>{t(error)}</p>
            )}
            <div className="login-modal__footer">
                {type === 'signIn' ? (
                    <>
                        <span>{t('forgotPassword')}</span>
                        <button onClick={handleReverse}>{t('signUp')}</button>
                    </>
                ) : (
                    <>
                        <span>{t('alreadyRegister')}</span>
                        <button onClick={handleReverse}>{t('signIn')}</button>
                    </>
                )}
            </div>
        </Modal>
    );
}

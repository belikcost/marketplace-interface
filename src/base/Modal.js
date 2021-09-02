import { useTranslation } from "react-i18next";

import './Modal.scss';
import closeIcon from "../img/close_icon.svg";


const Modal = ({title, handleCloseModal, className, children}) => {
    const {t} = useTranslation();

    return (
        <div className="modal__container">
            <div className={`modal ${className}`}>
                <img src={closeIcon} onClick={handleCloseModal} className="modal__close" alt={t('close')}/>
                <div className="modal__title">
                    <h1>{title}</h1>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
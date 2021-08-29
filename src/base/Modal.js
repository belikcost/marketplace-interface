import { useTranslation } from "react-i18next";

import './Modal.scss';
import closeIcon from "../img/close_icon.svg";


const Modal = ({title, handleCloseModal, className, children}) => {
    const {t} = useTranslation();

    return (
        <div className="modal__container">
            <div className={`modal ${className}`}>
                <div className="modal__title">
                    <h1>{title}</h1>
                    <img src={closeIcon} onClick={handleCloseModal} alt={t('close')}/>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
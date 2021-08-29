import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import Modal from "../../../../base/Modal";
import './TrackModal.scss';


export const TrackModal = ({match:{params: {status}}}) => {
    const {t} = useTranslation();
    const history = useHistory();

    return (
        <Modal title={t('trackNumber')} handleCloseModal={() => history.push(`/profile/order-list/${status}`)} className="track-modal">
            <form>
                <label>
                    <p>{t('trackNumberForCustomer')}</p>
                    <input type="text" placeholder={t('enterTrackNumber')} required/>
                </label>
                <button>{t('send')}</button>
            </form>
        </Modal>
    )
}
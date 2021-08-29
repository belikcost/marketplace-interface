import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import Modal from "../../../base/Modal";


export const ResponseModal = () => {
    const {t} = useTranslation();
    const history = useHistory();


    return (
      <Modal
          title={t('sendResponse')}
          handleCloseModal={() => history.push('/profile/reviews')}
          className="supplier-reviews__modal"
      >
          <form>
              <label>
                  <p>{t('responseText')}</p>
                  <input type="text" placeholder={t('enterResponseText')} required/>
              </label>
              <button>{t('send')}</button>
          </form>
      </Modal>
    );
};
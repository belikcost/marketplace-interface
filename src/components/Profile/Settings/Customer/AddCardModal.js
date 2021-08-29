import { useTranslation } from "react-i18next";

import Modal from "../../../../base/Modal";

import cardsLogo from "../../../../img/cards logo.svg";
import { Checkbox } from "../../../../base/Fields/Checkbox";


export const AddCardModal = ({data, handleChangeData, modalData, setModalData}) => {
    const {t} = useTranslation();

    const getYear = (validityPeriod) => validityPeriod.split('/')[1];
    const getMonth = (validityPeriod) => validityPeriod.split('/')[0];

    const handleChangeMain = (bankCards) => bankCards.map(bankCard => modalData.main ? {...bankCard, main: false} : bankCard);

    const handleChangeNumber = (number) => {
        if (number.length <= 16) {
            setModalData({...modalData, number});
        }
    };

    const handleChangeValidityPeriod = (month, year) => {
        const currentYear = getYear(modalData.validityPeriod);
        const currentMonth = getMonth(modalData.validityPeriod);
        let newMonth = month, newYear = year;

        if (newMonth === null || newMonth.length > 2) {
            newMonth = currentMonth;
        }
        if (newYear === null || newYear.length > 2) {
            newYear = currentYear;
        }

        if (newYear !== currentYear || newMonth !== currentMonth) {
            setModalData({
                ...modalData,
                validityPeriod: `${newMonth}/${newYear}`
            });
        }
    };

    const handleChangeCVC = (CVC) => {
        if (CVC.length <= 3) {
            setModalData({...modalData, CVC});
        }
    };

    const handleSaveCard = (e) => {
        e.preventDefault();
        if (modalData.id) {
            handleChangeData('bankCards', handleChangeMain(data.bankCards).map(bankCard => bankCard.id === modalData.id ? modalData : bankCard));
        } else {
            handleChangeData('bankCards', [...handleChangeMain(data.bankCards), modalData]);
        }
        setModalData();
    };

    return (
        <Modal
            title={t('addBankCard')}
            handleCloseModal={() => setModalData()}
            className="profile-settings__card-modal"
        >
            <form onSubmit={handleSaveCard}>
                <img src={cardsLogo} alt="cards logo"/>
                <input
                    type="number"
                    value={modalData.number}
                    onChange={(e) => handleChangeNumber(e.target.value)}
                    placeholder={t('cardNumber')}
                    required
                />
                <div>
                    <label>
                        <p>{t('validityPeriod')}</p>
                        <div>
                            <input
                                type="number"
                                value={getMonth(modalData.validityPeriod)}
                                onChange={(e) => handleChangeValidityPeriod(e.target.value, null)}
                                placeholder={t('monthNumber')}
                                required
                            />
                            <input
                                type="number"
                                value={getYear(modalData.validityPeriod)}
                                onChange={(e) => handleChangeValidityPeriod(null, e.target.value)}
                                placeholder={t('year')}
                                required
                            />
                        </div>
                    </label>
                    <label>
                        <p>{t('CVC')}</p>
                        <input
                            type="password"
                            value={modalData.CVC}
                            onChange={(e) => handleChangeCVC(e.target.value)}
                            placeholder={t('enterCVC')}
                            required
                        />
                    </label>
                </div>
                <footer>
                    <Checkbox
                        name="main"
                        data={modalData}
                        handleChange={(name, value) => setModalData({...modalData, [name]: value})}
                        className="profile-settings_checkbox"
                    />
                    <button type="submit">
                        {t('save')}
                    </button>
                </footer>
            </form>
        </Modal>
    );
}
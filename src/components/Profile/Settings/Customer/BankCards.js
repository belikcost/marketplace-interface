import { useTranslation } from "react-i18next";

import closeIcon from '/src/img/times.svg';


export const BankCards = ({data, handleChangeData, setModalData}) => {
    const {t} = useTranslation();
    const initialData = {
        number: '',
        validityPeriod: '/',
        CVC: '',
        main: true
    };

    const handleRemoveCard = (id, index) => {
        handleChangeData('bankCards', data.bankCards.filter((bankCard, i) => id ? (bankCard.id !== id) : (i !== index)));
    };

    return (
        <section>
            <h4>{t('bankCards')}</h4>
            <p className="profile-settings_info-text">{t('bankCardsInformation')}</p>

            {data.bankCards.map((bankCard, i) => (
                <div className="profile-settings_bank-card" key={i}>
                    <h6 onClick={() => setModalData(bankCard)}>{bankCard.number}</h6>
                    <div>
                        {bankCard.main && (
                            <p>{t('mainCard')}</p>
                        )}
                        <img src={closeIcon} onClick={() => handleRemoveCard(bankCard.id, i)} alt={t('close')}/>
                    </div>
                </div>
            ))}

            <button className="profile-settings_button" type="button" onClick={() => setModalData(initialData)}>
                {t('addBankCard')}
            </button>
        </section>
    );
}
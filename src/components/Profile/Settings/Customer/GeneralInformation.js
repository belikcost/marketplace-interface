import { useTranslation } from "react-i18next";

import { Input } from "../../../../base/Fields/Input";


export const GeneralInformation = ({data, handleChangeData}) => {
    const {t} = useTranslation();

    return (
        <>
            <Input name="name" data={data} handleChange={handleChangeData} required={true}/>
            <Input name="surname" data={data} handleChange={handleChangeData} required={true}/>
            <label>
                <p>{t('bornDate')}</p>
                <input
                    type="date"
                    value={data.bornDate}
                    onChange={(e) => handleChangeData('bornDate', e.target.value)}
                    placeholder={t('enterBornDate')}
                />
            </label>
        </>
    );
}
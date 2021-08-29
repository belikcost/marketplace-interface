import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "../../../../base/Fields/Input";

import { toBase64 } from "../../../../utils";


export const GeneralInformation = ({userRole, data, handleChangeData}) => {
    const {t} = useTranslation();


    return (
        <>
            <Input name="title" data={data} handleChange={handleChangeData} required={true}/>
            <label>
                <p>{t('aboutSupplier')}</p>
                <textarea
                    value={data.aboutSupplier}
                    onChange={(e) => handleChangeData('aboutSupplier', e.target.value)}
                    placeholder={t('enterText')}
                />
            </label>
            <Input name="officeAddress" data={data} handleChange={handleChangeData}/>
        </>
    );
}
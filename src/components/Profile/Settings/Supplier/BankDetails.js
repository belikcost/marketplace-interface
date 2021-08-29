import { useTranslation } from "react-i18next";

import { Input } from "../../../../base/Fields/Input";


export const BankDetails = ({data, handleChangeData}) => {
    const {t} = useTranslation();


    return (
        <section>
            <h4>{t('bankDetails')}</h4>
            <article>
                <Input name="legalEntityName" data={data} handleChange={handleChangeData}/>
                <Input name="TIN" data={data} handleChange={handleChangeData}/>
                <Input name="CRR" data={data} handleChange={handleChangeData}/>
                <Input name="legalAddress" data={data} handleChange={handleChangeData}/>
            </article>
            <article>
                <h5>{t('bank')}</h5>
                <Input name="bankName" data={data} handleChange={handleChangeData}/>
                <Input name="BIC" data={data} handleChange={handleChangeData}/>
                <Input name="bankAccount" data={data} handleChange={handleChangeData}/>
                <Input name="correspondentAccount" data={data} handleChange={handleChangeData}/>
            </article>
        </section>
    );
}
import { useTranslation } from "react-i18next";

import { Input } from "../../../../base/Fields/Input";


export const DeliveryInformation = ({data, handleChangeData}) => {
    const {t} = useTranslation();


    return (
        <section>
            <h4>{t('deliveryInformation')}</h4>
            <Input name="country" data={data} handleChange={handleChangeData}/>
            <Input name="city" data={data} handleChange={handleChangeData}/>
            <Input name="address" data={data} handleChange={handleChangeData}/>
            <Input name="postalCode" data={data} handleChange={handleChangeData}/>
        </section>
    );
}
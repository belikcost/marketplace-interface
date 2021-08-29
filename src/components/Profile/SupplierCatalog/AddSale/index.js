import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './index.scss';
import { Input } from "../../../../base/Fields/Input";


const AddSale = ({match, shop, currentSale, handleGetSale}) => {
    const {t} = useTranslation();
    const history = useHistory();

    const initialData = {
        title: '',
        amount: '',
        since: ''
    };

    const [data, setData] = useState(initialData);

    useEffect(() => {
        if (match.params.id) {
            handleGetSale(match.params.id);
        }
    }, [match.params.id]);

    useEffect(() => {
        if (currentSale) {
            setData(currentSale);
        }
    }, [currentSale]);

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    };

    const validateAndSave = (e) => {
        e.preventDefault();
        history.push('/profile/catalog/sales');
    }

    if (!match.params.id || currentSale) {
        return (
            <form className="add-sale" onSubmit={validateAndSave}>
                <header>
                    <h1>{match.params.id ? t('editSale') : t('addSale')}</h1>
                    <Link to="/profile/catalog/sales">{t('sales')}</Link>
                </header>
                <div className="add-sale__body">
                    <Input name="title" data={data} handleChange={handleChangeData} required={true}/>
                    <Input name="amount" data={data} handleChange={handleChangeData} required={true}/>
                    <Input name="since" data={data} handleChange={handleChangeData} required={true}/>
                </div>
                <button className="add-sale_button">{t('save')}</button>
            </form>
        );

    } else {
        return null;
    }
}

export default AddSale;
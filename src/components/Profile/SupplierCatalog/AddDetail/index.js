import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './index.scss';
import { Input } from "../../../../base/Fields/Input";
import { CategorySelect } from "../../../../base/Fields/CategorySelect";


const AddDetail = ({match, shop, currentDetail, handleGetCurrentDetail}) => {
    const {t} = useTranslation();
    const history = useHistory();
    const [error, setError] = useState(false);

    const initialData = {
        title: '',
        category: [],
        values: []
    };

    const [data, setData] = useState(initialData);

    useEffect(() => {
        if (match.params.id) {
            handleGetCurrentDetail(match.params.id);
        }
    }, [match.params.id]);

    useEffect(() => {
        if (currentDetail) {
            setData(currentDetail);
        }
    }, [currentDetail]);

    const handleChangeData = (name, value) => {
        setData({...data, [name]: value});
    };

    const validateAndSave = (e) => {
        e.preventDefault();
        if (data.category.length === 0) {
            setError(true);
        } else {
            history.push('/profile/catalog/product-details');
        }
    }

    if (!match.params.id || currentDetail) {
        return (
            <form className="add-detail" onSubmit={validateAndSave}>
                <header>
                    <h1>{match.params.id ? t('editDetail') : t('addDetail')}</h1>
                    <Link to="/profile/catalog/product-details">{t('productDetails')}</Link>
                </header>
                <div className="add-detail__body">
                    <Input name="title" data={data} handleChange={handleChangeData} required={true}/>
                    <CategorySelect
                        shop={shop}
                        category={data.category}
                        handleChange={handleChangeData}
                        className="add-detail"
                    />
                </div>
                {error && (
                    <p className="add-detail_error">
                        {t('allFieldsMustFill')}
                    </p>
                )}
                <button className="add-detail_button">{t('save')}</button>
            </form>
        );

    } else {
        return null;
    }
}

export default AddDetail;
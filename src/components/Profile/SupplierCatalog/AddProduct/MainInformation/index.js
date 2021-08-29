import { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Input } from "../../../../../base/Fields/Input";
import { CategorySelect } from "../../../../../base/Fields/CategorySelect";


const MainInformation = ({shop, languages, icons, data, handleChange, sales}) => {
    const {t} = useTranslation();
    const history = useHistory();

    const [chosenLanguage, setChosenLanguage] = useState(i18next.language);
    const [error, setError] = useState(false);

    const onChange = (name, value) => handleChange(chosenLanguage, name, value);

    const validateAndGoNext = () => {
        let error = false;
        setError(false);

        languages.forEach((language, i) => {
            const fields = Object.keys(data[language]);
            if (!fields.every(field => data[language][field].length !== 0)) {
                setError(true);
                error = true;
            } else if (!error && i === languages.length - 1) {
                history.push('/profile/catalog/add-product/media');
            }
        });
    };

    return (
        <>
            <div>
                <header>
                    <h4>{t('mainInformation')}</h4>
                    <div className="add-product__languages">
                        {languages.map((language, i) => (
                            <span
                                onClick={() => setChosenLanguage(language)}
                                className={language === chosenLanguage ? 'active' : ''}
                                key={i}
                            >
                            <img src={icons[language]} alt={t(language)}/>
                            <p>{language}</p>
                        </span>
                        ))}
                    </div>
                </header>

                <Input name="title" data={data[chosenLanguage]} handleChange={onChange}/>
                <CategorySelect
                    shop={shop}
                    category={data[chosenLanguage].category}
                    handleChange={onChange}
                    className="add-product"
                />

                <Input name="vendor_code" data={data[chosenLanguage]} handleChange={onChange}/>
                <Input name="price" data={data[chosenLanguage]} handleChange={onChange}/>
                <label>
                    <p>{t('sale')}</p>
                    <select
                        value={(data[chosenLanguage].sale && data[chosenLanguage].sale.id) || 'default'}
                        onChange={(e) => onChange('sale', sales.find(sale => sale.id === +e.target.value))}
                    >
                        <option value="default" disabled>{t('choseSale')}</option>
                        {sales && sales.map(sale => (
                            <option value={sale.id} key={sale.id}>{t(sale.title)}</option>
                        ))}
                    </select>
                </label>
                <label className="add-product__description">
                    <p>{t('productDescription')}</p>
                    <textarea
                        value={data[chosenLanguage].description}
                        onChange={(e) => onChange('description', e.target.value)}
                        cols="30"
                        rows="10"
                    />
                </label>
            </div>
            {error && (
                <p className="add-product_error">{t('allFieldsMustFill')}</p>
            )}
            <div className="add-product__footer">
                <button onClick={validateAndGoNext}>
                    {t('next')}
                </button>
            </div>
        </>
    );
}

export default MainInformation;
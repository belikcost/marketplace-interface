import { useTranslation } from "react-i18next";
import removeIcon from "../../img/trash_active.svg";


export const CategorySelect = ({shop, category, handleChange, className}) => {
    const {t} = useTranslation();
    let options = shop;

    category.forEach((item, i) => {
        if (i !== 2) {
            options = options[item]
        }
    });

    if (!Array.isArray(options)) {
        options = Object.keys(options);
    }

    const handleRemoveCategory = (i) => {
        let result = [...category];
        result.splice(i, result.length - i);
        handleChange('category', result);
    };

    return (
        <>
            <label>
                <p>{t('category')}</p>
                <select
                    value="default"
                    onChange={(e) => handleChange('category', [...category, e.target.value])}
                    disabled={category.length === 3}
                >
                    <option value="default" disabled>
                        {t('choseCategory')}
                    </option>
                    {options.map((option, i) => (
                        <option value={option} key={i}>
                            {t(option)}
                        </option>
                    ))}
                </select>
            </label>
            {category.length !== 0 && (
                <div className={`${className}__categories`}>
                    {category.map((item, i) => (
                        <div key={i}>
                                <span>
                                    {t(item)}
                                </span>
                            <img src={removeIcon} onClick={() => handleRemoveCategory(i)} alt={t('remove')}/>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
import { useTranslation } from "react-i18next";

import { toUpperCaseFirst } from "../../utils";


export const Select = ({name, data, handleChange, options, required}) => {
    const {t} = useTranslation();

    return (
        <label>
            <p>{t(name)}</p>
            <select
                value={data[name] || 'default'}
                onChange={(e) => handleChange(name, e.target.value)}
                required={required}
            >
                <option value="default" disabled>{t(`chose${toUpperCaseFirst(name)}`)}</option>
                {options.map((option, i) => (
                    <option value={option.value} key={i}>{t(option.name)}</option>
                ))}
            </select>
        </label>
    );
}
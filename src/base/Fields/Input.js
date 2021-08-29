import { useTranslation } from "react-i18next";

import { toUpperCaseFirst } from "../../utils";


export const Input = ({name, data, handleChange, required, disabled}) => {
    const {t} = useTranslation();

    return (
        <label>
            <p>{t(name)}</p>
            <input
                type="text"
                value={data[name]}
                onChange={(e) => handleChange(name, e.target.value)}
                placeholder={t(`enter${toUpperCaseFirst(name)}`)}
                required={required}
                disabled={disabled}
            />
        </label>
    );
}
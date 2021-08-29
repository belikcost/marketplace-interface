import { useTranslation } from "react-i18next";

export const Checkbox = ({name, data, handleChange, className}) => {
    const {t} = useTranslation();

    return (
        <label>
            <p>{t(name)}</p>
            <span
                className={`${className} ${data[name] ? `active` : ``}`}
                onClick={() => handleChange(name, !data[name])}
            />
        </label>
    );
}
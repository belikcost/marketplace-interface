import { useTranslation } from "react-i18next";

export const SelectBar = ({text, values, chosenValue, handleChoose}) => {
    const {t} = useTranslation();

    return (
        <div className="filter-selectBar">
            {text && (
                <p>{t(text)}</p>
            )}
            <div className="filter-selectBar__box">
                {values.map((value, i) => (
                    <span
                        onClick={() => handleChoose(value)}
                        className={value === chosenValue ? 'active' : ''}
                        key={i}
                    >
                        {t(value)}
                    </span>
                ))}
            </div>
        </div>
    );
}
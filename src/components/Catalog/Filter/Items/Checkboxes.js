import { useState } from "react";
import { useTranslation } from "react-i18next";
import loop from '/src/img/loop.svg';

export const Checkboxes = ({checked, values, changeValue, icons}) => {
    const {t} = useTranslation();
    const [visibleValues, setVisibleValues] = useState(values);
    const [hideSomeValues, setHideSomeValues] = useState(true);

    const handleVisibleValues = (e) => {
        let searchString = e.target.value.toLowerCase();

        if (searchString.length >= 3) {
            setVisibleValues(values.filter(value => value.toLowerCase().includes(searchString)));
        } else {
            setVisibleValues(values);
        }
    };

    const handleChangeValue = (value) => {
        if (checked.some(checkedValue => checkedValue === value)) {
            changeValue(checked.filter(checkedValue => checkedValue !== value));
        } else {
            changeValue([...checked, value]);
        }
    };

    return (
        <div className="filter-item">
            <label className="filter-item_label">
                <input type="text" onChange={handleVisibleValues}/>
                <img src={loop} alt="Loop"/>
            </label>
            <div className="filter-item__col">
                {visibleValues.map((value, i) => (!hideSomeValues || i < 5) && (
                    <div
                        key={i}
                        className="filter-item__value"
                        onClick={() => handleChangeValue(value)}
                    >
                        <span className={`filter-checkbox${checked.find(checkedValue => checkedValue === value) ? ` active` : ``}`}/>
                        {icons[value] && (
                            <img src={icons[value]} alt={t(value)}/>
                        )}
                        {t(value)}
                    </div>
                ))}
                {visibleValues.length > 5 && (
                    <p onClick={() => setHideSomeValues(!hideSomeValues)} className={`filter-item_view-all${hideSomeValues ? `` : ` active`}`}>
                        {hideSomeValues ? `Показать все` : `Скрыть`}
                    </p>
                )}
            </div>
        </div>
    );
}
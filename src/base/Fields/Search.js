import { useState } from "react";
import { useTranslation } from "react-i18next";

import searchIcon from '/src/img/loop.svg';

import './Search.scss';


export const Search = ({date, options}) => {
    const {t} = useTranslation();
    const [searchString, setSearchString] = useState('');
    const [selectedOption, setSelectedOption] = useState('default')

    const changeSearchString = (e) => {
        const value = e.target.value;
        setSearchString(value);
    };

    const changeSelectedOption = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    }

    return (
        <div className="search-field">
            {date && (
                <input type="date" placeholder={t('chooseOrderDate')}/>
            )}
            {options && (
                <select value={selectedOption} onChange={changeSelectedOption}>
                    <option value="default">{t('chooseValue')}</option>
                    {options.map((option, i) => (
                        <option value={option} key={i}>{t(option)}</option>
                    ))}
                </select>
            )}
            <label>
                <input
                    type="text"
                    value={searchString}
                    onChange={changeSearchString}
                />
                <img src={searchIcon} alt={t('send')}/>
            </label>
        </div>
    )
}
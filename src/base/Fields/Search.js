import { useState } from "react";
import { useTranslation } from "react-i18next";

import searchIcon from '/src/img/loop.svg';

import './Search.scss';


export const Search = () => {
    const {t} = useTranslation();
    const [searchString, setSearchString] = useState('');

    const onChange = (e) => {
        const value = e.target.value;
        setSearchString(value);
    };


    return (
        <div className="search-field">
            <input type="date" placeholder={t('chooseOrderDate')}/>
            <label>
                <input
                    type="text"
                    value={searchString}
                    onChange={onChange}
                    placeholder={t('enterOrderIdOrProductName')}
                />
                <img src={searchIcon} alt={t('send')}/>
            </label>
        </div>
    )
}
import { useEffect, useState } from "react";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

import Select from "../../base/Select";
import { languages } from "../../constants";
import { setReverseValue } from "../../utils";




export const TopBar = () => {
    const {t} = useTranslation();
    const [countryIcons, setCountryIcons] = useState({});
    const [showOptions, setShowOptions] = useState(false);
    const iso = i18next.language;

    const changeLang = (value) => {
        i18next.changeLanguage(value).then(console.log);
        setShowOptions(false);
    };

    const buildRow = (iso) => ` | ${t(languages.find(lang => lang.value === iso).name)} | ₽`;

    const dynamicImportIcons = async (languages) => {
        let countryIcons = {};
        await languages.map(async language => {
            await import(`/src/img/${language.value}.svg`).then(r => countryIcons[language.value] = r.default);
        })
        return countryIcons;
    }

    useEffect(() => {
        dynamicImportIcons(languages).then(setCountryIcons);
    }, [languages]);

    const Option = ({iso, isActive, onClick}) => (
        <span className={`lang-option${isActive ? ' active' : ''}`} onClick={onClick}>
            {countryIcons[iso] && (
                <img src={countryIcons[iso]} alt={iso}/>
            )}
            {buildRow(iso)}
        </span>
    );

    return (
        <div className="nav">
            <ul className="menu">
                <li>
                    <a href="/">{t("4customers")}</a>
                </li>
                <li>
                    <a href="/">{t("4suppliers")}</a>
                </li>
                <li>
                    <a href="/">{t("faq")}</a>
                </li>
            </ul>
            <div>
                <Option iso={iso} isActive={true} onClick={() => setReverseValue(showOptions, setShowOptions)}/>
                {showOptions && (
                    <div className="dropdown-options">
                        {languages.map((language) => (
                            <Option
                                iso={language.value}
                                onClick={() => changeLang(language.value)}
                                key={language.value}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
import { useEffect, useState } from "react";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

const dynamicImport = async (url) => {
    return await import(`/src/img/${url}.svg`);
}

export const TopBar = () => {
    const { t } = useTranslation();
    const [flagIcon, setFlagIcon] = useState();
    const iso = i18next.language;

    const changeLang = (e) => {
        console.log(e);
        i18next.changeLanguage(e.target.value).then(console.log);
    }

    useEffect(() => {
        dynamicImport(iso).then(r => setFlagIcon(r.default));
    }, []);

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
            <div className="lang">
                {flagIcon && (
                    <img src={flagIcon} alt={iso}/>
                )}

                <select value={iso} onChange={changeLang}>
                    <option value="ru">{t('russian')}</option>
                    <option value="en-US">{t('english')}</option>
                    <option value="ko">{t('korean')}</option>
                </select>

                <select defaultValue="rub">
                    <option value="rub">₽</option>
                </select>
            </div>
        </div>
    );
}
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import { Banner } from "./Banner";

import threeEllipse from '../../img/tripple_ellipse.svg';

import './index.scss';


const Banners = () => {
    const { t } = useTranslation();
    const isNotMedium = document.documentElement.scrollWidth > 800;
    const selector = useSelector(selector => selector);

    return (
        <div className="container">
            <div className="banners">
                {isNotMedium && (
                    <div className="small-menu">
                        <div className="small-menu__header">
                            <img src={threeEllipse} alt="Icon"/>
                            {t("popularCategories")}
                        </div>
                        <div className="small-menu__body">
                            {Object.keys(selector.shop).map((category, i) => (
                                <Link to={`/catalog/${category}`} key={i}>
                                    {selector.icons[category] && (
                                        <img src={selector.icons[category]} alt={t(category)}/>
                                    )}
                                    {t(category)}
                                </Link>
                            ))}
                        </div>
                        <div className="small-menu__footer">
                            <Link to="/catalog">
                                <p>{t('allCategories')}</p>
                            </Link>
                        </div>
                    </div>
                )}
                <Banner/>
            </div>
        </div>
    );
}

export default Banners;
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CatalogWrapper from "../../containers/CatalogWrapper";
import './index.scss';
import { useState } from "react";

const Catalog = () => {
    const selector = useSelector(s => s);
    const [currentCategory, setCurrentCategory] = useState();
    const {t} = useTranslation();

    const handleCurrentCategory = (category) => {
        setCurrentCategory(category);
    }

    return (
        <CatalogWrapper>
            <div className="catalog">
                {currentCategory ? (
                    <>
                        <div className="catalog__breadcrumbs">
                            <p onClick={() => handleCurrentCategory(undefined)}>Каталог</p>
                            <p>{t(currentCategory)}</p>
                        </div>
                        <div className="catalog_row">
                            {Object.keys(selector.shop[currentCategory]).map((subcategory, i) => (
                                <div key={i} className="catalog__subcategory">
                                    <h5>{t(subcategory)}</h5>
                                    <div className="catalog_column">
                                        {selector.shop[currentCategory][subcategory].map((item, i) => (
                                            <p key={i}>{t(item)}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="catalog_column">
                        {Object.keys(selector.shop).map((category, i) => (
                            <p className="catalog__category" key={i} onClick={() => handleCurrentCategory(category)}>
                                <img src={selector.icons[category]} alt={t(category)}/>
                                {t(category)}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </CatalogWrapper>
    );
}

export default Catalog;
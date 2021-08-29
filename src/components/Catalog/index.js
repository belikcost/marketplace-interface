import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './index.scss';


const Catalog = () => {
    const selector = useSelector(s => s);
    const {t} = useTranslation();

    return (
        <div className="container catalog-wrapper">
            <div className="catalog">
                <div className="catalog_column">
                    {Object.keys(selector.shop).map((category, i) => (
                        <Link to={`/catalog/${category}`} className="catalog__category" key={i}>
                            <img src={selector.icons[category]} alt={t(category)}/>
                            {t(category)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
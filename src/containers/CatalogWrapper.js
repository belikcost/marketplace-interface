import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './CatalogWrapper.scss';

const CatalogWrapper = ({children}) => {
    const { t } = useTranslation();
    const location = useLocation();
    const breadcrumbs = location.pathname.replace(/\/catalog\/*/, '');

    return (
        <div className="container catalog-wrapper">
            {/*{breadcrumbs.length > 0 && (*/}
            {/*    <div className="catalog-wrapper__breadcrumbs">*/}
            {/*        <Link to="/catalog">Каталог</Link>*/}
            {/*        {breadcrumbs.split('/').map((breadcrumb, i) => (*/}
            {/*            <Link*/}
            {/*                key={i}*/}
            {/*                to={`/catalog${i-- > 0 ? `/${breadcrumbs.split('/')[i--]}` : ''}/${breadcrumb}`}*/}
            {/*            >*/}
            {/*                {t(breadcrumb)}*/}
            {/*            </Link>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*)}*/}
            {children}
        </div>
    )
}

export default CatalogWrapper;
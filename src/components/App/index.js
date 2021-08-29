import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Banners from "../Banners";
import Products from "../Products";
import Suppliers from "../Suppliers";
import Articles from "../Articles";

import './index.scss';


const App = ({products, suppliers, handleGetSuppliers, articles}) => {
    const {t} = useTranslation();

    return (
        <>
            <Banners/>
            <div className="container">
                <div className="homepage">
                    <section>
                        <h1>{t('hurryUp')}</h1>
                        <Products products={products}/>
                    </section>
                    <section>
                        <h1>{t('ourShops')}</h1>
                        <Suppliers suppliers={suppliers} handleGetSuppliers={handleGetSuppliers}/>
                    </section>
                    <section>
                        <h1>{t('ourArticles')}</h1>
                        <Articles articles={articles}/>
                        <Link to="/articles" className="homepage_link">
                            {t('allArticles')}
                        </Link>
                    </section>
                </div>
            </div>
        </>
    );
};

export default App;
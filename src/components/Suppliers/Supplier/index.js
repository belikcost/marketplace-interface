import { useTranslation } from "react-i18next";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import { calculateTotalRating } from "../../../utils";
import { Reviews } from "./Reviews";
import { Products } from "./Products";

import starIcon from '/src/img/star_fill.svg';

import './index.scss';


const Supplier = ({locale, supplier, products, reviews, handleGetReviews}) => {
    const {t} = useTranslation();

    if (supplier) {
        return (
            <div className="supplier-page">
                <header>
                    <div className="supplier-page_flag">
                        <p>{t(supplier.status)}</p>
                    </div>
                    <div className="supplier-page_col">
                        <div className="supplier-page_row">
                            <div className="supplier-page_row">
                                <img src={supplier.avatar} alt={t(supplier.title)}/>
                                <h4>{t(supplier.title)}</h4>
                            </div>
                            <div className="supplier-page_row">
                                <h4 className="supplier-page_text-bold">{calculateTotalRating(supplier.rating)}</h4>
                                <img src={starIcon} alt={calculateTotalRating(supplier.rating)}/>
                            </div>
                        </div>
                        <div className="supplier-page_row">
                            <div>
                                <span>{supplier.rating[0]}</span>
                                <p>{t('deliverySpeed')}</p>
                            </div>
                            <div>
                                <span>{supplier.rating[1]}</span>
                                <p>{t('feedback')}</p>
                            </div>
                            <div>
                                <span>{supplier.rating[2]}</span>
                                <p>{t('productQuality')}</p>
                            </div>
                        </div>
                        <button>
                            {t('contactSupplier')}
                        </button>
                    </div>
                </header>
                <div className="container">
                    <nav>
                        <NavLink to={`/supplier/${supplier.id}/products`}>{t('products')}</NavLink>
                        <NavLink to={`/supplier/${supplier.id}/reviews`}>{t('reviews')}</NavLink>
                    </nav>
                    <Switch>
                        <Route exact path="/supplier/:id"
                               render={() => <Redirect to={`/supplier/${supplier.id}/products`}/>}/>
                        <Route path='/supplier/:id/products'>
                            <Products products={products} supplierTitle={supplier.title}/>
                        </Route>
                        <Route path='/supplier/:id/reviews'>
                            <Reviews reviews={reviews} handleGetReviews={handleGetReviews} locale={locale}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Supplier;
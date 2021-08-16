import { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import CategoryWrapper from "./containers/CategoryWrapper";
import ProductContainer from "./containers/ProductContainer";

import Header from "./components/Header";
import Banners from "./components/Banners";
import Products from "./components/Products";
import Catalog from "./components/Catalog";

import { getIcon, getProductsRequest, getShopRequest } from "./redux/actions";


const App = ({shop, onGetShopRequest, products, onGetProductsRequest, onGetIcon}) => {
    const {t} = useTranslation();

    useEffect(() => {
        onGetShopRequest();
    }, [onGetShopRequest]);

    useEffect(() => {
        onGetProductsRequest();
    }, [onGetProductsRequest])

    useEffect(() => {
        Object.keys(shop).forEach(category => onGetIcon(category));
    }, [onGetIcon, shop])

    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Banners/>
                    <div className="container">
                        <Products products={products} title={t('hurryUp')}/>
                    </div>
                </Route>
                <Route exact path="/catalog" component={Catalog}/>
                <Route exact path="/catalog/:category" component={CategoryWrapper}/>
                <Route exact path="/catalog/:category/:subcategory" component={CategoryWrapper}/>
                <Route exact path="/catalog/:category/:subcategory/:item" component={CategoryWrapper}/>
                <Route exact path="/catalog/:category/:subcategory/:item/:id" component={ProductContainer}/>
            </Switch>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        shop: state.shop,
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        onGetProductsRequest: () => dispatch(getProductsRequest()),
        onGetShopRequest: () => dispatch(getShopRequest()),
        onGetIcon: (category) => dispatch(getIcon(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

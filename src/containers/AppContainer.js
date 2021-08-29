import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';
import i18next from "i18next";

import { getCookie } from "../utils";

import {
    getArticlesRequest,
    getIcon,
    getLocale,
    getProductsRequest,
    getShopRequest,
    getSuppliersRequest,
    loginRequest
} from "../redux/actions";

import CategoryWrapper from "./CategoryWrapper";
import ProductContainer from "./ProductContainer";
import BasketContainer from "./BasketContainer";
import SupplierContainer from "./SupplierContainer";
import ArticlesContainer from "./ArticlesContainer";

import Header from "../components/Header";
import Catalog from "../components/Catalog";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import App from "../components/App";


const AppContainer = ({onGetLocale, user, onLoginRequest, shop, onGetShopRequest, products, onGetProductsRequest, onGetIcon, suppliers, onGetSuppliersRequest, articles, onGetArticlesRequest}) => {
    const [isGetLocalUser, setIsGetLocalUser] = useState(false);

    const iso = i18next.language;
    const languages = Object.keys(i18next.store.data);

    const handleGetSuppliers = useCallback(() => onGetSuppliersRequest(), [onGetSuppliersRequest]);

    useEffect(() => {
        onGetLocale(iso);
    }, [onGetLocale, iso]);

    useEffect(() => {
        const localUserHash = getCookie('user');

        if (localUserHash) {
            if (user) {
                setIsGetLocalUser(true);
            } else {
                onLoginRequest({hash: localUserHash});
            }
        }
    }, [user, onLoginRequest]);

    useEffect(() => {
        onGetShopRequest();
    }, [onGetShopRequest]);

    useEffect(() => {
        onGetProductsRequest();
    }, [onGetProductsRequest]);

    useEffect(() => {
        Object.keys(shop).forEach(category => onGetIcon(category));
    }, [onGetIcon, shop]);

    useEffect(() => {
        languages.forEach(language => onGetIcon(language));
    }, [languages, onGetIcon]);

    useEffect(() => onGetArticlesRequest(),[onGetArticlesRequest]);

    if (isGetLocalUser) {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <App
                            articles={articles}
                            products={products}
                            suppliers={suppliers}
                            handleGetSuppliers={handleGetSuppliers}
                        />
                    </Route>
                    <Route path="/articles" component={ArticlesContainer}/>
                    <Route path="/supplier/:id" component={SupplierContainer}/>
                    <Route path="/basket" component={BasketContainer}/>
                    <Route path="/profile" render={() => user ? <Profile/> : <Redirect to="/"/>}/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/catalog/:category" component={CategoryWrapper}/>
                    <Route exact path="/catalog/:category/:subcategory" component={CategoryWrapper}/>
                    <Route exact path="/catalog/:category/:subcategory/:item" component={CategoryWrapper}/>
                    <Route exact path="/catalog/:category/:subcategory/:item/:id" component={ProductContainer}/>
                </Switch>
                <Footer/>
            </>
        );
    } else {
        return null;
    }
};

const mapStateToProps = (state) => ({
    products: state.products,
    shop: state.shop,
    user: state.user,
    suppliers: state.suppliers,
    articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
    onGetLocale: (data) => dispatch(getLocale(data)),
    onLoginRequest: (data) => dispatch(loginRequest(data)),
    onGetProductsRequest: () => dispatch(getProductsRequest()),
    onGetShopRequest: () => dispatch(getShopRequest()),
    onGetIcon: (category) => dispatch(getIcon(category)),
    onGetSuppliersRequest: () => dispatch(getSuppliersRequest()),
    onGetArticlesRequest: () => dispatch(getArticlesRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);


import { useCallback } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import {
    getProductDetailRequest,
    getProductDetailsRequest,
    getSaleRequest,
    getSalesRequest,
    getSupplierProductRequest,
    getSupplierProductsRequest,
    getVariableAttributesRequest
} from "../../redux/actions";

import SupplierProducts from "../../components/Profile/SupplierCatalog/SupplierProducts";
import AddProduct from "../../components/Profile/SupplierCatalog/AddProduct";
import ProductDetails from "../../components/Profile/SupplierCatalog/ProductDetails";
import AddDetail from "../../components/Profile/SupplierCatalog/AddDetail";
import Sales from "../../components/Profile/SupplierCatalog/Sales";
import AddSale from "../../components/Profile/SupplierCatalog/AddSale";


const CatalogContainer = ({
                                      user,
                                      shop,
                                      icons,
                                      products,
                                      onGetProductsRequest,
                                      variableAttributes,
                                      onGetVariableAttributesRequest,
                                      productDetails,
                                      onGetProductDetailsRequest,
                                      currentProduct,
                                      onGetProductRequest,
                                      currentProductDetail,
                                      onGetProductDetailRequest,
                                      sales,
                                      onGetSalesRequest,
                                      currentSale,
                                      onGetSaleRequest
                                  }) => {
    const {t} = useTranslation();

    const handleGetProducts = useCallback(() => {
        onGetProductsRequest(user.id);
    }, [onGetProductsRequest, user.id]);

    const handleGetAttributes = useCallback(() => {
        onGetVariableAttributesRequest();
    }, [onGetVariableAttributesRequest]);

    const handleGetProductDetails = useCallback(() => {
        onGetProductDetailsRequest(user.id);
    }, [onGetProductDetailsRequest, user.id]);

    const handleGetProductDetail = useCallback((id) => onGetProductDetailRequest(id), [onGetProductDetailRequest]);

    const handleGetSales = useCallback(() => {
        onGetSalesRequest(user.id);
    }, [onGetSalesRequest, user.id]);

    const handleGetSale = useCallback((id) => onGetSaleRequest(id), [onGetSaleRequest]);

    return (
        <>
            <Route path="/profile/catalog" render={({location: {pathname}}) => {

                if (pathname === "/profile/catalog") {
                    return <Redirect to="/profile/catalog/products"/>;

                } else if (!/add|edit/.test(pathname)) {

                    return (
                        <>
                            <h1>{t('catalog')}</h1>
                            <div className="profile__header-tabs">
                                <NavLink to="/profile/catalog/products">{t('products')}</NavLink>
                                <NavLink to="/profile/catalog/product-details">{t('productDetails')}</NavLink>
                                <NavLink to="/profile/catalog/sales">{t('sales')}</NavLink>
                                <NavLink to="/profile/catalog/product-export">{t('productExport')}</NavLink>
                            </div>
                        </>
                    );
                }
            }}
            />
            <Switch>
                <Route path="/profile/catalog/products">
                    <SupplierProducts
                        products={products}
                        handleGetProducts={handleGetProducts}
                    />
                </Route>
                <Route
                    path="/profile/catalog/add-product"
                    render={({match}) =>
                        <AddProduct
                            match={match}
                            shop={shop}
                            icons={icons}
                            variableAttributes={variableAttributes}
                            handleGetAttributes={handleGetAttributes}
                            details={productDetails}
                            handleGetDetails={handleGetProductDetails}
                            sales={sales}
                            handleGetSales={handleGetSales}
                        />
                    }
                />
                <Route
                    path="/profile/catalog/edit-product/:id"
                    render={({match}) =>
                        <AddProduct
                            match={match}
                            shop={shop}
                            icons={icons}
                            variableAttributes={variableAttributes}
                            handleGetAttributes={handleGetAttributes}
                            details={productDetails}
                            handleGetDetails={handleGetProductDetails}
                            sales={sales}
                            handleGetSales={handleGetSales}
                            currentProduct={currentProduct}
                            handleGetCurrentProduct={(id) => onGetProductRequest(id)}
                        />
                    }
                />
                <Route path="/profile/catalog/product-details">
                    <ProductDetails details={productDetails} handleGetDetails={handleGetProductDetails}/>
                </Route>
                <Route
                    path="/profile/catalog/add-detail"
                    render={({match}) =>
                        <AddDetail
                            match={match}
                            shop={shop}
                        />
                    }
                />
                <Route
                    path="/profile/catalog/edit-detail/:id"
                    render={({match}) =>
                        <AddDetail
                            match={match}
                            shop={shop}
                            currentDetail={currentProductDetail}
                            handleGetCurrentDetail={handleGetProductDetail}
                        />
                    }
                />
                <Route path="/profile/catalog/sales">
                    <Sales sales={sales} handleGetSales={handleGetSales}/>
                </Route>
                <Route
                    path="/profile/catalog/add-sale"
                    render={({match}) =>
                        <AddSale
                            match={match}
                            shop={shop}
                        />
                    }
                />
                <Route
                    path="/profile/catalog/edit-sale/:id"
                    render={({match}) =>
                        <AddSale
                            match={match}
                            shop={shop}
                            currentSale={currentSale}
                            handleGetSale={handleGetSale}
                        />
                    }
                />
            </Switch>
        </>
    );
}

const mapStateToProps = (state) => ({
    user: state.user,
    shop: state.shop,
    icons: state.icons,
    products: state.supplierProducts,
    variableAttributes: state.variableAttributes,
    productDetails: state.productDetails,
    currentProduct: state.currentSupplierProduct,
    currentProductDetail: state.currentProductDetail,
    sales: state.sales,
    currentSale: state.currentSale
});

const mapDispatchToProps = (dispatch) => ({
    onGetProductsRequest: (supplierId) => dispatch(getSupplierProductsRequest(supplierId)),
    onGetVariableAttributesRequest: () => dispatch(getVariableAttributesRequest()),
    onGetProductDetailsRequest: (supplierId) => dispatch(getProductDetailsRequest(supplierId)),
    onGetProductRequest: (productId) => dispatch(getSupplierProductRequest(productId)),
    onGetProductDetailRequest: (detailId) => dispatch(getProductDetailRequest(detailId)),
    onGetSalesRequest: (supplierId) => dispatch(getSalesRequest(supplierId)),
    onGetSaleRequest: (id) => dispatch(getSaleRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);


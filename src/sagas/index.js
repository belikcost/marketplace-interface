import { all, call } from "redux-saga/effects";

import { loginRequestWatcher } from "./login";
import { registerRequestWatcher } from "./register";
import { signOutWatcher } from "./signOut";
import { getBasketWatcher } from "./getBasket";
import { updateBasketWatcher } from "./updateBasket";

import { getShopWatcher } from "./shop/getShop";
import { getIconWatcher } from "./shop/getIcon";
import { getProductsWatcher } from "./shop/getProducts";
import { getProductWatcher } from "./shop/getProduct";
import { getProductAttributesWatcher } from "./shop/getProductAttributes";
import { getSupplierWatcher } from "./shop/getSupplier";
import { getProductReviewsWatcher } from "./shop/getProductReviews";
import { getLocaleWatcher } from "./shop/getLocale";
import { getSuppliersWatcher } from "./shop/getSuppliers";
import { getArticlesWatcher } from "./shop/getArticles";

import { getFiltersWatcher } from "./filters/getFilters";

import { getOrderListWatcher } from "./profile/getOrderList";
import { getSuggestedOrdersWatcher } from "./profile/getSuggestedOrders";
import { getSupplierProductsWatcher } from "./profile/getSupplierProducts";
import { getVariableAttributesWatcher } from "./profile/getVariableAttributes";
import { getProductDetailsWatcher } from "./profile/getProductDetails";
import { getSupplierProductWatcher } from "./profile/getSupplierProduct";
import { getProductDetailWatcher } from "./profile/getProductDetail";
import { getSalesWatcher } from "./profile/getSales";
import { getSaleWatcher } from "./profile/getSale";
import { getMessagesHistoryWatcher } from "./profile/getMessagesHistory";
import { getSupplierReviewsWatcher } from "./profile/getSupplierReviews";
import { getProfileWatcher } from "./profile/getProfile";
import { getDisputesWatcher } from "./profile/getDisputes";
import { getFavoritesWatcher } from "./profile/getFavorites";

import { chatConnectWatcher } from "./chat/connect";


export default function* mainSaga() {
    yield all([
        call(getShopWatcher),
        call(getIconWatcher),
        call(getLocaleWatcher),
        call(getFiltersWatcher),
        call(getProductsWatcher),
        call(getProductWatcher),
        call(getProductAttributesWatcher),
        call(getSupplierWatcher),
        call(getProductReviewsWatcher),
        call(loginRequestWatcher),
        call(signOutWatcher),
        call(registerRequestWatcher),
        call(getOrderListWatcher),
        call(getSuggestedOrdersWatcher),
        call(getSupplierProductsWatcher),
        call(getVariableAttributesWatcher),
        call(getProductDetailsWatcher),
        call(getSupplierProductWatcher),
        call(getProductDetailWatcher),
        call(getSalesWatcher),
        call(getSaleWatcher),
        call(getMessagesHistoryWatcher),
        call(chatConnectWatcher),
        call(getSupplierReviewsWatcher),
        call(getProfileWatcher),
        call(getBasketWatcher),
        call(updateBasketWatcher),
        call(getDisputesWatcher),
        call(getFavoritesWatcher),
        call(getSuppliersWatcher),
        call(getArticlesWatcher)
    ]);
};
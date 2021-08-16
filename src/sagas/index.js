import { all, call } from "redux-saga/effects";

import { getShopWatcher } from "./shop/getShop";
import { getIconWatcher } from "./shop/getIcon";
import { getProductsWatcher } from "./shop/getProducts";
import { getProductWatcher } from "./shop/getProduct";
import { getProductAttributesWatcher } from "./shop/getProductAttributes";
import { getSupplierWatcher } from "./shop/getSupplier";
import { getProductReviewsWatcher } from "./shop/getProductReviews";
import { getLocaleWatcher } from "./shop/getLocale";
import { getFiltersWatcher } from "./filters/getFilters";



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
        call(getProductReviewsWatcher)
    ]);
}
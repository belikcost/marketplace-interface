import { loginFetch } from "./login";
import { getShopFetch } from "./shop";
import { getFiltersFetch } from "./filters";
import { getProductsFetch } from "./products";
import { getProductFetch } from "./product";
import { getProductAttributesFetch } from "./productAttributes";
import { getSupplierFetch } from "./supplier";
import { getProductReviewsFetch } from "./productReviews";
import { registerFetch } from "./register";
import { getOrderListFetch } from "./orderList";
import { getSuggestedOrdersFetch } from "./suggestedOrders";
import { getSupplierProductsFetch } from "./supplierProducts";
import { getVariableAttributesFetch } from "./variableAttributes";
import { getProductDetailsFetch } from "./productDetails";
import { getSupplierProductFetch } from "./supplierProduct";
import { getProductDetailFetch } from "./productDetail";
import { getSalesFetch } from "./sales";
import { getSaleFetch } from "./sale";
import { getMessagesHistoryFetch } from "./messagesHistory";
import { getSupplierReviewsFetch } from "./supplierReviews";
import { getProfileFetch } from "./profile";
import { getBasketFetch, getBasketHashFetch, updateBasketFetch } from "./basket";
import { getDisputesFetch } from "./disputes";
import { getFavoritesFetch } from "./favorites";
import { getSuppliersFetch } from "./suppliers";
import { getArticlesFetch } from "./articles";


const API = {
    getShopFetch,
    getFiltersFetch,
    getProductsFetch,
    getProductFetch,
    getProductAttributesFetch,
    getSupplierFetch,
    getProductReviewsFetch,
    loginFetch,
    registerFetch,
    getOrderListFetch,
    getSuggestedOrdersFetch,
    getSupplierProductsFetch,
    getVariableAttributesFetch,
    getProductDetailsFetch,
    getSupplierProductFetch,
    getProductDetailFetch,
    getSalesFetch,
    getSaleFetch,
    getMessagesHistoryFetch,
    getSupplierReviewsFetch,
    getProfileFetch,
    updateBasketFetch,
    getBasketFetch,
    getBasketHashFetch,
    getDisputesFetch,
    getFavoritesFetch,
    getSuppliersFetch,
    getArticlesFetch
}

export default API;
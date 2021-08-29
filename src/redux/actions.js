import {
    GET_SHOP_FAILED,
    GET_SHOP_REQUEST,
    GET_SHOP_SUCCESS,
    GET_ICON,
    SET_ICON,
    GET_FILTERS_REQUEST,
    GET_FILTERS_FAILED,
    GET_FILTERS_SUCCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCT_FAILED,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_ATTRIBUTES_REQUEST,
    GET_PRODUCT_ATTRIBUTES_SUCCESS,
    GET_PRODUCT_ATTRIBUTES_FAILED,
    GET_SUPPLIER_REQUEST,
    GET_SUPPLIER_SUCCESS,
    GET_SUPPLIER_FAILED,
    GET_PRODUCT_REVIEWS_REQUEST,
    GET_PRODUCT_REVIEWS_SUCCESS,
    GET_PRODUCT_REVIEWS_FAILED,
    GET_LOCALE,
    SET_LOCALE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SET_USER,
    SIGN_OUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    GET_ORDER_LIST_REQUEST,
    GET_ORDER_LIST_SUCCESS,
    GET_ORDER_LIST_FAILED,
    GET_SUGGESTED_ORDERS_REQUEST,
    GET_SUGGESTED_ORDERS_SUCCESS,
    GET_SUGGESTED_ORDERS_FAILED,
    GET_SUPPLIER_PRODUCTS_REQUEST,
    GET_SUPPLIER_PRODUCTS_SUCCESS,
    GET_SUPPLIER_PRODUCTS_FAILED,
    GET_VARIABLE_ATTRIBUTES_REQUEST,
    GET_VARIABLE_ATTRIBUTES_SUCCESS,
    GET_VARIABLE_ATTRIBUTES_FAILED,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAILED,
    GET_SUPPLIER_PRODUCT_REQUEST,
    GET_SUPPLIER_PRODUCT_SUCCESS,
    GET_SUPPLIER_PRODUCT_FAILED,
    GET_PRODUCT_DETAIL_REQUEST,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILED,
    GET_SALES_REQUEST,
    GET_SALES_SUCCESS,
    GET_SALES_FAILED,
    GET_SALE_REQUEST,
    GET_SALE_SUCCESS,
    GET_SALE_FAILED,
    GET_MESSAGES_HISTORY_REQUEST,
    GET_MESSAGES_HISTORY_SUCCESS,
    GET_MESSAGES_HISTORY_FAILED,
    CHAT_CONNECT,
    SET_CHAT_CONNECT,
    GET_SUPPLIER_REVIEWS_REQUEST,
    GET_SUPPLIER_REVIEWS_SUCCESS,
    GET_SUPPLIER_REVIEWS_FAILED,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    UPDATE_BASKET_REQUEST,
    UPDATE_BASKET_SUCCESS,
    UPDATE_BASKET_FAILED,
    GET_BASKET_REQUEST,
    GET_BASKET_SUCCESS,
    GET_BASKET_FAILED,
    GET_DISPUTES_REQUEST,
    GET_DISPUTES_SUCCESS,
    GET_DISPUTES_FAILED,
    GET_FAVORITES_REQUEST,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_FAILED,
    GET_SUPPLIERS_FAILED,
    GET_SUPPLIERS_SUCCESS,
    GET_SUPPLIERS_REQUEST,
    GET_ARTICLES_REQUEST,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAILED,
} from "../constants";

export const getShopRequest = () => ({type: GET_SHOP_REQUEST});
export const getShopSuccess = (data) => ({type: GET_SHOP_SUCCESS, payload: data});
export const getShopFailed = (data) => ({type: GET_SHOP_FAILED, payload: data});
export const getIcon = (data) => ({type: GET_ICON, payload: data});
export const setIcon = (data) => ({type: SET_ICON, payload: data});
export const getLocale = (data) => ({type: GET_LOCALE, payload: data});
export const setLocale = (data) => ({type: SET_LOCALE, payload: data});
export const getFiltersRequest = (data) => ({type: GET_FILTERS_REQUEST, payload: data});
export const getFiltersSuccess = (data) => ({type: GET_FILTERS_SUCCESS, payload: data});
export const getFiltersFailed = (data) => ({type: GET_FILTERS_FAILED, payload: data});
export const getProductsRequest = () => ({type: GET_PRODUCTS_REQUEST});
export const getProductsSuccess = (data) => ({type: GET_PRODUCTS_SUCCESS, payload: data});
export const getProductsFailed = (data) => ({type: GET_PRODUCTS_FAILED, payload: data});
export const getProductRequest = (data) => ({type: GET_PRODUCT_REQUEST, payload: data});
export const getProductSuccess = (data) => ({type: GET_PRODUCT_SUCCESS, payload: data});
export const getProductFailed = (data) => ({type: GET_PRODUCT_FAILED, payload: data});
export const getProductAttributesRequest = (data) => ({type: GET_PRODUCT_ATTRIBUTES_REQUEST, payload: data});
export const getProductAttributesSuccess = (data) => ({type: GET_PRODUCT_ATTRIBUTES_SUCCESS, payload: data});
export const getProductAttributesFailed = (data) => ({type: GET_PRODUCT_ATTRIBUTES_FAILED, payload: data});
export const getSupplierRequest = (data) => ({type: GET_SUPPLIER_REQUEST, payload: data});
export const getSupplierSuccess = (data) => ({type: GET_SUPPLIER_SUCCESS, payload: data});
export const getSupplierFailed = (data) => ({type: GET_SUPPLIER_FAILED, payload: data});
export const getProductReviewsRequest = (data) => ({type: GET_PRODUCT_REVIEWS_REQUEST, payload: data});
export const getProductReviewsSuccess = (data) => ({type: GET_PRODUCT_REVIEWS_SUCCESS, payload: data});
export const getProductReviewsFailed = (data) => ({type: GET_PRODUCT_REVIEWS_FAILED, payload: data});
export const loginRequest = (data) => ({type: LOGIN_REQUEST, payload: data});
export const loginSuccess = (data) => ({type: LOGIN_SUCCESS, payload: data});
export const loginFailed = (data) => ({type: LOGIN_FAILED, payload: data});
export const registerRequest = (data) => ({type: REGISTER_REQUEST, payload: data});
export const registerSuccess = (data) => ({type: REGISTER_SUCCESS, payload: data});
export const registerFailed = (data) => ({type: REGISTER_FAILED, payload: data});
export const setUser = (data) => ({type: SET_USER, payload: data});
export const signOut = () => ({type: SIGN_OUT});
export const getOrderListRequest = (data) => ({type: GET_ORDER_LIST_REQUEST, payload: data});
export const getOrderListSuccess = (data) => ({type: GET_ORDER_LIST_SUCCESS, payload: data});
export const getOrderListFailed = (data) => ({type: GET_ORDER_LIST_FAILED, payload: data});
export const getSuggestedOrdersRequest = (data) => ({type: GET_SUGGESTED_ORDERS_REQUEST, payload: data});
export const getSuggestedOrdersSuccess = (data) => ({type: GET_SUGGESTED_ORDERS_SUCCESS, payload: data});
export const getSuggestedOrdersFailed = (data) => ({type: GET_SUGGESTED_ORDERS_FAILED, payload: data});
export const getSupplierProductsRequest = (data) => ({type: GET_SUPPLIER_PRODUCTS_REQUEST, payload: data});
export const getSupplierProductsSuccess = (data) => ({type: GET_SUPPLIER_PRODUCTS_SUCCESS, payload: data});
export const getSupplierProductsFailed = (data) => ({type: GET_SUPPLIER_PRODUCTS_FAILED, payload: data});
export const getVariableAttributesRequest = () => ({type: GET_VARIABLE_ATTRIBUTES_REQUEST});
export const getVariableAttributesSuccess = (data) => ({type: GET_VARIABLE_ATTRIBUTES_SUCCESS, payload: data});
export const getVariableAttributesFailed = (data) => ({type: GET_VARIABLE_ATTRIBUTES_FAILED, payload: data});
export const getProductDetailsRequest = (data) => ({type: GET_PRODUCT_DETAILS_REQUEST, payload: data});
export const getProductDetailsSuccess = (data) => ({type: GET_PRODUCT_DETAILS_SUCCESS, payload: data});
export const getProductDetailsFailed = (data) => ({type: GET_PRODUCT_DETAILS_FAILED, payload: data});
export const getSupplierProductRequest = (data) => ({type: GET_SUPPLIER_PRODUCT_REQUEST, payload: data});
export const getSupplierProductSuccess = (data) => ({type: GET_SUPPLIER_PRODUCT_SUCCESS, payload: data});
export const getSupplierProductFailed = (data) => ({type: GET_SUPPLIER_PRODUCT_FAILED, payload: data});
export const getProductDetailRequest = (data) => ({type: GET_PRODUCT_DETAIL_REQUEST, payload: data});
export const getProductDetailSuccess = (data) => ({type: GET_PRODUCT_DETAIL_SUCCESS, payload: data});
export const getProductDetailFailed = (data) => ({type: GET_PRODUCT_DETAIL_FAILED, payload: data});
export const getSalesRequest = (data) => ({type: GET_SALES_REQUEST, payload: data});
export const getSalesSuccess = (data) => ({type: GET_SALES_SUCCESS, payload: data});
export const getSalesFailed = (data) => ({type: GET_SALES_FAILED, payload: data});
export const getSaleRequest = (data) => ({type: GET_SALE_REQUEST, payload: data});
export const getSaleSuccess = (data) => ({type: GET_SALE_SUCCESS, payload: data});
export const getSaleFailed = (data) => ({type: GET_SALE_FAILED, payload: data});
export const getMessagesHistoryRequest = (data) => ({type: GET_MESSAGES_HISTORY_REQUEST, payload: data});
export const getMessagesHistorySuccess = (data) => ({type: GET_MESSAGES_HISTORY_SUCCESS, payload: data});
export const getMessagesHistoryFailed = (data) => ({type: GET_MESSAGES_HISTORY_FAILED, payload: data});
export const chatConnect = () => ({type: CHAT_CONNECT});
export const setChatConnect = (data) => ({type: SET_CHAT_CONNECT, payload: data});
export const getSupplierReviewsRequest = (data) => ({type: GET_SUPPLIER_REVIEWS_REQUEST, payload: data});
export const getSupplierReviewsSuccess = (data) => ({type: GET_SUPPLIER_REVIEWS_SUCCESS, payload: data});
export const getSupplierReviewsFailed = (data) => ({type: GET_SUPPLIER_REVIEWS_FAILED, payload: data});
export const getProfileRequest = (data) => ({type: GET_PROFILE_REQUEST, payload: data});
export const getProfileSuccess = (data) => ({type: GET_PROFILE_SUCCESS, payload: data});
export const getProfileFailed = (data) => ({type: GET_PROFILE_FAILED, payload: data});
export const updateBasketRequest = (data) => ({type: UPDATE_BASKET_REQUEST, payload: data});
export const updateBasketSuccess = (data) => ({type: UPDATE_BASKET_SUCCESS, payload: data});
export const updateBasketFailed = (data) => ({type: UPDATE_BASKET_FAILED, payload: data});
export const getBasketRequest = () => ({type: GET_BASKET_REQUEST});
export const getBasketSuccess = (data) => ({type: GET_BASKET_SUCCESS, payload: data});
export const getBasketFailed = (data) => ({type: GET_BASKET_FAILED, payload: data});
export const getDisputesRequest = (data) => ({type: GET_DISPUTES_REQUEST, payload: data});
export const getDisputesSuccess = (data) => ({type: GET_DISPUTES_SUCCESS, payload: data});
export const getDisputesFailed = (data) => ({type: GET_DISPUTES_FAILED, payload: data});
export const getFavoritesRequest = (data) => ({type: GET_FAVORITES_REQUEST, payload: data});
export const getFavoritesSuccess = (data) => ({type: GET_FAVORITES_SUCCESS, payload: data});
export const getFavoritesFailed = (data) => ({type: GET_FAVORITES_FAILED, payload: data});
export const getSuppliersRequest = () => ({type: GET_SUPPLIERS_REQUEST});
export const getSuppliersSuccess = (data) => ({type: GET_SUPPLIERS_SUCCESS, payload: data});
export const getSuppliersFailed = (data) => ({type: GET_SUPPLIERS_FAILED, payload: data});
export const getArticlesRequest = () => ({type: GET_ARTICLES_REQUEST});
export const getArticlesSuccess = (data) => ({type: GET_ARTICLES_SUCCESS, payload: data});
export const getArticlesFailed = (data) => ({type: GET_ARTICLES_FAILED, payload: data});
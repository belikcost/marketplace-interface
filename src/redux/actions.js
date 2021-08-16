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
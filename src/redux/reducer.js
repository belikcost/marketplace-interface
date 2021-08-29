import {
    GET_SHOP_FAILED,
    SET_ICON,
    GET_SHOP_SUCCESS,
    GET_FILTERS_FAILED,
    GET_FILTERS_SUCCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT_FAILED,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ATTRIBUTES_FAILED,
    GET_PRODUCT_ATTRIBUTES_SUCCESS,
    GET_SUPPLIER_FAILED,
    GET_SUPPLIER_SUCCESS,
    GET_PRODUCT_REVIEWS_FAILED,
    GET_PRODUCT_REVIEWS_SUCCESS,
    SET_LOCALE,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SET_USER,
    SIGN_OUT,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    GET_ORDER_LIST_FAILED,
    GET_ORDER_LIST_SUCCESS,
    GET_SUGGESTED_ORDERS_SUCCESS,
    GET_SUGGESTED_ORDERS_FAILED,
    GET_SUPPLIER_PRODUCTS_FAILED,
    GET_SUPPLIER_PRODUCTS_SUCCESS,
    GET_VARIABLE_ATTRIBUTES_FAILED,
    GET_VARIABLE_ATTRIBUTES_SUCCESS,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAILED,
    GET_SUPPLIER_PRODUCT_FAILED,
    GET_SUPPLIER_PRODUCT_SUCCESS,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILED,
    GET_SALES_SUCCESS,
    GET_SALE_SUCCESS,
    GET_SALES_FAILED,
    GET_SALE_FAILED,
    GET_MESSAGES_HISTORY_SUCCESS,
    GET_MESSAGES_HISTORY_FAILED,
    SET_CHAT_CONNECT,
    GET_SUPPLIER_REVIEWS_SUCCESS,
    GET_SUPPLIER_REVIEWS_FAILED,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    UPDATE_BASKET_SUCCESS,
    UPDATE_BASKET_FAILED,
    GET_BASKET_SUCCESS,
    GET_BASKET_FAILED,
    GET_DISPUTES_SUCCESS,
    GET_DISPUTES_FAILED,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_FAILED,
    GET_SUPPLIERS_SUCCESS,
    GET_SUPPLIERS_FAILED,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAILED,
} from "../constants";

const initialState = {
    shop: {},
    icons: {},
    products: [],
    filters: [],
    currentProduct: {
        variableAttributes: [],
        reviewRating: {}
    },
    orderList: [],
    supplierProducts: [],
    variableAttributes: [],
    productDetails: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ICON:
            return {...state, icons: {...state.icons, ...action.payload}};
        case SET_LOCALE:
            return {...state, locale: action.payload};
        case GET_SHOP_SUCCESS:
            return {...state, shop: action.payload};
        case GET_SHOP_FAILED:
        case GET_PRODUCTS_FAILED:
        case GET_PRODUCT_FAILED:
        case GET_FILTERS_FAILED:
        case GET_PRODUCT_ATTRIBUTES_FAILED:
        case GET_SUPPLIER_FAILED:
        case GET_PRODUCT_REVIEWS_FAILED:
        case GET_ORDER_LIST_FAILED:
        case GET_SUGGESTED_ORDERS_FAILED:
        case GET_SUPPLIER_PRODUCTS_FAILED:
        case GET_VARIABLE_ATTRIBUTES_FAILED:
        case GET_PRODUCT_DETAILS_FAILED:
        case GET_SUPPLIER_PRODUCT_FAILED:
        case GET_PRODUCT_DETAIL_FAILED:
        case GET_SALES_FAILED:
        case GET_SALE_FAILED:
        case GET_MESSAGES_HISTORY_FAILED:
        case GET_SUPPLIER_REVIEWS_FAILED:
        case GET_PROFILE_FAILED:
        case UPDATE_BASKET_FAILED:
        case GET_BASKET_FAILED:
        case GET_DISPUTES_FAILED:
        case GET_FAVORITES_FAILED:
        case GET_SUPPLIERS_FAILED:
        case GET_ARTICLES_FAILED:
            console.log(`Error: ${action.payload}`);
            return state;
        case LOGIN_FAILED:
        case REGISTER_FAILED:
            return {...state, user: {error: action.payload}};
        case GET_FILTERS_SUCCESS:
            return {...state, filters: action.payload};
        case GET_PRODUCTS_SUCCESS:
            return {...state, products: action.payload};
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case SET_USER:
            return {...state, user: action.payload};
        case GET_PRODUCT_SUCCESS:
            return {...state, currentProduct: {...state.currentProduct, ...action.payload}};
        case GET_PRODUCT_ATTRIBUTES_SUCCESS:
            return {...state, currentProduct: {...state.currentProduct, variableAttributes: action.payload}};
        case GET_SUPPLIER_SUCCESS:
            return {...state, supplier: action.payload};
        case GET_PRODUCT_REVIEWS_SUCCESS:
            return {...state, currentProduct: {...state.currentProduct, reviewRating: action.payload}};
        case GET_SUPPLIER_PRODUCTS_SUCCESS:
            return {...state, supplierProducts: action.payload};
        case SIGN_OUT:
            return {...state, user: undefined};
        case GET_SUGGESTED_ORDERS_SUCCESS:
        case GET_ORDER_LIST_SUCCESS:
            return {...state, orderList: action.payload};
        case GET_VARIABLE_ATTRIBUTES_SUCCESS:
            return {...state, variableAttributes: action.payload};
        case GET_PRODUCT_DETAILS_SUCCESS:
            return {...state, productDetails: action.payload};
        case GET_SUPPLIER_PRODUCT_SUCCESS:
            return {...state, currentSupplierProduct: action.payload};
        case GET_PRODUCT_DETAIL_SUCCESS:
            return {...state, currentProductDetail: action.payload};
        case GET_SALES_SUCCESS:
            return {...state, sales: action.payload};
        case GET_SALE_SUCCESS:
            return {...state, currentSale: action.payload};
        case GET_MESSAGES_HISTORY_SUCCESS:
            return {...state, messagesHistory: action.payload};
        case SET_CHAT_CONNECT:
            return {...state, chatConnect: action.payload};
        case GET_SUPPLIER_REVIEWS_SUCCESS:
            return {...state, supplierReviews: action.payload};
        case GET_PROFILE_SUCCESS:
            return {...state, profile: action.payload};
        case UPDATE_BASKET_SUCCESS:
            return {...state, basket: action.payload};
        case GET_BASKET_SUCCESS:
            return {...state, basket: action.payload};
        case GET_DISPUTES_SUCCESS:
            return {...state, disputes: action.payload};
        case GET_FAVORITES_SUCCESS:
            return {...state, favorites: action.payload};
        case GET_SUPPLIERS_SUCCESS:
            return {...state, suppliers: action.payload};
        case GET_ARTICLES_SUCCESS:
            return {...state, articles: action.payload};
        default:
            return state;
    }
}


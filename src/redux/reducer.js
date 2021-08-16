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
    GET_PRODUCT_REVIEWS_SUCCESS, SET_LOCALE
} from "../constants";

const initialState = {
    shop: {},
    icons: {},
    products: [],
    filters: [],
    currentProduct: {
        variableAttributes: [],
        supplier: {},
        reviewRating: {}
    },
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
            console.log(`Error: ${action.payload}`);
            return state;
        case GET_FILTERS_SUCCESS:
            return {...state, filters: action.payload};
        case GET_PRODUCTS_SUCCESS:
            return {...state, products: action.payload};
        case GET_PRODUCT_SUCCESS:
            return {...state, currentProduct: {...state.currentProduct, ...action.payload}};
        case GET_PRODUCT_ATTRIBUTES_SUCCESS:
            return {...state, currentProduct: {...state.currentProduct, variableAttributes: action.payload}};
        case GET_SUPPLIER_SUCCESS:
            return {...state, currentProduct: {...state.currentProduct, supplier: action.payload}};
        case GET_PRODUCT_REVIEWS_SUCCESS:
            return {...state, currentProduct: {...state.currentProduct, reviewRating: action.payload}};
        default:
            return state;
    }
}


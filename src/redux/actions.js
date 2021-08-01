import {GET_SHOP_FAILED, GET_SHOP_REQUEST, GET_SHOP_SUCCESS} from "../constants";

export const getShopRequest = () => ({type: GET_SHOP_REQUEST});
export const getShopSuccess = (data) => ({type: GET_SHOP_SUCCESS, payload: data});
export const getShopFailed = (data) => ({type: GET_SHOP_FAILED, payload: data})

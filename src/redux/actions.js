import { GET_SHOP_FAILED, GET_SHOP_REQUEST, GET_SHOP_SUCCESS, GET_ICON, SET_ICON } from "../constants";

export const getShopRequest = () => ({type: GET_SHOP_REQUEST});
export const getShopSuccess = (data) => ({type: GET_SHOP_SUCCESS, payload: data});
export const getShopFailed = (data) => ({type: GET_SHOP_FAILED, payload: data});
export const getIcon = (data) => ({type: GET_ICON, payload: data});
export const setIcon = (data) => ({type: SET_ICON, payload: data});

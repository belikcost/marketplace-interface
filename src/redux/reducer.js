import {GET_SHOP_FAILED, GET_SHOP_SUCCESS} from "../constants";

export const reducer = (state = {shop: {}}, action) => {
    switch (action.type) {
        case GET_SHOP_SUCCESS:
            return {...state, shop: action.payload};
        case GET_SHOP_FAILED:
            console.log(`Error: ${action.payload}`);
            return state;
        default:
            return state;
    }
}
import { GET_SHOP_FAILED, SET_ICON, GET_SHOP_SUCCESS } from "../constants";

const initialState = {
    shop: {},
    icons: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ICON:
            console.log(action.payload);
            return {...state, icons: {...state.icons, ...action.payload}}
        case GET_SHOP_SUCCESS:
            return {...state, shop: action.payload};
        case GET_SHOP_FAILED:
            console.log(`Error: ${action.payload}`);
            return state;
        default:
            return state;
    }
}
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SHOP_REQUEST } from "../../constants";
import { getShopFailed, getShopSuccess } from "../../redux/actions";
import API from "../api";

function* getShop() {
    try {
        const result = yield call(API.getShopFetch);
        yield put(getShopSuccess(result[0].shop));
    } catch (e) {
        yield put(getShopFailed(e));
    }
}

export function* getShopWatcher() {
    yield takeEvery(GET_SHOP_REQUEST, getShop);
}
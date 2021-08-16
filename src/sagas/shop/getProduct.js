import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCT_REQUEST } from "../../constants";
import { getProductFailed, getProductSuccess } from "../../redux/actions";
import API from "../api";

function* getProduct(action) {
    try {
        const result = yield call(API.getProductFetch, action.payload);

        yield put(getProductSuccess(result));
    } catch (e) {
        yield put(getProductFailed(e));
    }
}

export function* getProductWatcher() {
    yield takeEvery(GET_PRODUCT_REQUEST, getProduct);
}
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCT_DETAIL_REQUEST } from "../../constants";
import { getProductDetailFailed, getProductDetailSuccess } from "../../redux/actions";
import API from "../api";

function* getProductDetail(action) {
    try {
        const result = yield call(API.getProductDetailFetch, action.payload);
        yield put(getProductDetailSuccess(result));
    } catch (e) {
        yield put(getProductDetailFailed(e));
    }
}

export function* getProductDetailWatcher() {
    yield takeEvery(GET_PRODUCT_DETAIL_REQUEST, getProductDetail);
}
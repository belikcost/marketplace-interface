import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCT_DETAILS_REQUEST } from "../../constants";
import { getProductDetailsFailed, getProductDetailsSuccess } from "../../redux/actions";
import API from "../api";

function* getProductDetails(action) {
    try {
        const result = yield call(API.getProductDetailsFetch, action.payload);

        yield put(getProductDetailsSuccess(result));
    } catch (e) {
        yield put(getProductDetailsFailed(e));
    }
}

export function* getProductDetailsWatcher() {
    yield takeEvery(GET_PRODUCT_DETAILS_REQUEST, getProductDetails);
}
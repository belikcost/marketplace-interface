import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SUPPLIER_PRODUCT_REQUEST } from "../../constants";
import { getSupplierProductFailed, getSupplierProductSuccess } from "../../redux/actions";
import API from "../api";

function* getSupplierProduct(action) {
    try {
        const result = yield call(API.getSupplierProductFetch, action.payload);

        yield put(getSupplierProductSuccess(result));
    } catch (e) {
        yield put(getSupplierProductFailed(e));
    }
}

export function* getSupplierProductWatcher() {
    yield takeEvery(GET_SUPPLIER_PRODUCT_REQUEST, getSupplierProduct);
}
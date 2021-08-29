import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SUPPLIER_PRODUCTS_REQUEST } from "../../constants";
import { getSupplierProductsFailed, getSupplierProductsSuccess } from "../../redux/actions";
import API from "../api";

function* getSupplierProducts(action) {
    try {
        const result = yield call(API.getSupplierProductsFetch, action.payload);

        yield put(getSupplierProductsSuccess(result));
    } catch (e) {
        yield put(getSupplierProductsFailed(e));
    }
}

export function* getSupplierProductsWatcher() {
    yield takeEvery(GET_SUPPLIER_PRODUCTS_REQUEST, getSupplierProducts);
}
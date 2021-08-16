import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SUPPLIER_REQUEST } from "../../constants";
import { getSupplierFailed, getSupplierSuccess } from "../../redux/actions";
import API from "../api";

function* getSupplier(action) {
    try {
        const result = yield call(API.getSupplierFetch, action.payload);

        yield put(getSupplierSuccess(result));
    } catch (e) {
        yield put(getSupplierFailed(e));
    }
}

export function* getSupplierWatcher() {
    yield takeEvery(GET_SUPPLIER_REQUEST, getSupplier);
}
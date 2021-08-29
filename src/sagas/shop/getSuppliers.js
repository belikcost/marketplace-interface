import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SUPPLIERS_REQUEST } from "../../constants";
import { getSuppliersFailed, getSuppliersSuccess } from "../../redux/actions";
import API from "../api";

function* getSuppliers() {
    try {
        const result = yield call(API.getSuppliersFetch);

        yield put(getSuppliersSuccess(result));
    } catch (e) {
        yield put(getSuppliersFailed(e));
    }
}

export function* getSuppliersWatcher() {
    yield takeEvery(GET_SUPPLIERS_REQUEST, getSuppliers);
}
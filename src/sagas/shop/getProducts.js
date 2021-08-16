import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCTS_REQUEST } from "../../constants";
import { getProductsFailed, getProductsSuccess } from "../../redux/actions";
import API from "../api";

function* getProducts() {
    try {
        const result = yield call(API.getProductsFetch);
        yield put(getProductsSuccess(result));
    } catch (e) {
        yield put(getProductsFailed(e));
    }
}

export function* getProductsWatcher() {
    yield takeEvery(GET_PRODUCTS_REQUEST, getProducts);
}
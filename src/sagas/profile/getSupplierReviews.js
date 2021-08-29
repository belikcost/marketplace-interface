import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SUPPLIER_REVIEWS_REQUEST } from "../../constants";
import { getSupplierReviewsFailed, getSupplierReviewsSuccess } from "../../redux/actions";
import API from "../api";

function* getSupplierReviews(action) {
    try {
        const result = yield call(API.getSupplierReviewsFetch, action.payload);

        yield put(getSupplierReviewsSuccess(result));
    } catch (e) {
        yield put(getSupplierReviewsFailed(e));
    }
}

export function* getSupplierReviewsWatcher() {
    yield takeEvery(GET_SUPPLIER_REVIEWS_REQUEST, getSupplierReviews);
}
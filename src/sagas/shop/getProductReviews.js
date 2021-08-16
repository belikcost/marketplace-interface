import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCT_REVIEWS_REQUEST } from "../../constants";
import { getProductReviewsFailed, getProductReviewsSuccess } from "../../redux/actions";
import API from "../api";

function* getProductReviews(action) {
    try {
        const result = yield call(API.getProductReviewsFetch, action.payload);
        yield put(getProductReviewsSuccess(result));
    } catch (e) {
        yield put(getProductReviewsFailed(e));
    }
}

export function* getProductReviewsWatcher() {
    yield takeEvery(GET_PRODUCT_REVIEWS_REQUEST, getProductReviews);
}
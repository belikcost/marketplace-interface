import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SUGGESTED_ORDERS_REQUEST } from "../../constants";
import { getSuggestedOrdersFailed, getSuggestedOrdersSuccess } from "../../redux/actions";
import API from "../api";

function* getSuggestedOrders(action) {
    try {
        const result = yield call(API.getSuggestedOrdersFetch, action.payload);

        yield put(getSuggestedOrdersSuccess(result));
    } catch (e) {
        yield put(getSuggestedOrdersFailed(e));
    }
}

export function* getSuggestedOrdersWatcher() {
    yield takeEvery(GET_SUGGESTED_ORDERS_REQUEST, getSuggestedOrders);
}
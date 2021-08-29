import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_ORDER_LIST_REQUEST } from "../../constants";
import { getOrderListFailed, getOrderListSuccess } from "../../redux/actions";
import API from "../api";

function* getOrderList(action) {
    try {
        const result = yield call(API.getOrderListFetch, action.payload);

        yield put(getOrderListSuccess(result));
    } catch (e) {
        yield put(getOrderListFailed(e));
    }
}

export function* getOrderListWatcher() {
    yield takeEvery(GET_ORDER_LIST_REQUEST, getOrderList);
}
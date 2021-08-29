import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SALES_REQUEST } from "../../constants";
import { getSalesFailed, getSalesSuccess } from "../../redux/actions";
import API from "../api";

function* getSales(action) {
    try {
        const result = yield call(API.getSalesFetch, action.payload);

        yield put(getSalesSuccess(result));
    } catch (e) {
        yield put(getSalesFailed(e));
    }
}

export function* getSalesWatcher() {
    yield takeEvery(GET_SALES_REQUEST, getSales);
}
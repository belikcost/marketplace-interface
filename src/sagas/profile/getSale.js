import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_SALE_REQUEST } from "../../constants";
import { getSaleFailed, getSaleSuccess } from "../../redux/actions";
import API from "../api";

function* getSale(action) {
    try {
        const result = yield call(API.getSaleFetch, action.payload);

        yield put(getSaleSuccess(result));
    } catch (e) {
        yield put(getSaleFailed(e));
    }
}

export function* getSaleWatcher() {
    yield takeEvery(GET_SALE_REQUEST, getSale);
}
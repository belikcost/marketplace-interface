import { call, put, takeEvery } from 'redux-saga/effects'
import { REGISTER_REQUEST } from "../constants";
import API from "./api";
import { registerSuccess, registerFailed } from "../redux/actions";


function* register(action) {
    try {
        const result = yield call(API.registerFetch, action.payload);

        document.cookie = `user=${result.hash}`;
        yield put(registerSuccess(result));
    } catch (e) {
        yield put(registerFailed(e));
    }
}

export function* registerRequestWatcher() {
    yield takeEvery(REGISTER_REQUEST, register);
}
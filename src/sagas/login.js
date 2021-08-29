import { call, put, takeEvery } from 'redux-saga/effects'
import { LOGIN_REQUEST } from "../constants";
import API from "./api";
import { loginSuccess, loginFailed } from "../redux/actions";


function* login(action) {
    try {
        const result = yield call(API.loginFetch, action.payload);

        document.cookie = `user=${result.hash}`;
        yield put(loginSuccess(result));
    } catch (e) {
        yield put(loginFailed(e));
    }
}

export function* loginRequestWatcher() {
    yield takeEvery(LOGIN_REQUEST, login);
}
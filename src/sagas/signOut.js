import { takeEvery } from 'redux-saga/effects'
import { SIGN_OUT } from "../constants";

export function* signOutWatcher() {
    yield takeEvery(SIGN_OUT, () => document.cookie = `user=`);
}
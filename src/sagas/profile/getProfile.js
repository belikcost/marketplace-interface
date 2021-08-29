import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PROFILE_REQUEST } from "../../constants";
import { getProfileFailed, getProfileSuccess } from "../../redux/actions";
import API from "../api";

function* getProfile(action) {
    try {
        const result = yield call(API.getProfileFetch, action.payload);

        yield put(getProfileSuccess(result));
    } catch (e) {
        yield put(getProfileFailed(e));
    }
}

export function* getProfileWatcher() {
    yield takeEvery(GET_PROFILE_REQUEST, getProfile);
}
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_MESSAGES_HISTORY_REQUEST } from "../../constants";
import { getMessagesHistoryFailed, getMessagesHistorySuccess } from "../../redux/actions";
import API from "../api";

function* getMessagesHistory(action) {
    try {
        const result = yield call(API.getMessagesHistoryFetch, action.payload);

        yield put(getMessagesHistorySuccess(result));
    } catch (e) {
        yield put(getMessagesHistoryFailed(e));
    }
}

export function* getMessagesHistoryWatcher() {
    yield takeEvery(GET_MESSAGES_HISTORY_REQUEST, getMessagesHistory);
}
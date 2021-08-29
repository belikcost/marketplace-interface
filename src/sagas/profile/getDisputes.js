import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_DISPUTES_REQUEST } from "../../constants";
import { getDisputesFailed, getDisputesSuccess } from "../../redux/actions";
import API from "../api";

function* getDisputes(action) {
    try {
        const result = yield call(API.getDisputesFetch, action.payload);

        yield put(getDisputesSuccess(result));
    } catch (e) {
        yield put(getDisputesFailed(e));
    }
}

export function* getDisputesWatcher() {
    yield takeEvery(GET_DISPUTES_REQUEST, getDisputes);
}
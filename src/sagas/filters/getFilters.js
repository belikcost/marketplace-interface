import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_FILTERS_REQUEST } from "../../constants";
import { getFiltersFailed, getFiltersSuccess } from "../../redux/actions";
import API from "../api";

function* getFilters(action) {
    try {
        const result = yield call(API.getFiltersFetch, action.payload);
        yield put(getFiltersSuccess(result));
    } catch (e) {
        yield put(getFiltersFailed(e));
    }
}

export function* getFiltersWatcher() {
    yield takeEvery(GET_FILTERS_REQUEST, getFilters);
}
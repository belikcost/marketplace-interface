import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_FAVORITES_REQUEST } from "../../constants";
import { getFavoritesFailed, getFavoritesSuccess } from "../../redux/actions";
import API from "../api";

function* getFavorites(action) {
    try {
        const result = yield call(API.getFavoritesFetch, action.payload);

        yield put(getFavoritesSuccess(result));
    } catch (e) {
        yield put(getFavoritesFailed(e));
    }
}

export function* getFavoritesWatcher() {
    yield takeEvery(GET_FAVORITES_REQUEST, getFavorites);
}
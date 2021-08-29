import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_ARTICLES_REQUEST } from "../../constants";
import { getArticlesFailed, getArticlesSuccess } from "../../redux/actions";
import API from "../api";

function* getArticles(action) {
    try {
        const result = yield call(API.getArticlesFetch, action.payload);
        yield put(getArticlesSuccess(result));
    } catch (e) {
        yield put(getArticlesFailed(e));
    }
}

export function* getArticlesWatcher() {
    yield takeEvery(GET_ARTICLES_REQUEST, getArticles);
}
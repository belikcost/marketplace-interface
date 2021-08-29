import { call, put, takeEvery } from "redux-saga/effects";

import { GET_BASKET_REQUEST } from "../constants";
import { getCookie } from "../utils";

import API from "./api";
import { getBasketFailed, getBasketSuccess } from "../redux/actions";


function* getRequest(hash) {
    try {
        const result = yield call(API.getBasketFetch, hash);
        yield put(getBasketSuccess(result));
    } catch (e) {
        yield put(getBasketFailed(e));
    }
}

function* getBasket() {
    const hash = getCookie('basketHash');
    if (hash) {
        yield call(getRequest, hash);

    } else {
        const result = yield call(API.getBasketHashFetch);
        yield call(getRequest, result.hash);
    }
}

export function* getBasketWatcher() {
    yield takeEvery(GET_BASKET_REQUEST, getBasket);
}
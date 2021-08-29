import { call, put, takeEvery } from "redux-saga/effects";

import { UPDATE_BASKET_REQUEST } from "../constants";
import { getCookie } from "../utils";

import API from "./api";
import { updateBasketFailed, updateBasketSuccess } from "../redux/actions";


function* getRequest(hash, data) {
    try {
        const result = yield call(API.updateBasketFetch, hash, data);
        yield put(updateBasketSuccess(result));
    } catch (e) {
        yield put(updateBasketFailed(e));
    }
}

function* updateBasket(action) {
    const hash = getCookie('basketHash');
    if (hash) {
        yield call(getRequest, hash, action.payload);

    } else {

        const result = yield call(API.getBasketHashFetch);
        yield call(getRequest, result.hash, action.payload);
    }
}

export function* updateBasketWatcher() {
    yield takeEvery(UPDATE_BASKET_REQUEST, updateBasket);
}
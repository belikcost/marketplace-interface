import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_PRODUCT_ATTRIBUTES_REQUEST } from "../../constants";
import { getProductAttributesFailed, getProductAttributesSuccess } from "../../redux/actions";
import API from "../api";

function* getProductAttributes(action) {
    try {
        const result = yield call(API.getProductAttributesFetch, action.payload);
        yield put(getProductAttributesSuccess(result));
    } catch (e) {
        yield put(getProductAttributesFailed(e));
    }
}

export function* getProductAttributesWatcher() {
    yield takeEvery(GET_PRODUCT_ATTRIBUTES_REQUEST, getProductAttributes);
}
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_VARIABLE_ATTRIBUTES_REQUEST } from "../../constants";
import { getVariableAttributesFailed, getVariableAttributesSuccess } from "../../redux/actions";
import API from "../api";

function* getVariableAttributes() {
    try {
        const result = yield call(API.getVariableAttributesFetch);

        yield put(getVariableAttributesSuccess(result));
    } catch (e) {
        yield put(getVariableAttributesFailed(e));
    }
}

export function* getVariableAttributesWatcher() {
    yield takeEvery(GET_VARIABLE_ATTRIBUTES_REQUEST, getVariableAttributes);
}
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_ICON } from "../../constants";
import { setIcon } from "../../redux/actions";

const importImage = async (name) => {
    return await import(`../../img/${name.toLowerCase()}.svg`);
}

function* getIcon(action) {
    const result = yield call(importImage, action.payload);
    yield put(setIcon({[action.payload]: result.default}));
}

export function* getIconWatcher() {
    yield takeEvery(GET_ICON, getIcon);
}
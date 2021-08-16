import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_ICON } from "../../constants";
import { setIcon } from "../../redux/actions";

const importImage = async (name) => {
    let result;
    try {
        result = await import(`../../img/${name.toLowerCase()}.svg`);
    } catch {
        result = Promise.resolve(null);
    }
    return result;
}

function* getIcon(action) {
    const result = yield call(importImage, action.payload);
    if (result) {
        yield put(setIcon({[action.payload]: result.default}));
    }
}

export function* getIconWatcher() {
    yield takeEvery(GET_ICON, getIcon);
}
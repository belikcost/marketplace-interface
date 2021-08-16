import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_LOCALE } from "../../constants";
import { setLocale } from "../../redux/actions";

const importLocale = async (iso) => {
    let result;
    try {
        result = await import(`date-fns/locale/${iso}/index`);
    } catch {
        result = Promise.resolve(null);
    }
    return result;
}

function* getLocale(action) {
    const result = yield call(importLocale, action.payload);
    if (result) {
        yield put(setLocale(result));
    }
}

export function* getLocaleWatcher() {
    yield takeEvery(GET_LOCALE, getLocale);
}
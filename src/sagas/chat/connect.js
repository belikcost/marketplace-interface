import { put, takeEvery } from "redux-saga/effects";

import { CHAT_CONNECT } from "../../constants";
import { setChatConnect } from "../../redux/actions";


function* connect() {
    const result = yield new WebSocket("wss://free-abc.piesocket.com/v3/1?api_key=5MFEF9Tv752fgMa7CD26NSeWfaWEjMU8u0qyXb0q&notify_self");
    yield put(setChatConnect(result));
}

export function* chatConnectWatcher() {
    yield takeEvery(CHAT_CONNECT, connect);
}
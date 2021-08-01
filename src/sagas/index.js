import { all, call } from "redux-saga/effects";
import { getShopWatcher } from "./shop/getShop";

export default function* mainSaga() {
    yield all([call(getShopWatcher)])
}
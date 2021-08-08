import { all, call } from "redux-saga/effects";
import { getShopWatcher } from "./shop/getShop";
import { getIconWatcher } from "./shop/getIcon";

export default function* mainSaga() {
    yield all([call(getShopWatcher), call(getIconWatcher)])
}
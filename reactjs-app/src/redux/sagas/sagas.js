import { all, fork } from "redux-saga/effects";

import {allData} from "./userSaga";

export default function* rootSaga() {
  yield all([fork(allData)]);
};
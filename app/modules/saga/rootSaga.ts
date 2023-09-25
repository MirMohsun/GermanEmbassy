import { all, spawn } from "redux-saga/effects";
import { watchUserInfo } from "./settings";

export default function* rootSaga() {
  try {
    yield all([spawn(watchUserInfo)]);
  } catch (error) {
    console.error("rootSaga", error);
  }
}

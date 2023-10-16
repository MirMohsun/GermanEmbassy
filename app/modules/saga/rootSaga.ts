import { all, spawn } from "redux-saga/effects";
import { watchContactsInfo } from "./contactsInfo";
import { watchArchitects } from "./architects";
import { watchBuildings } from "./buildings";
import { watchRoutes } from "./routes";

export default function* rootSaga() {
  try {
    yield all([
      spawn(watchContactsInfo),
      spawn(watchArchitects),
      spawn(watchBuildings),
      spawn(watchRoutes),
    ]);
  } catch (error) {
    console.error("rootSaga", error);
  }
}

import { takeEvery, put, call } from "redux-saga/effects";
import { SagaActionTypes } from "../SagaActionTypes";
import { IAxios } from "../../../services/axios";
import { Links } from "../../../config";
import { IRoutes, RoutesActions } from "../../redux/routes";

export function* workerGetRoutes() {
  try {
    type result = Array<IRoutes>;

    const res: result = yield call(IAxios.get, {
      url: Links.routes,
      sender: "workerGetRoutes",
    }) as any;

    if (Array.isArray(res)) {
      yield put(RoutesActions._setRoutes(res));
    }
  } catch (error) {
    console.error(`workerGetRoutes: ${error}`);
  }
}

export function* watchRoutes() {
  yield takeEvery(SagaActionTypes.GET_ROUTES, workerGetRoutes);
}

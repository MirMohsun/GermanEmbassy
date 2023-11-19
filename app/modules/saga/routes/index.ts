import { takeEvery, put, call, select } from "redux-saga/effects";
import { SagaActionTypes } from "../SagaActionTypes";
import { IAxios } from "../../../services/axios";
import { Links } from "../../../config";
import { IRoutes, RoutesActions } from "../../redux/routes";

export function* workerGetRoutes() {
  try {
    type result = Array<IRoutes>;
    const lang = (yield select(
      (state) => state.AppStateSlice.locale
    )) as string;

    const res: result = yield call(IAxios.get, {
      url: Links.routes,
      sender: "workerGetRoutes",
      locale: lang,
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

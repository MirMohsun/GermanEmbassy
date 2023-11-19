import { takeEvery, put, call, select } from "redux-saga/effects";
import { SagaActionTypes } from "../SagaActionTypes";
import { IAxios } from "../../../services/axios";
import { Links } from "../../../config";
import { IArchitects, architectsActions } from "../../redux/architects";

export function* workerGetArchitectsList() {
  try {
    type result = Array<IArchitects>;
    const lang = (yield select(
      (state) => state.AppStateSlice.locale
    )) as string;

    const res: result = yield call(IAxios.get, {
      url: Links.architects,
      sender: "workerGetArchitectsList",
      locale: lang,
    }) as any;

    if (Array.isArray(res)) {
      yield put(architectsActions._setArchitects(res));
    }
  } catch (error) {
    console.error(`workerGetArchitectsList: ${error}`);
  }
}

export function* watchArchitects() {
  yield takeEvery(SagaActionTypes.GET_ARCHITECTS, workerGetArchitectsList);
}

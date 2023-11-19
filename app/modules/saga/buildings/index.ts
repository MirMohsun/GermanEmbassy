import { takeEvery, put, call, select } from "redux-saga/effects";
import { SagaActionTypes } from "../SagaActionTypes";
import { IAxios } from "../../../services/axios";
import { Links } from "../../../config";
import { BuildingsActions, IBuildings } from "../../redux/buildings";
import { BookActions, IBook } from "../../redux/book";

export function* workerGetBuildingsList() {
  try {
    type result = Array<IBuildings>;
    const lang = (yield select(
      (state) => state.AppStateSlice.locale
    )) as string;
    const res: result = yield call(IAxios.get, {
      url: Links.buildings,
      sender: "workerGetBuildingsList",
      locale: lang,
    }) as any;

    if (Array.isArray(res)) {
      yield put(BuildingsActions._setBuildings(res));
    }
  } catch (error) {
    console.error(`workerGetBuildingsList: ${error}`);
  }
}

export function* workerGetBook() {
  try {
    type result = Array<IBook>;
    const lang = (yield select(
      (state) => state.AppStateSlice.locale
    )) as string;

    const res: result = yield call(IAxios.get, {
      url: Links.book,
      sender: "workerGetBuildingsList",
      locale: lang,
    }) as any;

    console.log("res", res);
    console.log("lang", lang);

    if (res) {
      yield put(BookActions._setBookInfo(res.data));
    }
  } catch (error) {
    console.error(`workerGetBuildingsList: ${error}`);
  }
}

export function* watchBuildings() {
  yield takeEvery(SagaActionTypes.GET_BUILDINGS, workerGetBuildingsList);
  yield takeEvery(SagaActionTypes.GET_BOOK, workerGetBook);
}

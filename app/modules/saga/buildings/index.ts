import { takeEvery, put, call } from "redux-saga/effects";
import { SagaActionTypes } from "../SagaActionTypes";
import { IAxios } from "../../../services/axios";
import { Links } from "../../../config";
import { BuildingsActions, IBuildings } from "../../redux/buildings";
import { BookActions, IBook } from "../../redux/book";

export function* workerGetBuildingsList() {
  try {
    type result = Array<IBuildings>;

    const res: result = yield call(IAxios.get, {
      url: Links.buildings,
      sender: "workerGetBuildingsList",
    }) as any;
    if (Array.isArray(res?.data)) {
      yield put(BuildingsActions._setBuildings(res));
    }
  } catch (error) {
    console.error(`workerGetBuildingsList: ${error}`);
  }
}

export function* workerGetBook() {
  try {
    type result = Array<IBook>;

    const res: result = yield call(IAxios.get, {
      url: Links.book,
      sender: "workerGetBuildingsList",
    }) as any;
    console.log("res", res);
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

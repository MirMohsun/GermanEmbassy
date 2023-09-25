import { takeEvery, put, call, select } from "redux-saga/effects";
import { SagaActionTypes } from "../SagaActionTypes";
import { IAxios } from "../../../services/axios";
import { Links } from "../../../config";

export function* workerGetTermsOfUse() {
  try {
    type result =
      | {
          title: string;
          content: string;
        }
      | { error: string };

    const res: result = yield call(IAxios.get, {
      url: Links.about,
      sender: "workerGetTermsOfUse",
      isNoToken: true,
    }) as any;
    if ("title" in res && "content" in res) {
      //   yield put(AppStateActions._setTerms(res));
    } else if ("error" in res) {
      //   yield put(AppStateActions._setError(res.error));
    }
  } catch (error) {
    console.error(`workerGetTermsOfUse: ${error}`);
  }
}

export function* watchUserInfo() {
  yield takeEvery(SagaActionTypes.GET_APP_INFO, workerGetTermsOfUse);
}

import { takeEvery, put, call, select } from "redux-saga/effects";
import { SagaActionTypes } from "../SagaActionTypes";
import { IAxios } from "../../../services/axios";
import { Links } from "../../../config";
import {
  ContactsActions,
  IAboutInfo,
  IContacts,
} from "../../redux/contactsInfo";

export function* workerGetContactsInfo() {
  try {
    type result = IContacts | { error: string };
    const lang = (yield select(
      (state) => state.AppStateSlice.locale
    )) as string;

    const res: result = yield call(IAxios.get, {
      url: Links.contact,
      sender: "workerGetContactsInfo",
      locale: lang,
    }) as any;

    if (res?.email) {
      yield put(ContactsActions._setContactsInfo(res));
    }
  } catch (error) {
    console.error(`workerGetContactsInfo: ${error}`);
  }
}

export function* workerGetAboutInfo() {
  try {
    type result = IAboutInfo | { error: string };
    const lang = (yield select(
      (state) => state.AppStateSlice.locale
    )) as string;

    const res: result = yield call(IAxios.get, {
      url: Links.about,
      sender: "workerGetAboutInfo",
      locale: lang,
    }) as any;
    if (res?.data !== undefined) {
      yield put(ContactsActions._setAboutInfo(res.data));
    }
  } catch (error) {
    console.error(`workerGetAboutInfo: ${error}`);
  }
}

export function* watchContactsInfo() {
  yield takeEvery(SagaActionTypes.GET_CONTACTS_INFO, workerGetContactsInfo);
  yield takeEvery(SagaActionTypes.GET_APP_ABOUT, workerGetAboutInfo);
}

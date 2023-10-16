// import { takeEvery, put, call, select } from "redux-saga/effects";
// import { SagaActionTypes } from "../SagaActionTypes";
// import { IAxios } from "../../../services/axios";
// import { Links } from "../../../config";
// import { ContactsActions, IContacts } from "../../redux/contactsInfo";

// export function* workerGetContactsInfo() {
//   try {
//     type result = IContacts | { error: string };

//     const res: result = yield call(IAxios.get, {
//       url: Links.contact,
//       sender: "workerGetContactsInfo",
//     }) as any;

//     if ("email" in res && "phone" in res) {
//       yield put(ContactsActions._setContactsInfo(res));
//     } else if ("error" in res) {
//       // yield put(AppStateActions._setError(res.error));
//     }
//   } catch (error) {
//     console.error(`workerGetContactsInfo: ${error}`);
//   }
// }

// export function* watchUserInfo() {
//   yield takeEvery(SagaActionTypes.GET_APP_INFO, workerGetContactsInfo);
// }

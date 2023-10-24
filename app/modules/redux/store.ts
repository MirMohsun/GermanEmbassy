import { configureStore } from "@reduxjs/toolkit";
import AppStateSlice from "./appStateSlice";
import Architects from "./architects";
import ContactsInfo from "./contactsInfo";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import Buildings from "./buildings";
import Routes from "./routes";
import Book from "./book";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    AppStateSlice,
    ContactsInfo,
    Architects,
    Buildings,
    Routes,
    Book,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

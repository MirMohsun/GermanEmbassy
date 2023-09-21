import { configureStore } from "@reduxjs/toolkit";
import AppStateSlice from "./appStateSlice";

export const store = configureStore({
    reducer: {
        AppStateSlice
    }
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

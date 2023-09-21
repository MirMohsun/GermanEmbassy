import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppStateSlice {
    isSplashLoading: boolean;
    isOnboardingSkip: boolean;
}

const initialState: IAppStateSlice = {
    isSplashLoading: false,
    isOnboardingSkip: false
};

const AppStateSlice = createSlice({
    name: "AppState",
    initialState,
    reducers: {
        _setIsSplashLoading(state, action: PayloadAction<boolean>) {
            state.isSplashLoading = action.payload;
        },
        _setIsSkipOnboarding(state, action: PayloadAction<boolean>) {
            state.isOnboardingSkip = action.payload;
        }
    }
});

export const AppStateActions = AppStateSlice.actions;
export default AppStateSlice.reducer;
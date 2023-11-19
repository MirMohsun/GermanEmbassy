import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppStateSlice {
  isSplashLoading: boolean;
  isOnboardingSkip: boolean;
  locale: string;
}

const initialState: IAppStateSlice = {
  isSplashLoading: false,
  isOnboardingSkip: false,
  locale: "en",
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
    },
    _setLangLocale(state, action: PayloadAction<string>) {
      state.locale = action.payload;
    },
  },
});

export const AppStateActions = AppStateSlice.actions;
export default AppStateSlice.reducer;

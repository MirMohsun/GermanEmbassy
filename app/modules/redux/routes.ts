import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRoutesSlice {
  routes: Array<IRoutes> | [];
}

const initialState: IRoutesSlice = {
  routes: [],
};

const RoutesSlice = createSlice({
  name: "Routes",
  initialState,
  reducers: {
    _setRoutes(state, action: PayloadAction<Array<IRoutes>>) {
      state.routes = action.payload;
    },
  },
});

export const RoutesActions = RoutesSlice.actions;
export default RoutesSlice.reducer;

export interface IRoutes {
  id: number;
  name: string;
  time: string;
  distance: string;
  lat: string;
  long: string;
  stations: Array<IRoutes>;
}

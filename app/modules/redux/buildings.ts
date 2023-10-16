import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBuildingsSlice {
  buildings: Array<IBuildings> | [];
}

const initialState: IBuildingsSlice = {
  buildings: [],
};

const BuildingsSlice = createSlice({
  name: "Buildings",
  initialState,
  reducers: {
    _setBuildings(state, action: PayloadAction<Array<IBuildings>>) {
      state.buildings = action.payload;
    },
  },
});

export const BuildingsActions = BuildingsSlice.actions;
export default BuildingsSlice.reducer;

export interface IBuildings {
  id: number;
  name: string;
  info: string;
  architect: {
    id: number;
    name: string;
    birth_date: string;
    death_date: string;
    info: string;
    gallery: [
      {
        src: string;
      }
    ];
  };
}

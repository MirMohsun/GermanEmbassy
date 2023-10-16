import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IArchitectsSlice {
  architects: Array<IArchitects> | [];
}

const initialState: IArchitectsSlice = {
  architects: [],
};

const architectsSlice = createSlice({
  name: "architects",
  initialState,
  reducers: {
    _setArchitects(state, action: PayloadAction<Array<IArchitects>>) {
      state.architects = action.payload;
    },
  },
});

export const architectsActions = architectsSlice.actions;
export default architectsSlice.reducer;

export interface IAboutInfo {
  title: string;
  content: string;
}

export interface IArchitects {
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
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBookSlice {
  bookInfo: IBook | {};
}

const initialState: IBookSlice = {
  bookInfo: {},
};

const BookSlice = createSlice({
  name: "Book",
  initialState,
  reducers: {
    _setBookInfo(state, action: PayloadAction<IBook>) {
      state.bookInfo = action.payload;
    },
  },
});

export const BookActions = BookSlice.actions;
export default BookSlice.reducer;

export interface IBook {
  title: string;
  content: string;
  img_url: string;
  pdf: string;
  writer_name_surname: string;
  writer_content: string;
  writer_img_url: string;
}

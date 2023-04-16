import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const filterSlice = createSlice({
  name: "filter",

  initialState: "",

  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});

export const { changeFilter } = filterSlice.actions;
export const getFiltred = (state: RootState) => state.filter;

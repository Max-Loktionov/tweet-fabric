import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { tweetsApi } from "./tweetsApi";

export const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: tweetsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), tweetsApi.middleware],
});

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";

import { tweetsApi } from "./tweetsApi";

export const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: tweetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tweetsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

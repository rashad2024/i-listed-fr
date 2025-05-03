// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

const logger = (storeAPI: any) => (next: any) => (action: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log("🚀 Dispatching:", action);
  }
  const result = next(action);
  if (process.env.NODE_ENV === "development") {
    console.log("🧾 Next State:", storeAPI.getState());
  }
  return result;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Add Thunk middleware here explicitly (this is by default already included with Redux Toolkit)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// Create wrapper for Next.js integration (useful for SSR support)
export const wrapper = createWrapper(() => store);

export const persistor = persistStore(store);

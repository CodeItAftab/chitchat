import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };

// export const store = configureStore({
//   reducer: {
//     app: appReducer,
//     auth: authReducer,
//   },
//   devTools: true,
// });

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

// * Slices
import appReducer from "./slices/app";
import authReducer from "./slices/auth";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  blacklist: ["app"],
  whiteList: ["auth"],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export { rootPersistConfig, rootReducer };

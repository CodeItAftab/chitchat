import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

// * Slices
import appReducer from "./slices/app";
import authReducer from "./slices/auth";
import userReducer from "./slices/user";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  blacklist: ["app"],
  whiteList: ["auth", "user"],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
});

export { rootPersistConfig, rootReducer };

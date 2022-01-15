import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import userReducer from "./user/user.reducer";

const rootPersistConfig = {
  key: "murey-chat-app-root",
  storage: AsyncStorage,
  blacklist: [],
};

export const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);

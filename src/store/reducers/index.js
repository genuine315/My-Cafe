import { combineReducers } from "redux";
import themeReducer from "./ThemeReducer";
import drawerReducer from "./ToggleReducer";
import drawerIconReducer from "./DrawerIconReducer";
import LoginReducer from "./LoginReducer";
import ClientDataReducer from "./ClientDataReducer";

const reducers = combineReducers({
  themeReducer,
  drawerReducer,
  drawerIconReducer,
  LoginReducer,
  ClientDataReducer,
});
export default reducers;

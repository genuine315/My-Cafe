import { combineReducers } from "redux";
import themeReducer from "./ThemeReducer";
import drawerReducer from "./ToggleReducer";
import drawerIconReducer from "./DrawerIconReducer";

const reducers = combineReducers({
  themeReducer,
  drawerReducer,
  drawerIconReducer,
});
export default reducers;

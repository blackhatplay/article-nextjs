import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { authReducer } from "./authReducer";
import { dashboardReducer } from "./dashboardReducer";

// COMBINED REDUCERS
const reducers = {
  articles: articleReducer,
  user: authReducer,
  dashboard: dashboardReducer,
};

const combinedReducer = combineReducers(reducers);

export default combinedReducer;

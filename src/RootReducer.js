import { combineReducers } from "redux";
import { events } from "./ducks/events-duck/Reducer";
import { auth } from "./ducks/auth-duck/Reducer"

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

export const rootReducer = combineReducers({
  auth,
  events,
  router: routerReducer
});


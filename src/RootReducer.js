import { combineReducers } from "redux";

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

export const rootReducer = combineReducers({

  router: routerReducer
});

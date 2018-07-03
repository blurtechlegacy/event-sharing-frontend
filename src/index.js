import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./RootReducer";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";

import createHistory from "history/createBrowserHistory";
import { ConnectedRouter} from "react-router-redux";




const history = createHistory();

const initialState = {};

const store = createStore(
  rootReducer,
  initialState
);



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
     <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
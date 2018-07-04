import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./RootReducer";
import AppContainer from "./containers/AppContainer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./RootSaga";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

const history = createHistory();
const routerMid = routerMiddleware(history);
const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMid))
);
sagaMiddleware.run(rootSaga);
const element = (
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </Provider>
  </div>
);

ReactDom.render(element, document.getElementById("root"));

import { put, takeLatest, all, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import XHRProvider from "../../XHRProvider";
import * as types from "./ActionTypes";
import * as actions from "./Actions";

const xhr = new XHRProvider();

function* loginRequestSaga(action) {
  try {
    console.log(action);
    const user = action.users.find(user => {
      return (
        user.password === action.password && user.login === action.username
      );
    });
    console.log("user", user);
    if (user) {
      console.log("auth");
    } else {
      alert("invalid log or pass");
      console.log("not auth");
    }
    if (user) {
      yield put(actions.loginSuccess(user));
    }
  } catch (error) {
    console.log("/loginRequestSaga", "error");
  }
}

function* fetchRequstUsersSaga(action) {
  try {
    console.log("done");
    const response = yield call(xhr.requestApi, "/api/v001/users");
    console.log("/users", response);
    if (response) {
      yield put(actions.fetchUsersSuccess(response.data));
    }
  } catch (error) {
    console.log("/users", "error");
  }
}

export function* AuthRootSaga() {
  yield all([
    yield takeLatest(types.FETCH_USERS_REQUEST, fetchRequstUsersSaga),
    yield takeLatest(types.LOGIN_REQUEST, loginRequestSaga)
  ]);
}

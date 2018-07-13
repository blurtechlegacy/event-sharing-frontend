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

    if (user) {
    } else {
      yield put(actions.loginError("error"));
      //alert("invalid log or pass");
    }
    if (user) {
      yield put(actions.loginSuccess(user));
      yield put(push("/"));
    }
  } catch (error) {
    // console.log("/loginRequestSaga", "error");
    console.log("error", error);
    yield put(actions.loginError(error));
  }
}

function* fetchRequstUsersSaga(action) {
  try {
    const response = yield call(xhr.get, "/api/v001/users");
    console.log("users", response);
    if (response) {
      yield put(actions.fetchUsersSuccess(response.data.data));
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

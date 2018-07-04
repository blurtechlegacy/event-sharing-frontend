import { put, takeLatest, all, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import XHRProvider from "../../XHRProvider";
import * as types from "./ActionTypes";
import * as actions from "./Actions";

const xhr = new XHRProvider();

function* fetchRequestEventsSaga() {
  try {
    const response = yield call(xhr.requestApi, '/products');
    console.log(response);
    if (response) {
      yield put(actions.fetchEventsSuccess(response));
    }
  } catch (error) {
   console.log("error")
  }
}




  

export function* EventsRootSaga() {
  yield all([
    yield takeLatest(types.FETCH_EVENTS_REQUEST, fetchRequestEventsSaga)
  ]);
}

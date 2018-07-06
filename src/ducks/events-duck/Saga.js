import { put, takeLatest, all, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import XHRProvider from "../../XHRProvider";
import * as types from "./ActionTypes";
import * as actions from "./Actions";

const xhr = new XHRProvider();

function* fetchRequestEventsSaga() {
  try {
    const response = yield call(xhr.requestApi, "/events");
    console.log(response);
    if (response) {
      yield put(actions.fetchEventsSuccess(response.data));
    }
  } catch (error) {
    console.log("error");
  }
}

function* fetchRequestTagsSaga() {
  try {
    const response = yield call(xhr.requestApi, "/tags");
    console.log("/tags", response);
    if (response) {
      yield put(actions.fetchTagsSuccess(response.data));
    }
  } catch (error) {
    console.log("/tags", "error");
  }
}

export function* EventsRootSaga() {
  yield all([
    yield takeLatest(types.FETCH_EVENTS_REQUEST, fetchRequestEventsSaga),
    yield takeLatest(types.FETCH_TAGS_REQUEST, fetchRequestTagsSaga)
  ]);
}

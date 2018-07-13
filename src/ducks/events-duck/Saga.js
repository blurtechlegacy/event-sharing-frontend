import { put, takeLatest, all, call } from "redux-saga/effects";
import { push } from "react-router-redux";
import XHRProvider from "../../XHRProvider";
import * as types from "./ActionTypes";
import * as actions from "./Actions";

const xhr = new XHRProvider();

function* fetchRequestEventsSaga() {
  try {
    const response = yield call(xhr.get, "/api/v001/events");
    console.log("events", response.data);
    if (response) {
      yield put(actions.fetchEventsSuccess(response.data));
    }
  } catch (error) {
    console.log("error");
  }
}

function* fetchRequestTagsSaga() {
  try {
    const response = yield call(xhr.get, "/api/v001/tags");

    if (response) {
      yield put(actions.fetchTagsSuccess(response.data));
    }
  } catch (error) {
    console.log("/tags", "error");
  }
}

function* addEventRequestSaga(action) {
  try {
    const response = yield call(xhr.post, "/api/v001/events", action.event);

    console.log(response);
    if (response) {
      yield put(actions.addEventSuccess(response.status));
      alert("Event added");
      yield put(push("/"));
    }
  } catch (error) {
    console.log("/postEvents", "error");
  }
}

export function* EventsRootSaga() {
  yield all([
    yield takeLatest(types.FETCH_EVENTS_REQUEST, fetchRequestEventsSaga),
    yield takeLatest(types.FETCH_TAGS_REQUEST, fetchRequestTagsSaga),
    yield takeLatest(types.ADD_EVENT_REQUEST, addEventRequestSaga)
  ]);
}

import { all, call } from "redux-saga/effects";
import { EventsRootSaga } from "./ducks/events-duck/Saga";

export default function* rootSaga() {
  yield all([call(EventsRootSaga)]);
}

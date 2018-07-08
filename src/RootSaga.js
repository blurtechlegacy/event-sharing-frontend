import { all, call, fork } from "redux-saga/effects";
import { EventsRootSaga } from "./ducks/events-duck/Saga";
import { AuthRootSaga } from "./ducks/auth-duck/Saga";
export default function* rootSaga() {
  yield all([fork(EventsRootSaga), fork(AuthRootSaga)]);
}

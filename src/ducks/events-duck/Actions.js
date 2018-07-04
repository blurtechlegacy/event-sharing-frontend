import * as types from "./ActionTypes";

export const fetchEventsRequest = () => ({
    type: types.FETCH_EVENTS_REQUEST
});

export const fetchEventsSuccess  = events => ({
    type: types.FETCH_EVENTS_SUCCESS,
    events
});


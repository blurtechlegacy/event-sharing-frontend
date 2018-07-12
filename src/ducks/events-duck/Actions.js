import * as types from "./ActionTypes";

export const fetchEventsRequest = () => ({
  type: types.FETCH_EVENTS_REQUEST
});

export const fetchEventsSuccess = events => ({
  type: types.FETCH_EVENTS_SUCCESS,
  events
});

export const fetchTagsRequest = () => ({
  type: types.FETCH_TAGS_REQUEST
});

export const fetchTagsSuccess = tags => ({
  type: types.FETCH_TAGS_SUCCESS,
  tags
});

export const addTagForFilter = tag => ({
  type: types.ADD_TAG_FOR_FILTER,
  tag
});

export const addEventRequest = event => ({
  type: types.ADD_EVENT_REQUEST,
  event
});

export const addEventSuccess = res => ({
  type: types.ADD_EVENT_SUCCESS,
  res
});

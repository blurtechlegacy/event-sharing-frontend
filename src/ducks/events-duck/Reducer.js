import * as types from "./ActionTypes";
import data from "../../data";
const initialState = {
  eventsList: [],
  tags: []
};
export const events = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
      console.log("type ", action.type);
      console.log("action.events ", action.events);
      return {
        ...state,
        eventsList: action.events
      };
    case types.FETCH_TAGS_SUCCESS:
      console.log("type ", action.type);
      console.log("action.events ", action.tags);
      return {
        ...state,
        tags: action.tags
      };
    default:
      return state;
  }
};

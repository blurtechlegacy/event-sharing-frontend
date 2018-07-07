import * as types from "./ActionTypes";
import data from "../../data";
const initialState = {
  eventsList: data.events,
  tags: data.tags,
  typeOfSort: "new",
  tagForFilter: ""
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
      console.log("action.tags ", action.tags);
      return {
        ...state,
        tags: action.tags
      };
    case types.ADD_TAG_FOR_FILTER:
      console.log("type ", action.type);
      console.log("action.tag ", action.tag);
      return {
        ...state,
        tagForFilter: action.tag
      };
    default:
      return state;
  }
};

import * as types from "./ActionTypes";
import data from "../../data";
const initialState = {
  eventsList: [],
  tags: [],
  typeOfSort: "new",
  tagForFilter: ""
};
export const events = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        eventsList: action.events
      };
    case types.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.tags
      };
    case types.ADD_TAG_FOR_FILTER:
      return {
        ...state,
        tagForFilter: action.tag
      };
    default:
      return state;
  }
};

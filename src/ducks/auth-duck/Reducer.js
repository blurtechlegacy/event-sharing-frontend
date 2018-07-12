import * as types from "./ActionTypes";

const initialState = {
  username: "",
  password: "",
  requestToken: "",
  isAuth: false,
  error: "",
  users: [],
  user: {}
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        requestToken: action.requestToken
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.user.login,
        user: action.user,
        isAuth: true
      };
    case types.LOGOUT:
      return {
        ...state,
        username: "",
        isAuth: false
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};

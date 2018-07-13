import * as types from "./ActionTypes";

export const fetchTokenRequest = () => ({
  type: types.FETCH_TOKEN_REQUEST
});

export const fetchTokenSuccess = requestToken => ({
  type: types.FETCH_TOKEN_SUCCESS,
  requestToken
});

export const fetchTokenError = error => ({
  type: types.FETCH_TOKEN_ERROR,
  error
});

export const loginRequest = (username, password, users) => ({
  type: types.LOGIN_REQUEST,
  username,
  password,
  users
});

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  user
});

export const loginError = error => ({
  type: types.LOGIN_ERROR,
  error
});

export const logOut = () => ({
  type: types.LOGOUT
});

export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = users => ({
  type: types.FETCH_USERS_SUCCESS,
  users
});

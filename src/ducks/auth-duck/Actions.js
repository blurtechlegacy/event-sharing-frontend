import * as types from './ActionTypes';

export const fetchTokenRequest = () => ({
    type: types.FETCH_TOKEN_REQUEST
});

export const fetchTokenSuccess = (requestToken) => ({
    type: types.FETCH_TOKEN_SUCCESS,
    requestToken
});

export const fetchTokenError = (error) => ({
    type: types.FETCH_TOKEN_ERROR,
    error
});

export const loginRequest = (username, password, requestToken) => ({
    type: types.LOGIN_REQUEST,
    username,
    password,
    requestToken
});

export const loginSuccess = (username) => ({
    type: types.LOGIN_SUCCESS,
    username
});

export const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    error
});

export const logOut = () => ({
    type: types.LOGOUT
});

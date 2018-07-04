import * as types from './ActionTypes';

const initialState = {
    username: '',
    requestToken: '',
    isAuth: false,
    error: ''
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
                username: action.username,
                isAuth: true
            };
        case types.LOGOUT:
            return {
                ...state,
                username: '',
                isAuth: false
            };
        case types.FETCH_TOKEN_ERROR:
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
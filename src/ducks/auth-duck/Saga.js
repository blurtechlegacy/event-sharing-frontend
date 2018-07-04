import { put, takeLatest, all, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import XHRProvider from '../../XHRProvider';
import * as types from './ActionTypes';
import * as actions from './Actions';

const xhr = new XHRProvider();

function* fetchRequestTokenSaga() {
    try {
        const response = yield call(xhr.get, 'authentication/token/new');

        if (response && response.success) {
            yield put(actions.fetchTokenSuccess(response.request_token));
        } else {
            yield put(actions.fetchTokenError('No token response'));
        }
    } catch (error) {
        yield put(actions.fetchTokenError(error.message));
    }
}

function* loginSaga(action) {
    try {
        const response = yield call(xhr.get, 'authentication/token/validate_with_login', {
            username: action.username,
            password: action.password,
            request_token: action.requestToken,
        });

        if (response && response.success) {
            yield put(actions.loginSuccess(action.username));
            yield put(push('/movies'));
        } else {
            yield put(actions.loginError(response.status_message));
        }
    } catch (error) {
        yield put(actions.loginError(error.message));
    }
}

export function* authRootSaga() {
    yield all([
        yield takeLatest(types.FETCH_TOKEN_REQUEST, fetchRequestTokenSaga),
        yield takeLatest(types.LOGIN_REQUEST, loginSaga)
    ]);
}
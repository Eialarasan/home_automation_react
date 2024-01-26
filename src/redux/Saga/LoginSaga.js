import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doPost, login} from '../../service';
import Actions from '../action';

export function* loginUser( {params, callback} ) {
    try {
        const response = yield login(END_POINTS.LOGIN_USER, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.LoginSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.LoginFailure(error))

    }
}

export function* registerUser({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.REGISTER, params)
        yield put(Actions.registerSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.registerFailure(error))

    }
}

export function* logout({ callback }) {
    try {
        const response = yield doPost(END_POINTS.LOGOUT)
        if (callback) {
            callback(response)
        }
        yield put(Actions.logoutSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.logoutFailure(error))
    }
}



export default function* loginWatcher() {
    yield all([
        takeLatest(Actions.LOGIN, loginUser),
        takeLatest(Actions.REGISTER, registerUser),
    ]);
}

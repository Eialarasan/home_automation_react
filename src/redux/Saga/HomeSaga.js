import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doGet, doPost } from '../../service';
import Actions from '../action';

export function* HomeListSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.HOME_LIST, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.homeListSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.homeListFailure(error))

    }
}

export function* addHomeSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.ADD_HOME, params)
        yield put(Actions.AddHomeSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.AddHomeFailure(error))

    }
}
export function* UpdateHomeSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.UPDATE_HOME, params)
        yield put(Actions.UpdateHomeSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.UpdateHomeFailure(error))

    }
}

export function* DeleteHomeSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.DELETE_HOME, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeleteHomeSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeleteHomeFailure(error))
    }
}

export function* DashboardSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.DASHBOARD, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.GetDashBoardSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.GetDashBoardFailure(error))
    }
}


export default function* HomeWatcher() {
    yield all([
        takeLatest(Actions.HOME_LIST, HomeListSaga),
        takeLatest(Actions.ADD_HOME, addHomeSaga),
        takeLatest(Actions.DELETE_HOME, DeleteHomeSaga),
        takeLatest(Actions.UPDATE_HOME, UpdateHomeSaga),
        takeLatest(Actions.DASHBOARD, DashboardSaga)

    ]);
}

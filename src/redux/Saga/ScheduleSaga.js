import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doGet, doPost } from '../../service';
import Actions from '../action';

export function* ScheduleListSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.SCHEDULE_LIST, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.ScheduleListSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.ScheduleListFailure(error))

    }
}

export function* addScheduleSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.ADD_SCHEDULE, params)
        yield put(Actions.AddScheduleSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.AddScheduleFailure(error))

    }
}
export function* UpdateScheduleSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.UPDATE_SCHEDULE, params)
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

export function* DeleteScheduleSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.DELETE_SCHEDULE, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeleteScheduleSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeleteScheduleFailure(error))
    }
}


export default function* ScheduleWatcher() {
    yield all([
        takeLatest(Actions.SCHEDULE_LIST, ScheduleListSaga),
        takeLatest(Actions.ADD_SCHEDULE, addScheduleSaga),
        takeLatest(Actions.DELETE_SCHEDULE, DeleteScheduleSaga),
        takeLatest(Actions.UPDATE_SCHEDULE, UpdateScheduleSaga),
    ]);
}

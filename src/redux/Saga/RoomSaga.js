import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doGet, doPost } from '../../service';
import Actions from '../action';

export function* RoomListSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.ROOM_LIST, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.RoomListSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.RoomListFailure(error))

    }
}

export function* addRoomSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.ADD_ROOM, params)
        yield put(Actions.AddRoomSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.AddRoomFailure(error))

    }
}
export function* UpdateRoomSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.UPDATE_ROOM, params)
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

export function* DeleteRoomSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.DELETE_ROOM, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeleteRoomSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeleteRoomFailure(error))
    }
}


export default function* roomWatcher() {
    yield all([
        takeLatest(Actions.ROOM_LIST, RoomListSaga),
        takeLatest(Actions.ADD_ROOM, addRoomSaga),
        takeLatest(Actions.DELETE_ROOM, DeleteRoomSaga),
        takeLatest(Actions.UPDATE_ROOM, UpdateRoomSaga),

    ]);
}

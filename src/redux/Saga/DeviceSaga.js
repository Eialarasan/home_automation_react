import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doGet, doPost } from '../../service';
import Actions from '../action';

export function* DeviceListSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.DEVICE_LIST, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeviceSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeviceFailure(error))

    }
}

export function* addDeviceSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.ADD_DEVICE, params)
        yield put(Actions.AddDevicesSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.AddDevicesFailure(error))

    }
}
export function* UpdateDeviceSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.UPDATE_DEVICE, params)
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

export function* DeleteDeviceSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.DELETE_DEVICE, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeleteDeviceSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeleteDeviceFailure(error))
    }
}


export default function* DeviceWatcher() {
    yield all([
        takeLatest(Actions.DEVICE_LIST, DeviceListSaga),
        takeLatest(Actions.ADD_DEVICE, addDeviceSaga),
        takeLatest(Actions.DELETE_DEVICE, DeleteDeviceSaga),
        takeLatest(Actions.UPDATE_DEVICE, UpdateDeviceSaga),

    ]);
}

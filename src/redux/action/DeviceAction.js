export const DEVICE_LIST = 'DEVICE_LIST'
export const DEVICE_LIST_SUCCES = 'DEVICE_LIST_SUCCES'
export const DEVICE_LIST_FAILURE = 'DEVICE_LIST_FAILURE'

export const ADD_DEVICE = 'ADD_DEVICE'
export const ADD_DEVICE_SUCCES = 'ADD_DEVICE_SUCCES'
export const ADD_DEVICE_FAILURE = 'ADD_DEVICE_FAILURE'

export const UPDATE_DEVICE = 'UPDATE_DEVICE'
export const UPDATE_DEVICE_SUCCES = 'UPDATE_DEVICE_SUCCES'
export const UPDATE_DEVICE_FAILURE = 'UPDATE_DEVICE_FAILURE'

export const DELETE_DEVICE = 'DELETE_DEVICE'
export const DELETE_DEVICE_SUCCES = 'DELETE_DEVICE_SUCCES'
export const DELETE_DEVICE_FAILURE = 'DELETE_DEVICE_FAILURE'



export const Device = (params, callback) => {
    return {
        type: DEVICE_LIST,
        params,
        callback
    }

}
export const DeviceSuccess = (data) => {
    return {
        type: DEVICE_LIST_SUCCES,
        data
    }

}
export const DeviceFailure = (data) => {
    return {
        type: DEVICE_LIST_FAILURE,
        data
    }

}
export const AddDevices = (params, callback) => {
    return {
        type: ADD_DEVICE,
        params,
        callback
    }

}
export const AddDevicesSuccess = (data) => {
    return {
        type: ADD_DEVICE_SUCCES,
        data
    }

}
export const AddDevicesFailure = (data) => {
    return {
        type: ADD_DEVICE_FAILURE,
        data
    }

}

export const DeleteDevice = (params, callback) => {
    return {
        type: DELETE_DEVICE,
        params,
        callback
    }

}
export const DeleteDeviceSuccess = (data) => {
    return {
        type: DELETE_DEVICE_SUCCES,
        data
    }

}
export const DeleteDeviceFailure = (data) => {
    return {
        type: DELETE_DEVICE_FAILURE,
        data
    }

}

export const UpdateDevice = (params, callback) => {
    return {
        type: UPDATE_DEVICE,
        params,
        callback
    }

}
export const UpdateDeviceSuccess = (data) => {
    return {
        type: UPDATE_DEVICE_FAILURE,
        data
    }

}
export const UpdateDeviceFailure = (data) => {
    return {
        type: UPDATE_DEVICE_FAILURE,
        data
    }

}

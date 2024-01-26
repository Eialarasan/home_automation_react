export const SCHEDULE_LIST = 'SCHEDULE_LIST'
export const SCHEDULE_LIST_SUCCES = 'SCHEDULE_LIST_SUCCES'
export const SCHEDULE_LIST_FAILURE = 'SCHEDULE_LIST_FAILURE'

export const ADD_SCHEDULE = 'ADD_SCHEDULE'
export const ADD_SCHEDULE_SUCCES = 'ADD_SCHEDULE_SUCCES'
export const ADD_SCHEDULE_FAILURE = 'ADD_SCHEDULE_FAILURE'

export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE'
export const UPDATE_SCHEDULE_SUCCES = 'UPDATE_SCHEDULE_SUCCES'
export const UPDATE_SCHEDULE_FAILURE = 'UPDATE_SCHEDULE_FAILURE'

export const DELETE_SCHEDULE = 'DELETE_SCHEDULE'
export const DELETE_SCHEDULE_SUCCES = 'DELETE_SCHEDULE_SUCCES'
export const DELETE_SCHEDULE_FAILURE = 'DELETE_SCHEDULE_FAILURE'


export const ScheduleList = (params, callback) => {
    return {
        type: SCHEDULE_LIST,
        params,
        callback
    }

}
export const ScheduleListSuccess = (data) => {
    return {
        type: SCHEDULE_LIST_SUCCES,
        data
    }

}
export const ScheduleListFailure = (data) => {
    return {
        type: SCHEDULE_LIST_FAILURE,
        data
    }

}
export const AddSchedule = (params, callback) => {
    return {
        type: ADD_SCHEDULE,
        params,
        callback
    }

}
export const AddScheduleSuccess = (data) => {
    return {
        type: ADD_SCHEDULE_SUCCES,
        data
    }

}
export const AddScheduleFailure = (data) => {
    return {
        type: ADD_SCHEDULE_FAILURE,
        data
    }

}

export const DeleteSchedule = (params, callback) => {
    return {
        type: DELETE_SCHEDULE,
        params,
        callback
    }

}
export const DeleteScheduleSuccess = (data) => {
    return {
        type: DELETE_SCHEDULE_SUCCES,
        data
    }

}
export const DeleteScheduleFailure = (data) => {
    return {
        type: DELETE_SCHEDULE_FAILURE,
        data
    }

}

export const UpdateSchedule = (params, callback) => {
    return {
        type: UPDATE_SCHEDULE,
        params,
        callback
    }

}
export const UpdateScheduleSuccess = (data) => {
    return {
        type: UPDATE_SCHEDULE_FAILURE,
        data
    }

}
export const UpdateScheduleFailure = (data) => {
    return {
        type: UPDATE_SCHEDULE_FAILURE,
        data
    }

}

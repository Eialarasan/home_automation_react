export const HOME_LIST = 'HOME_LIST'
export const HOME_LIST_SUCCES = 'HOME_LIST_SUCCES'
export const HOME_LIST_FAILURE = 'HOME_LIST_FAILURE'

export const ADD_HOME = 'ADD_HOME'
export const ADD_HOME_SUCCES = 'ADD_HOME_SUCCES'
export const ADD_HOME_FAILURE = 'ADD_HOME_FAILURE'

export const UPDATE_HOME = 'UPDATE_HOME'
export const UPDATE_HOME_SUCCES = 'UPDATE_HOME_SUCCES'
export const UPDATE_HOME_FAILURE = 'UPDATE_HOME_FAILURE'

export const DELETE_HOME = 'DELETE_HOME'
export const DELETE_HOME_SUCCES = 'DELETE_HOME_SUCCES'
export const DELETE_HOME_FAILURE = 'DELETE_HOME_FAILURE'

export const DASHBOARD = 'DASHBOARD'
export const DASHBOARD_SUCCES = 'DASHBOARD_SUCCES'
export const DASHBOARD_FAILURE = 'DASHBOARD_FAILURE'
export const HomeList = (params, callback) => {
    return {
        type: HOME_LIST,
        params,
        callback
    }

}
export const homeListSuccess = (data) => {
    return {
        type: HOME_LIST_SUCCES,
        data
    }

}
export const homeListFailure = (data) => {
    return {
        type: HOME_LIST_FAILURE,
        data
    }

}
export const AddHome = (params, callback) => {
    return {
        type: ADD_HOME,
        params,
        callback
    }

}
export const AddHomeSuccess = (data) => {
    return {
        type: ADD_HOME_SUCCES,
        data
    }

}
export const AddHomeFailure = (data) => {
    return {
        type: ADD_HOME_FAILURE,
        data
    }

}

export const DeleteHome = (params, callback) => {
    return {
        type: DELETE_HOME,
        params,
        callback
    }

}
export const DeleteHomeSuccess = (data) => {
    return {
        type: DELETE_HOME_SUCCES,
        data
    }

}
export const DeleteHomeFailure = (data) => {
    return {
        type: DELETE_HOME_FAILURE,
        data
    }

}

export const UpdateHome = (params, callback) => {
    return {
        type: UPDATE_HOME,
        params,
        callback
    }

}
export const UpdateHomeSuccess = (data) => {
    return {
        type: UPDATE_HOME_FAILURE,
        data
    }

}
export const UpdateHomeFailure = (data) => {
    return {
        type: UPDATE_HOME_FAILURE,
        data
    }

}
export const GetDashBoard = (params, callback) => {
    return {
        type: DASHBOARD,
        params,
        callback
    }

}
export const GetDashBoardSuccess = (data) => {
    return {
        type: DASHBOARD_SUCCES,
        data
    }

}
export const GetDashBoardFailure = (data) => {
    return {
        type: DASHBOARD_FAILURE,
        data
    }

}



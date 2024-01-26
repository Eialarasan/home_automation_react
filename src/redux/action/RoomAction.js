export const ROOM_LIST = 'ROOM_LIST'
export const ROOM_LIST_SUCCES = 'ROOM_LIST_SUCCES'
export const ROOM_LIST_FAILURE = 'ROOM_LIST_FAILURE'

export const ADD_ROOM = 'ADD_ROOM'
export const ADD_ROOM_SUCCES = 'ADD_ROOM_SUCCES'
export const ADD_ROOM_FAILURE = 'ADD_ROOM_FAILURE'

export const UPDATE_ROOM = 'UPDATE_ROOM'
export const UPDATE_ROOM_SUCCES = 'UPDATE_ROOM_SUCCES'
export const UPDATE_ROOM_FAILURE = 'UPDATE_ROOM_FAILURE'

export const DELETE_ROOM = 'DELETE_ROOM'
export const DELETE_ROOM_SUCCES = 'DELETE_ROOM_SUCCES'
export const DELETE_ROOM_FAILURE = 'DELETE_ROOM_FAILURE'



export const RoomList = (params, callback) => {
    return {
        type: ROOM_LIST,
        params,
        callback
    }

}
export const RoomListSuccess = (data) => {
    return {
        type: ROOM_LIST_SUCCES,
        data
    }

}
export const RoomListFailure = (data) => {
    return {
        type: ROOM_LIST_FAILURE,
        data
    }

}
export const AddRoom = (params, callback) => {
    return {
        type: ADD_ROOM,
        params,
        callback
    }

}
export const AddRoomSuccess = (data) => {
    return {
        type: ADD_ROOM_SUCCES,
        data
    }

}
export const AddRoomFailure = (data) => {
    return {
        type: ADD_ROOM_FAILURE,
        data
    }

}

export const DeleteRoom = (params, callback) => {
    return {
        type: DELETE_ROOM,
        params,
        callback
    }

}
export const DeleteRoomSuccess = (data) => {
    return {
        type: DELETE_ROOM_SUCCES,
        data
    }

}
export const DeleteRoomFailure = (data) => {
    return {
        type: DELETE_ROOM_FAILURE,
        data
    }

}

export const UpdateRoom = (params, callback) => {
    return {
        type: UPDATE_ROOM,
        params,
        callback
    }

}
export const UpdateRoomSuccess = (data) => {
    return {
        type: UPDATE_ROOM_FAILURE,
        data
    }

}
export const UpdateRoomFailure = (data) => {
    return {
        type: UPDATE_ROOM_FAILURE,
        data
    }

}

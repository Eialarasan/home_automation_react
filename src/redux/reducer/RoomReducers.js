import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    roomList: [],
    dashboard: [],
}

const roomReducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.ROOM_LIST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ROOM_LIST_SUCCES: {
            return {
                ...state,
                isLoading: false,
                roomList: action.data?.response,
                error: false
            };
        }
        case Actions.ROOM_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                roomList: [],
                error: action.error,
            };
        }

        case Actions.ADD_ROOM: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ADD_ROOM_SUCCES: {
            return {
                ...state,
                isLoading: false,
                addRoom: action.data,
                error: false
            };
        }
        case Actions.ADD_ROOM_FAILURE: {
            return {
                ...state,
                isLoading: false,
                addRoom: undefined,
                error: action.error,
            };
        }

        case Actions.UPDATE_ROOM: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.UPDATE_ROOM_SUCCES: {
            return {
                ...state,
                isLoading: false,
                updateRoom: action.data,
                error: false
            };
        }
        case Actions.UPDATE_ROOM_FAILURE: {
            return {
                ...state,
                isLoading: false,
                updateRoom: undefined,
                error: action.error,
            };
        }
        case Actions.DELETE_ROOM: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DELETE_ROOM_SUCCES: {
            return {
                ...state,
                isLoading: false,
                error: false
            };
        }
        case Actions.DELETE_ROOM_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }
       
        default:
            return state;
    }
};

export const getroomList = (state) => state?.ROOM?.roomList
export const getDashboard = (state) => state?.ROOM?.dashboard
export const getLoading = (state) => state?.ROOM?.isLoading


export default roomReducers;

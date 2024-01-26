import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    deviceList: [],
    dashboard: [],
}

const deviceReducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.DEVICE_LIST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DEVICE_LIST_SUCCES: {
            return {
                ...state,
                isLoading: false,
                deviceList: action.data?.response,
                error: false
            };
        }
        case Actions.DEVICE_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                deviceList: [],
                error: action.error,
            };
        }

        case Actions.ADD_DEVICE: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ADD_DEVICE_SUCCES: {
            return {
                ...state,
                isLoading: false,
                addDevice: action.data,
                error: false
            };
        }
        case Actions.ADD_DEVICE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                addDevice: undefined,
                error: action.error,
            };
        }

        case Actions.UPDATE_DEVICE: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.UPDATE_DEVICE_SUCCES: {
            return {
                ...state,
                isLoading: false,
                updateDevice: action.data,
                error: false
            };
        }
        case Actions.UPDATE_DEVICE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                updateDevice: undefined,
                error: action.error,
            };
        }
        case Actions.DELETE_DEVICE: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DELETE_DEVICE_SUCCES: {
            return {
                ...state,
                isLoading: false,
                error: false
            };
        }
        case Actions.DELETE_DEVICE_FAILURE: {
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

export const getdeviceList = (state) => state?.DEVICE?.deviceList
export const getLoading = (state) => state?.DEVICE?.isLoading


export default deviceReducers;

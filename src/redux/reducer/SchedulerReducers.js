import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    scheduleList: [],
    dashboard: [],
}

const schedulereducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.SCHEDULE_LIST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.SCHEDULE_LIST_SUCCES: {
            return {
                ...state,
                isLoading: false,
                scheduleList: action.data?.response,
                error: false
            };
        }
        case Actions.SCHEDULE_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                scheduleList: [],
                error: action.error,
            };
        }

        case Actions.ADD_SCHEDULE: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ADD_SCHEDULE_SUCCES: {
            return {
                ...state,
                isLoading: false,
                addSchedule: action.data,
                error: false
            };
        }
        case Actions.ADD_SCHEDULE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                addSchedule: undefined,
                error: action.error,
            };
        }

        case Actions.UPDATE_SCHEDULE: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.UPDATE_SCHEDULE_SUCCES: {
            return {
                ...state,
                isLoading: false,
                updateSchedule: action.data,
                error: false
            };
        }
        case Actions.UPDATE_SCHEDULE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                updateSchedule: undefined,
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

export const getScheduleList = (state) => state?.SCHEDULE?.scheduleList
export const getLoading = (state) => state?.SCHEDULE?.isLoading


export default schedulereducers;

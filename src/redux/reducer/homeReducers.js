import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    homeList: [],
    dashboard: [],
}

const homeReducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.HOME_LIST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.HOME_LIST_SUCCES: {
            return {
                ...state,
                isLoading: false,
                homeList: action.data?.response,
                error: false
            };
        }
        case Actions.HOME_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                homeList: [],
                error: action.error,
            };
        }

        case Actions.ADD_HOME: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ADD_HOME_SUCCES: {
            return {
                ...state,
                isLoading: false,
                addhome: action.data,
                error: false
            };
        }
        case Actions.ADD_HOME_FAILURE: {
            return {
                ...state,
                isLoading: false,
                addhome: undefined,
                error: action.error,
            };
        }

        case Actions.UPDATE_HOME: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.UPDATE_HOME_SUCCES: {
            return {
                ...state,
                isLoading: false,
                updatehome: action.data,
                error: false
            };
        }
        case Actions.UPDATE_HOME_FAILURE: {
            return {
                ...state,
                isLoading: false,
                updatehome: undefined,
                error: action.error,
            };
        }
        case Actions.DELETE_HOME: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DELETE_HOME_SUCCES: {
            return {
                ...state,
                isLoading: false,
                error: false
            };
        }
        case Actions.DELETE_HOME_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }
        case Actions.DASHBOARD: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DASHBOARD_SUCCES: {
            return {
                ...state,
                isLoading: false,
                dashboard:action.data?.response,
                error: false
            };
        }
        case Actions.DASHBOARD_FAILURE: {
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

export const gethomeList = (state) => state?.HOME?.homeList
export const getDashboard = (state) => state?.HOME?.dashboard
export const getLoading = (state) => state?.HOME?.isLoading


export default homeReducers;

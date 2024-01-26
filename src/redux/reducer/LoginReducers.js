import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    authToken:{},
   register:{}
}

const LoginReducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.LOGIN: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.LOGIN_SUCCES: {
            return {
                ...state,
                isLoading: false,
                authToken: action.data,
                error: false
            };
        }
        case Actions.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                authToken: undefined,
                error: action.error,
            };
        }

        case Actions.REGISTER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.REGISTER_SUCCES: {
            return {
                ...state,
                isLoading: false,
                register: action.data,
                error: false
            };
        }
        case Actions.REGISTER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                register: undefined,
                error: action.error,
            };
        }

        case Actions.LOGOUT: {
            return {
                ...state,
                authToken:{},
            };
        }
        default:
            return state;
    }
};

export const getUserData = (state) => state?.LOGIN?.authToken


export default LoginReducers;

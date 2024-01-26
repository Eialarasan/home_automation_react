export const LOGIN = 'LOGIN'
export const LOGIN_SUCCES = 'LOGIN_SUCCES'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const REGISTER = 'REGISTER'
export const REGISTER_SUCCES = 'REGISTER_SUCCES'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const LOGOUT = 'LOGOUT'


export const Login = (params,callback) => {
    return {
        type: LOGIN,
        params,
        callback
    }

}

export const LoginSuccess = (data) => {
    return {
        type: LOGIN_SUCCES,
        data
    }

}
export const LoginFailure = (data) => {
    return {
        type: LOGIN_FAILURE,
        data
    }

}

export const register = (params, callback) => {
    return {
        type: REGISTER,
        params,
        callback
    }

}

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCES,
        data
    }

}
export const registerFailure = (data) => {
    return {
        type: REGISTER_FAILURE,
        data
    }

}

export const logout = (data) => {
    return {
        type: LOGOUT,
        data
    }

}



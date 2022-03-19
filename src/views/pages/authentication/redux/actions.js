import * as actionTypes from './constants'


//Login actions
export const loginListen = () => {

    return {
        type: actionTypes.LOGIN_LISTEN
    }
}

export const loginSuccess = (data) => {

    return {
        type: actionTypes.LOGIN_SUCCESS,
        data
    }
}

//Get current user actions
export const getCurrentUserListen = () => {

    return {
        type: actionTypes.GET_CURRENT_USER_LISTEN
    }
}

export const getCurrentUserSuccess = (data) => {

    return {
        type: actionTypes.GET_CURRENT_USER_SUCCESS,
        data
    }
}
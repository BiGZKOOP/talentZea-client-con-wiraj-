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

//Use this get main services
export const getMainServicesListen = () => {

    return {
        type: actionTypes.GET_ALL_MAIN_SERVICES_LISTEN
    }
}

export const getMainServicesSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_MAIN_SERVICES_SUCCESS,
        data
    }
}
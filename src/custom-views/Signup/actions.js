import * as actionTypes from "./actionTypes"

export const setScreenIndex = (index) => {

    return {
        type: actionTypes.SCREEN_INDEX_SET,
        index
    }
}

export const getAllCountriesListen = () => {
    return {
        type: actionTypes.GET_ALL_COUNTRIES_LISTEN
    }
}

export const getAllCountriesSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_COUNTRIES_SUCCESS,
        data
    }
}

//SIGNUP ACTIONS
export const signupListen = (details) => {
    return {
        type: actionTypes.SIGNUP_LISTEN,
        details,
        history
    }
}

export const signupSuccess = (username) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        username
    }
}

export const signupFailed = () => {

    return {
        type: actionTypes.SIGNUP_FAILED
    }
}

//Store register data
export const storeDataListen = (data) => {

    return {
        type: actionTypes.STORE_DATA_LISTEN,
        data
    }
}

export const storeDataSuccess = () => {

    return {
        type: actionTypes.STORE_DATA_SUCCESS
    }
}

export const storeDataFailed = () => {
    return {
        type: actionTypes.STORE_DATA_FAILED
    }
}

//Send otp actions
export const sendOtpListen = (username, otp, history) => {
    return {
        type: actionTypes.SEND_OTP_LISTEN,
        username,
        otp,
        history
    }
}

export const sendOtpSuccess = () => {

    return {
        type: actionTypes.SEND_OTP_SUCCESS
    }
}

export const sendOtpFailed = () => {

    return {
        type: actionTypes.SEND_OTP_FAILED
    }
}

//Signup loading
export const signupSendingLoadingStart = () => {

    return {
        type: actionTypes.SIGNUP_LOADING_START
    }
}

export const signupSendingLoadingEnd = () => {

    return {
        type: actionTypes.SIGNUP_LOADING_END
    }
}

//Login actions
export const LoginListenAction = (username, password, history) => {
    return {
        type: actionTypes.LOGIN_LISTEN,
        username,
        password,
        history
    }
}

export const LoginSuccessAction = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
    }
}

//Signout actions
export const signoutListen = (history) => {
    return {
        type:actionTypes.SIGNOUT_LISTEN,
        history
    }
}

export const signoutSuccess = () => {
    return {
        type: actionTypes.SIGNOUT_SUCCESS
    }
}

//User details add
export const userDetailsAddListen = (userData) => {
    return {
        type: actionTypes.USER_DATA_ADD_LISTEN,
        userData
    }
}

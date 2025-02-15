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

//Use this to forgot password code send
export const sendForgotPwCodeListen = (payload) => {
    return {
        type: actionTypes.FORGOT_PW_CODE_LISTEN,
        payload
    }
}

export const sendForgotPwCodeSuccess = () => {
    return {
        type: actionTypes.FORGOT_PW_CODE_SUCCESS
    }
}

//Use this to handle the pw code loader
export const handlePwCodeSendloader = (payload) => {

    return {
        type: actionTypes.HANDLE_PW_CODE_SEND_LOADER,
        payload
    }
}

//Use this to handle the password reset
export const handlePasswordResetListen = (payload) => {

    return {
        type: actionTypes.FORGOT_PW_RESET_LISTEN,
        payload
    }
}

export const handlePasswordResetSuccess = () => {
    return {
        type: actionTypes.FORGOT_PW_RESET_SUCCESS
    }
}

//Use this to handle the forgot password reset loader
export const handleFWPresetLoader = (payload) => {
    return {
        type: actionTypes.HANDLE_FORGOT_PW_RESET_LOADER,
        payload
    }
}
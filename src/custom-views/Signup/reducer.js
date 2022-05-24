import * as actionTypes from "./actionTypes"

const init = {
    screenIndex: 0,
    allCountries: [],
    verifySend: false,
    username: "",
    signupLoad: false,
    userRegDetails: {},

    pwCodeSend: false,
    pwCodeSendLoader: false,

    pwResetLoader: false
}

const signUpReducer = (state = init, action) => {

    const {type} = action
    switch (type) {
        case actionTypes.SCREEN_INDEX_SET:
            const {index} = action
            return {
                ...state,
                screenIndex: index
            }
        case actionTypes.GET_ALL_COUNTRIES_SUCCESS:
            const {data} = action
            return {
                ...state,
                allCountries: data
            }
        case actionTypes.STORE_DATA_LISTEN:
            return {
                ...state,
                userSignupData: action.data
            }
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                username: action.username,
                verifySend: true,
                screenIndex: 2
            }
        case actionTypes.SIGNUP_LOADING_START:
            return {
                ...state,
                signupLoad: true
            }
        case actionTypes.SIGNUP_LOADING_END:
            return {
                ...state,
                signupLoad: false
            }
        case actionTypes.SEND_OTP_SUCCESS:
            return {
                ...state,
                screenIndex: 0
            }
        case actionTypes.USER_DATA_ADD_LISTEN:
            return {
                ...state,
                userRegDetails: action.userData
            }
        case actionTypes.HANDLE_PW_CODE_SEND_LOADER:
            return {
                ...state,
                pwCodeSendLoader: action.payload
            }
        case actionTypes.HANDLE_FORGOT_PW_RESET_LOADER:
            return {
                ...state,
                pwResetLoader: action.payload
            }
        case actionTypes.FORGOT_PW_CODE_SUCCESS:
            return {
                ...state,
                pwCodeSend: true
            }
        default:
            return state
    }
}

export default signUpReducer
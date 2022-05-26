import axios from "../../axios/axios"
import {call, takeLatest, put} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllCountriesSuccess,
    handleFWPresetLoader,
    handlePasswordResetSuccess,
    handlePwCodeSendloader,
    sendForgotPwCodeSuccess,
    sendOtpSuccess,
    signoutSuccess,
    signupSendingLoadingEnd,
    signupSendingLoadingStart,
    signupSuccess
} from "./actions"
import {Auth} from "aws-amplify"
import {fireAlertCustom, fireAlertError, jsonToFormData} from "../../utility/custom-util"
import {getCurrentUserListen} from "../../views/pages/authentication/redux/actions"
import Cookies from "universal-cookie"

const getAllCountriesAsync = async () => {

    return axios.get("https://restcountries.com/v3.1/all").then(data => {
        return data.data
    }).catch(err => console.error(err))
}

const signupAsync = async (details) => {

    const formData = jsonToFormData(details)

    return await axios.post("/customer", formData).then((res) => {
        fireAlertCustom("signed up !", "verification link has send to your gmail", "success")
        return res
    }).catch(err => {
        console.log(err)
        fireAlertCustom("Hmm...", "User already exist !", "error")
        return false
    })
}

const sendOTPasync = async (username, otp) => {
    return await Auth.confirmSignUp(username, otp)
}

const loginUserAsync = async (name, password) => {
    return await Auth.signIn(name, password).catch((err) => {
        fireAlertCustom("hmmm...", err.message, "error")
        return false
    })
}

const signoutAsync = async () => {
    return await Auth.signOut()
}

const fwpCodeSendAsync = async (username) => {

    return await Auth.forgotPassword(username).catch(err => {
        fireAlertError("Oops !", err.message)
    })
}

const fwpResetAsync = async (username, code, password) => {

    return await Auth.forgotPasswordSubmit(username, code, password).catch(err => {
        fireAlertError("Oops !", err.message)
    }).then(() => fireAlertCustom("Passowrd changed", "You have successfully changed your password", "success"))
}

///ASYNC FINISHED///

export function* getAllCountriesCB() {
    try {
        const data = yield call(getAllCountriesAsync)
        const countryArr = []
        data.map(e => {
            countryArr.push(e?.name?.common)
        })
        yield put(getAllCountriesSuccess(countryArr))
    } catch (err) {
        console.error(err)
    }
}

export function* signupUserCB(action) {

    const {details, history} = action

    try {
        yield put(signupSendingLoadingStart())

        const cookies = new Cookies()
        const refGet = cookies.get("ref")

        if (refGet) {
            // details.referralID = refGet
        }

        const data = yield call(signupAsync, details)
        if (data) {
            yield put(signupSuccess(details.email))
            history.push("/")
        }
    } catch (err) {
        fireAlertCustom("Hmm...", "Something went wrong", "error")
        console.error(err)
    } finally {
        yield put(signupSendingLoadingEnd())
    }
}

export function* sendOtpCB(action) {

    const {username, otp, history} = action

    try {
        yield put(signupSendingLoadingStart())
        yield call(sendOTPasync, username, otp)
        yield put(sendOtpSuccess())
        fireAlertCustom("Hooray...!!", "You can log now !", "success")
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingEnd())
        history.push("/login")
    }
}

export function* loginListenCB(action) {

    const {username, password, history} = action
    try {
        yield put(signupSendingLoadingStart())
        const res = yield call(loginUserAsync, username, password)
        if (res) {
            yield put(getCurrentUserListen())
            window.localStorage.setItem("user", "logged")
            history.push("/pages/profile")
        }
    } catch (err) {
        console.log(err)
    } finally {
        yield put(signupSendingLoadingEnd())
    }
}

export function* signoutListenCB(action) {
    // eslint-disable-next-line no-unused-vars
    const {history} = action

    try {
        yield call(signoutAsync)
        yield put(signoutSuccess())
        window.localStorage.removeItem("user")
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

export function* fwpCodeSendCB(action) {

    const {payload} = action

    try {
        yield put(handlePwCodeSendloader(false))
        yield call(fwpCodeSendAsync, payload)
        yield put(sendForgotPwCodeSuccess())
    } catch (err) {
        console.log(err)
    }  finally {
        yield put(handlePwCodeSendloader(false))
    }
}

export function* fwpResetCB(action) {

    const {username, code, password} = action.payload

    try {
        yield put(handleFWPresetLoader(false))
        yield call(fwpResetAsync, username, code.toString(), password)
        yield put(handlePasswordResetSuccess())
    } catch (err) {
        console.log(err)
    }  finally {
        yield put(handleFWPresetLoader(false))
    }
}

function* watchSignupSagas() {
    yield takeLatest(actionTypes.GET_ALL_COUNTRIES_LISTEN, getAllCountriesCB)
    yield takeLatest(actionTypes.SIGNUP_LISTEN, signupUserCB)
    yield takeLatest(actionTypes.SEND_OTP_LISTEN, sendOtpCB)
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginListenCB)
    yield takeLatest(actionTypes.SIGNOUT_LISTEN, signoutListenCB)
    yield takeLatest(actionTypes.FORGOT_PW_CODE_LISTEN, fwpCodeSendCB)
    yield takeLatest(actionTypes.FORGOT_PW_RESET_LISTEN, fwpResetCB)
}

const signupSagas = [watchSignupSagas]

export default signupSagas
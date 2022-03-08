import axios from "../../axios/axios"
import {call, takeLatest, put} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllCountriesSuccess,
    sendOtpSuccess,
    signupSendingLoadingEnd,
    signupSendingLoadingStart,
    signupSuccess
} from "./actions"
import {Auth} from "aws-amplify"
import {fireAlertCustom} from "../../utility/custom-util"

const getAllCountriesAsync = async () => {

    return axios.get("https://restcountries.com/v3.1/all").then(data => {
        return data.data
    }).catch(err => console.error(err))
}

const signupAsync = async (username, password) => {
    return await Auth.signUp(username, password).catch(err => console.error(err))
}

const sendOTPasync = async (username, otp) => {
    return await Auth.confirmSignUp(username, otp)
}

const loginUserAsync = async (username, password) => {
    return await Auth.signIn(username, password)
}

const signoutAsync = async () => {
    return await Auth.signOut()
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

    const {username, password} = action.cred

    try {
        yield put(signupSendingLoadingStart())
        const data = yield call(signupAsync, username, password)
        if (data) {
            yield put(signupSuccess(username))
        }
    } catch (err) {
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
        yield call(loginUserAsync, username, password)
        window.localStorage.setItem("user", "logged")
        history.push("/dashboard")
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
        window.localStorage.removeItem("user")
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

function* watchSignupSagas() {
    yield takeLatest(actionTypes.GET_ALL_COUNTRIES_LISTEN, getAllCountriesCB)
    yield takeLatest(actionTypes.SIGNUP_LISTEN, signupUserCB)
    yield takeLatest(actionTypes.SEND_OTP_LISTEN, sendOtpCB)
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginListenCB)
    yield takeLatest(actionTypes.SIGNOUT_LISTEN, signoutListenCB)
}

const signupSagas = [watchSignupSagas]

export default signupSagas
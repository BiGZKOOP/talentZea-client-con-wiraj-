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
        if (data) yield put(signupSuccess(username))
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
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingEnd())
        history.push("/login")
    }
}

function* watchSignupSagas() {
    yield takeLatest(actionTypes.GET_ALL_COUNTRIES_LISTEN, getAllCountriesCB)
    yield takeLatest(actionTypes.SIGNUP_LISTEN, signupUserCB)
    yield takeLatest(actionTypes.SEND_OTP_LISTEN, sendOtpCB)
}

const signupSagas = [watchSignupSagas]

export default signupSagas
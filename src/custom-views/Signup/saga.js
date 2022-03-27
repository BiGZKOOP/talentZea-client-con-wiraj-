import axios from "../../axios/axios"
import {call, takeLatest, put} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllCountriesSuccess,
    sendOtpSuccess, signoutSuccess,
    signupSendingLoadingEnd,
    signupSendingLoadingStart,
    signupSuccess
} from "./actions"
import {Auth} from "aws-amplify"
import {fireAlertCustom} from "../../utility/custom-util"
import {getCurrentUserListen} from "../../views/pages/authentication/redux/actions"
import Cookies from "universal-cookie"

const getAllCountriesAsync = async () => {

    return axios.get("https://restcountries.com/v3.1/all").then(data => {
        return data.data
    }).catch(err => console.error(err))
}

const signupAsync = async (details) => {
    return Auth.signUp({
        username: details.email,
        password: details.password
    }).then(async () => {
        delete details.password
        return await axios.post("/customer", details).then(res => res).catch(err => {
            console.error(err)
            return false
        })
    }).catch((err) => {
        fireAlertCustom("Hmm...", err.message, "error")
        return false
    }).catch((err) => {
        fireAlertCustom("Hmm...", err.message, "error")
        return false
    })
}

const sendOTPasync = async (username, otp) => {
    return await Auth.confirmSignUp(username, otp)
}

const loginUserAsync = async (username, password) => {
    return await Auth.signIn(username, password).catch((err) => {
        fireAlertCustom("hmmm...", err.message, "error")
        return false
    })
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

    const {details} = action

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

function* watchSignupSagas() {
    yield takeLatest(actionTypes.GET_ALL_COUNTRIES_LISTEN, getAllCountriesCB)
    yield takeLatest(actionTypes.SIGNUP_LISTEN, signupUserCB)
    yield takeLatest(actionTypes.SEND_OTP_LISTEN, sendOtpCB)
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginListenCB)
    yield takeLatest(actionTypes.SIGNOUT_LISTEN, signoutListenCB)
}

const signupSagas = [watchSignupSagas]

export default signupSagas
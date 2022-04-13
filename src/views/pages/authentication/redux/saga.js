import * as actionTypes from './constants'
import {takeLatest, call, put} from "redux-saga/effects"
import axios from '../../../../Axios.js'
import qs from 'qs'
import {Auth} from "aws-amplify"
import {getIDToken} from "../../../../utility/Utils"
import {getCurrentUserSuccess, getMainServicesSuccess, loginSuccess} from "./actions"
import {fireAlertCustom} from "../../../../utility/custom-util"

// eslint-disable-next-line no-unused-vars
const loginAsync = async (user) => {

    const params = new URLSearchParams()
    params.append("username", "Bashana")
    params.append("username", "1234")
    return axios.post(`/login`, qs.stringify({username: "Bashana", password: "1234"}), {
        headers: {'content-type': 'application/x-www-form-urlencoded'}
    }).then(res => console.log(res)).catch(err => console.error(err))
}

const getCurrentUserAsync = async () => {
    return await Auth.currentAuthenticatedUser().then(async user => {
        return axios.get(`/customer/${user.attributes.email}`, {
            headers: {Authorization: `Bearer ${await getIDToken()}`}
        }).then(res => res).catch(err => console.error(err))
    }).catch(err => {
        console.error(err)
    })
}

const getMainServicesAsync = async () => {

    return await axios.get("/main-service").then(res => res).catch(err => console.error(err))
}
//////////////////////////
//////ASYNC Finished//////
//////////////////////////

export function* loginUserCB() {

    try {
        const data = yield call(loginAsync)
        console.log(data)
        yield put(loginSuccess())
    } catch (e) {
        console.error(e)
    }
}

export function* getCurrentUserCB() {

    try {
        const res = yield call(getCurrentUserAsync)
        yield put(getCurrentUserSuccess(res.data.data))
    } catch (err) {
        console.error(err)
    }
}

export function* getMainServicesCB() {

    try {
        const res = yield call(getMainServicesAsync)
        if (res.status === 200) {
            yield put(getMainServicesSuccess(res.data))
        } else {
            fireAlertCustom("Ooops", res.message, "error")
        }
    } catch (err) {
        console.error(err)
    }
}

function* watchLoginSagas() {
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginUserCB)
    yield takeLatest(actionTypes.GET_CURRENT_USER_LISTEN, getCurrentUserCB)
    yield takeLatest(actionTypes.GET_ALL_MAIN_SERVICES_LISTEN, getMainServicesCB)
}

const loginSagas = [watchLoginSagas]

export default loginSagas
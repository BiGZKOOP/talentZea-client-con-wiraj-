import * as actionTypes from './constants'
import {takeLatest, call, put} from "redux-saga/effects"
import axios from '../../../../Axios.js'
import qs from 'qs'
import {Auth} from "aws-amplify"
import {getIDToken} from "../../../../utility/Utils"
import {getCurrentUserSuccess} from "./actions"

// eslint-disable-next-line no-unused-vars
const loginAsync = async (user) => {

    const params = new URLSearchParams()
    params.append("username", "Bashana")
    params.append("username", "1234")
    return axios.post(`/login`, qs.stringify({username: "Bashana", password: "1234"}), {
        headers: {'content-type': 'application/x-www-form-urlencoded'}
    }).then(res => console.log(res)).catch(err => console.log(err))
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

//////////////////////////
//////ASYNC Finished//////
//////////////////////////

export function* loginUserCB() {

    try {
        const data = yield call(loginAsync, "buddini")
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

export function* getCurrentUserCB() {

    try {
        const res = yield call(getCurrentUserAsync)
        yield put(getCurrentUserSuccess(res.data.userExit))
    } catch (err) {
        console.error(err)
    }
}

function* watchLoginSagas() {
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginUserCB)
    yield takeLatest(actionTypes.GET_CURRENT_USER_LISTEN, getCurrentUserCB)
}

const loginSagas = [watchLoginSagas]

export default loginSagas
import * as actionTypes from "./actionTypes"
import {call, put, takeLatest} from "redux-saga/effects"
import axios from "../../axios/axios"
import {getIDToken} from "../../utility/Utils"
import {signupSendingLoadingStart} from "../Signup/actions"

// eslint-disable-next-line no-unused-vars
const profileDetailsUpdateAsync = async (data) => {
    
    return await axios.patch("/customer/update/b82258f6-d372-4b0d-a192-4d86dc357260", data, {
        headers: {Authorization: `Bearer ${await getIDToken()}`}
    }).then(res => res).catch(err => console.error(err))
}

export const profileImageUpdateAsync = async (data) => {
    return await axios.patch("/customer", data, {
        headers: {Authorization: `Bearer ${await getIDToken()}`}
    }).then(res => res).catch(err => console.error(err))
}

export const coverImageUpdateAsync = async (data) => {
    return await axios.patch("/customer", data, {
        headers: {Authorization: `Bearer ${await getIDToken()}`}
    }).then(res => res).catch(err => console.error(err))
}

////////////////////
///ASYNC FINISHED///
////////////////////

export function* coverImageUpdateCB(action) {

    const {data} = action
    try {
        yield put(signupSendingLoadingStart())
        const res = yield call(profileImageUpdateAsync, data)
        console.log(res)
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingStart())
    }
}

export function* profileImageUpdateCB(action) {

    const {data} = action
    try {
        yield put(signupSendingLoadingStart())
        const res = yield call(coverImageUpdateAsync, data)
        console.log(res)
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingStart())
    }
}

export function* profileUpdateCB(action) {

    const {data} = action
    try {
        yield put(signupSendingLoadingStart())
        const res = yield call(profileDetailsUpdateAsync, data)
        console.log(res)
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingStart())
    }
}

function* watchProfileSagas() {
    yield takeLatest(actionTypes.PROFILE_UPDATE_LISTEN, profileUpdateCB)
    yield takeLatest(actionTypes.PROFILE_IMG_UPDATE_LISTEN, profileImageUpdateCB)
    yield takeLatest(actionTypes.COVER_IMG_UPDATE_LISTEN, coverImageUpdateCB)
}

const profileSagas = [watchProfileSagas]

export default profileSagas
import * as actionTypes from "./actionTypes"
import {call, put, takeLatest} from "redux-saga/effects"
import axios from "../../axios/axios"
import {getIDToken} from "../../utility/Utils"
import {signupSendingLoadingEnd, signupSendingLoadingStart} from "../Signup/actions"
import {deleteAttrFromObject, fireAlertCustom, jsonToFormData} from "../../utility/custom-util"
import {getCurrentUserListen} from "../../views/pages/authentication/redux/actions"

// eslint-disable-next-line no-unused-vars
const profileDetailsUpdateAsync = async (data) => {

    return await axios.patch(`/customer/update/${data._id}`, data, {
        headers: {Authorization: `Bearer ${await getIDToken()}`}
    }).then(res => {
        fireAlertCustom("Yeeeha !!", "Your profile is up to date", "success")
        return res
    }).catch(err => console.error(err))
}

export const profileImageUpdateAsync = async (data, id) => {

    //Removing the ID
    deleteAttrFromObject(data, "_id")

    //Converting json to formData
    const formData = jsonToFormData(data)

    return await axios.patch(`/customer/update/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${await getIDToken()}`,
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        fireAlertCustom("Yeeeha !!", "Your profile image is up to date", "success")
        return res
    }).catch(err => console.error(err))
}

export const coverImageUpdateAsync = async (data) => {
    return await axios.patch(`/customer/update/${data._id}`, data, {
        headers: {Authorization: `Bearer ${await getIDToken()}`}
    }).then(res => {
        fireAlertCustom("Yeeeha !!", "Your cover image is up to date", "success")
        return res
    }).catch(err => console.error(err))
}

////////////////////
///ASYNC FINISHED///
////////////////////

export function* coverImageUpdateCB(action) {

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

export function* profileImageUpdateCB(action) {

    const {data} = action
    try {
        yield put(signupSendingLoadingStart())
        const res = yield call(profileImageUpdateAsync, data, data._id)
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
        yield put(signupSendingLoadingStart())
        const res = yield call(profileDetailsUpdateAsync, data)
        if (res.status === 201) yield put(getCurrentUserListen())
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingEnd())
    }
}

function* watchProfileSagas() {
    yield takeLatest(actionTypes.PROFILE_UPDATE_LISTEN, profileUpdateCB)
    yield takeLatest(actionTypes.PROFILE_IMG_UPDATE_LISTEN, profileImageUpdateCB)
    yield takeLatest(actionTypes.COVER_IMG_UPDATE_LISTEN, coverImageUpdateCB)
}

const profileSagas = [watchProfileSagas]

export default profileSagas
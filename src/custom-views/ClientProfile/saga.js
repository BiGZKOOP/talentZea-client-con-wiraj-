import * as actionTypes from "./actionTypes"
import {call, put, takeLatest} from "redux-saga/effects"
import axios from "../../axios/axios"
import {getIDToken} from "../../utility/Utils"
import {signupSendingLoadingEnd, signupSendingLoadingStart} from "../Signup/actions"
import {
    deleteMultipleAttrFromObject,
    fireAlertCustom,
    jsonToFormData
} from "../../utility/custom-util"
import {getCurrentUserListen} from "../../views/pages/authentication/redux/actions"
import {
    getAllOrdersByCustomerSuccess, getOrderByIDSuccess,
    handleGetCustomerAllOrderByIDLoader,
    handleGetCustomerOrderByIDLoader
} from "./actions"

// eslint-disable-next-line no-unused-vars
const profileDetailsUpdateAsync = async (data, id) => {

    const formData = jsonToFormData(data)

    return await axios.patch(`/customer/update/${id}`, formData, {
        headers: {Authorization: `Bearer ${await getIDToken()}`}
    }).then(res => {
        fireAlertCustom("Yeeeha !!", "Your profile is up to date", "success")
        return res
    }).catch(err => console.error(err))
}

export const profileImageUpdateAsync = async (dispatch, user, id) => {

    deleteMultipleAttrFromObject(user, "_id",
        "referralCount",
        "referralID",
        "stripeCustomerId",
        "__v")

    //Converting json to formData
    const formData = jsonToFormData(user)

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

export const getAllOrdersByCustomerIDAsync = async (id) => {

    return await axios.get(`order-service/customer/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

export const getOrderByIDAsync = async (id) => {

    return await axios.get(`order-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////////
///ASYNC FINISHED///
////////////////////

export function* coverImageUpdateCB(action) {

    const {data} = action
    try {
        yield put(signupSendingLoadingStart())
        yield call(coverImageUpdateAsync, data)
        yield put(getCurrentUserListen())
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingStart())
    }
}

export function* profileImageUpdateCB(action) {

    const {data, dispatch} = action

    data.user.image = data.image

    try {
        yield put(signupSendingLoadingStart())
        yield call(profileImageUpdateAsync, dispatch, data.user, data.id)
        yield put(getCurrentUserListen())
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingEnd())
    }
}

export function* profileUpdateCB(action) {

    const {data, id} = action
    try {
        yield put(signupSendingLoadingStart())
        const res = yield call(profileDetailsUpdateAsync, data, id)
        if (res.status === 201) yield put(getCurrentUserListen())
    } catch (err) {
        console.error(err)
    } finally {
        yield put(signupSendingLoadingEnd())
    }
}

export function* getAllOrdersByCustomerIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetCustomerAllOrderByIDLoader(true))
        const res = yield call(getAllOrdersByCustomerIDAsync, payload)
        console.log(res.data)
        yield put(getAllOrdersByCustomerSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetCustomerAllOrderByIDLoader(false))
    }
}

export function* getOrderByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetCustomerOrderByIDLoader(true))
        const res = yield call(getOrderByIDAsync, payload)
        yield put(getOrderByIDSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetCustomerOrderByIDLoader(false))
    }
}

function* watchProfileSagas() {
    yield takeLatest(actionTypes.PROFILE_UPDATE_LISTEN, profileUpdateCB)
    yield takeLatest(actionTypes.PROFILE_IMG_UPDATE_LISTEN, profileImageUpdateCB)
    yield takeLatest(actionTypes.COVER_IMG_UPDATE_LISTEN, coverImageUpdateCB)
    yield takeLatest(actionTypes.GET_ALL_ORDERS_BY_CUSTOMER_LISTEN, getAllOrdersByCustomerIDCB)
    yield takeLatest(actionTypes.GET_CUSTOMER_ORDER_BY_ID_LISTEN, getOrderByIDCB)
}

const profileSagas = [watchProfileSagas]

export default profileSagas
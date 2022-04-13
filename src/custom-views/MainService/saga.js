import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import axios from "../../axios/axios"
import {fireAlertCustom} from "../../utility/custom-util"
import {
    getMainServiceByIDSuccess,
    getMainServiceSuccess,
    getSubServiceByIDSuccess,
    handleGetMainServiceByIDLoader
} from "./actions"

const getSubServiceByIdAsync = async (id) => {
    return await axios.get(`/sub-service/main/${id}`, {
    }).then(res => {
        return res
    }).catch(err => console.error(err))
}

const getMainServiceByIDAsync = async (id) => {

    return await axios.get(`/main-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

const getSingleSubServiceByIDAsync = async (id) => {

    return await axios.get(`/sub-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////////
///ASYNC FINISHED///
////////////////////

//This is use to get all the sub services under a specific main service
export function* getMainServicesCB(action) {
    const {id} = action
    try {
        const res = yield call(getSubServiceByIdAsync, id)
        if (res.status === 200) {
            yield put(getMainServiceSuccess(res.data))
        } else {
            fireAlertCustom("Oops !", res.message, "error")
        }
    } catch (err) {
        console.error(err.message)
    }
}

export function* getMainServiceByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetMainServiceByIDLoader(true))
        const res = yield call(getMainServiceByIDAsync, payload)
        yield put(getMainServiceByIDSuccess(res.data.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetMainServiceByIDLoader(false))
    }
}

export function* getSingleSubServiceByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetMainServiceByIDLoader(true))
        const res = yield call(getSingleSubServiceByIDAsync, payload)
        yield put(getSubServiceByIDSuccess(res.data.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetMainServiceByIDLoader(false))
    }
}

function* watchMainServiceSagas() {
    yield takeLatest(actionTypes.GET_SUB_SERVICES_LISTEN, getMainServicesCB)
    yield takeLatest(actionTypes.GET_MAIN_SERVICE_BY_ID_LISTEN, getMainServiceByIDCB)
}

const mainServiceSagas = [watchMainServiceSagas]

export default mainServiceSagas
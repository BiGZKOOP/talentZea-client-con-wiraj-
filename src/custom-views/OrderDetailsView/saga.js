import {call, put, takeLatest} from "redux-saga/effects"
import {
    getAllOrderSourceFilesSuccess,
    getOrderByIDSuccess,
    handleGetAllOrderSourceFilesLoader,
    handleOrderByIDLoader
} from "./actions"
import axios from "../../axios/axios"
import {fireAlertError} from "../../utility/custom-util"
import * as actionTypes from "./constants"
import {getIDToken} from "../../utility/Utils"

const getOrderByIDAsync = async (id) => {

    return await axios.get(`order-service/${id}`).then(res => {
        return res
    }).catch(err => {
        fireAlertError("Oops...", err.message)
    })
}

const getAllOrderSourceFileAsync = async (id) => {
    return axios.get(`/source-file/file/${id}`, {
        headers: {
            'content-type': 'application/form-data',
            Authorization: `Bearer ${await getIDToken()}`
        }
    }).then(res => res).catch(err => {
        fireAlertError("Oops !", err.message)
    })
}

////////////////
//ASYNC FINISHED
////////////////

export function* getOrderByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleOrderByIDLoader(true))
        const res = yield call(getOrderByIDAsync, payload)
        yield put(getOrderByIDSuccess(res.data))
    } catch (err) {
        fireAlertError("Oops...", err.message)
    } finally {
        yield put(handleOrderByIDLoader(false))
    }
}

export function* getAllOrderSourceFilesCB(action) {

    const {payload} = action

    try {
        yield put(handleGetAllOrderSourceFilesLoader(true))
        const res = yield call(getAllOrderSourceFileAsync, payload)
        yield put(getAllOrderSourceFilesSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetAllOrderSourceFilesLoader(false))
    }
}

function* watchOrderDetailsViewSagas() {
    yield takeLatest(actionTypes.GET_ORDER_BY_ID_LISTEN, getOrderByIDCB)
    yield takeLatest(actionTypes.GET_ORDER_SOURCE_FILES_LISTEN, getAllOrderSourceFilesCB)

}

const orderDetailsSagas = [watchOrderDetailsViewSagas]

export default orderDetailsSagas
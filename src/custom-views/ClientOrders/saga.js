import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {
    getAllOrderSuccess, getOrderByIDLoader,
    getOrderTimeLineByIDSuccess, getSingleOrderByIDSuccess,
    handleGetAllOrderLoader,
    handleGetOrderTimlineLoader
} from "./actions"
import axios from "../../axios/axios"

const getAllOrderAsync = async (id) => {

    return axios.get(`/order-service/customer/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

const getOrderTimelineByIDAsync = async (id) => {

    return axios.get(`/order-log-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

const getOrderByIDAsync = async (id) => {

    return axios.get(`/order-service/${id}`).then(res => res).catch(err => {
        console.error(err.message)
    })
}

////////////////
//ASYNC FINISHED
////////////////

export function* getAllOrderCB(action) {

    const {payload} = action

    try {
        yield put(handleGetAllOrderLoader(false))
        const res = yield call(getAllOrderAsync, payload)
        yield put(getAllOrderSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetAllOrderLoader(false))
    }
}

export function* getOrderTimelineByIDCB(action) {

    const {payload} = action

    try {
        yield put(handleGetOrderTimlineLoader(true))
        const res = yield call(getOrderTimelineByIDAsync, payload)
        yield put(getOrderTimeLineByIDSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleGetOrderTimlineLoader(false))
    }
}

export function* getOrderByIDCB(action) {

    const {payload} = action

    try {
        yield put(getOrderByIDLoader(true))
        const res = yield call(getOrderByIDAsync, payload)
        yield put(getSingleOrderByIDSuccess(res.data))
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(getOrderByIDLoader(false))
    }
}

function* watchClientSaga() {
    yield takeLatest(actionTypes.GET_ALL_ORDER_LISTEN, getAllOrderCB)
    yield takeLatest(actionTypes.GET_ORDER_TIME_LINE_LISTEN, getOrderTimelineByIDCB)
    yield takeLatest(actionTypes.GET_ORDER_BY_ID_LISTEN, getOrderByIDCB)
}

const clientSagas = [watchClientSaga]

export default clientSagas
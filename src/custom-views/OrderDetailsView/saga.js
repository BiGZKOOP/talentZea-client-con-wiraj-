import {call, put, takeLatest} from "redux-saga/effects"
import {handleOrderByIDLoader} from "./actions"
import axios from "../../axios/axios"
import {fireAlertError} from "../../utility/custom-util"
import * as actionTypes from "./constants"

const getOrderByIDAsync = async (id) => {

    return await axios.get(`order-service/${id}`).then(res => {
        console.log(res)
        return res
    }).catch(err => {
        fireAlertError("Oops...", err.message)
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
        console.log(res)
    } catch (err) {
        fireAlertError("Oops...", err.message)
    } finally {
        yield put(handleOrderByIDLoader(false))
    }
}

function* watchOrderDetailsViewSagas() {
    yield takeLatest(actionTypes.GET_ORDER_BY_ID_LISTEN, getOrderByIDCB)
}

const orderDetailsSagas = [watchOrderDetailsViewSagas]

export default orderDetailsSagas
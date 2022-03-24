import {call, put, takeLatest} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import axios from "../../axios/axios"
import {fireAlertCustom} from "../../utility/custom-util"
import {getMainServiceSuccess} from "./actions"

export const getSubServiceByIdAsync = async (id) => {
    return await axios.get(`/sub-service/main/${id}`, {
    }).then(res => {
        return res
    }).catch(err => console.error(err))
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

function* watchMainServiceSagas() {
    yield takeLatest(actionTypes.GET_SUB_SERVICES_LISTEN, getMainServicesCB)
}

const mainServiceSagas = [watchMainServiceSagas]

export default mainServiceSagas
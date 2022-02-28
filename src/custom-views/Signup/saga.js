import axios from "../../axios/axios"
import {call, takeLatest, put} from "redux-saga/effects"
import * as actionTypes from "./actionTypes"
import {getAllCountriesSuccess} from "./actions"

const getAllCountriesAsync = async () => {
    
   return axios.get("https://restcountries.com/v3.1/all").then(data => {
        return data.data
    }).catch(err => console.error(err))
}
///ASYNC FINISHED///

export function* getAllCountriesCB () {
    try {
        const data = yield call(getAllCountriesAsync)
        const countryArr = []
        data.map(e => {
            countryArr.push(e?.name?.common)
        })
        yield put(getAllCountriesSuccess(countryArr))
    } catch (err) {
        console.error(err)
    }
}

function* watchSignupSagas() {
    yield takeLatest(actionTypes.GET_ALL_COUNTRIES_LISTEN, getAllCountriesCB)
}

const signupSagas = [watchSignupSagas]

export default signupSagas
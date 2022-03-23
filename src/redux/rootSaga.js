import {all, fork} from "redux-saga/effects"
import configSagas from "../utility/configCalling/saga"
import loginSagas from "../views/pages/authentication/redux/saga"
import signupSagas from "../custom-views/Signup/saga"
import profileSagas from "../custom-views/ClientProfile/saga"
import mainServiceSagas from "../custom-views/MainService/saga"

export default function* rootSaga() {

    yield all(configSagas.map((s) => fork(s)))
    yield all(loginSagas.map(s => fork(s)))
    yield all(signupSagas.map(s => fork(s)))
    yield all(profileSagas.map(s => fork(s)))
    yield all(mainServiceSagas.map(s => fork(s)))
}
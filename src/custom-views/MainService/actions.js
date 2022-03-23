import * as actionTypes from "./actionTypes"

//Get main services
export const getMainServicesListen = (id) => {

    return {
        type: actionTypes.GET_SUB_SERVICES_LISTEN,
        id
    }
}

export const getMainServiceSuccess = (data) => {
    return {
        type: actionTypes.GET_SUB_SERVICE_SUCCESS,
        data
    }
}
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

//Use this to get a single main service
export const getMainServiceByIDListen = (id) => {

    return {
        type: actionTypes.GET_MAIN_SERVICE_BY_ID_LISTEN,
        payload: id
    }
}

export const getMainServiceByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_MAIN_SERVICE_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle the get main service by id loader
export const handleGetMainServiceByIDLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_MAIN_SERVICE_BY_ID_LOADER,
        payload: state
    }
}
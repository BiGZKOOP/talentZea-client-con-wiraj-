import * as actionTypes from "./constants"

//Use this to handle the order loader
export const handleOrderLoaderListen = (state) => {

    return {
        type: actionTypes.HANDLE_ORDER_LOADER_LISTEN,
        payload: state
    }
}

//Use this to handle the order state
export const handleOrderStateListen = (state) => {

    return {
        type: actionTypes.HANDLE_ORDER_STATE,
        payload: state
    }
}

//Use this to get the orders by id
export const getOrderByIDListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_LISTEN,
        payload: id
    }
}

export const getOrderByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle the get order by id loader
export const handleOrderByIDLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ORDER_BY_ID_LOADER,
        payload: state
    }
}

//Use this to fetch all the order source files
export const getAllOrderSourceFilesListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_SOURCE_FILES_LISTEN,
        payload: id
    }
}

export const getAllOrderSourceFilesSuccess = (payload) => {

    return {
        type: actionTypes.GET_ORDER_SOURCE_FILES_SUCCESS,
        payload
    }
}

//Use this to handle the get all source files loader
export const handleGetAllOrderSourceFilesLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ORDER_SOURCE_FILES_LOADER,
        payload: state
    }
}
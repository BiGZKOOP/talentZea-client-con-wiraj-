import * as actionTypes from "./actionTypes"

//Use this to handle the get all orders
export const getAllOrdersListen = (id) => {

    return {
        type: actionTypes.GET_ALL_ORDER_LISTEN,
        payload: id
    }
}

export const getAllOrderSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_ORDER_SUCCESS,
        payload: data
    }
}

//Use this to handle get order loader
export const handleGetAllOrderLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ALL_ORDER_LOADER,
        payload: state
    }
}

//Use this to handle get order by ID
export const getAllOrderByIDListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_LISTEN,
        payload: id
    }
}

export const getAllOrderByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle get order by id loader
export const handleGetOrderByLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ORDER_BY_ID_LOADER,
        payload: state
    }
}

//Use this to get order time line data by given ID
export const getOrderTimeLineByIDListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_TIME_LINE_LISTEN,
        payload: id
    }
}

export const getOrderTimeLineByIDSuccess = (data) => {

    return  {
        type: actionTypes.GET_ORDER_TIME_LINE_SUCCESS,
        payload: data
    }
}

//Use this to handle the order timeline loader
export const handleGetOrderTimlineLoader = (state) => {

    return {
        type: actionTypes.HANDLE_ORDER_TIME_LINE_LOADER,
        payload: state
    }
}

//Use this to fetch single order
export const getSingleOrderByIDListen = (id) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_LISTEN,
        payload: id
    }
}

export const getSingleOrderByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_ORDER_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle get order by id loader
export const getOrderByIDLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_ORDER_BY_ID_LOADER,
        payload: state
    }
}
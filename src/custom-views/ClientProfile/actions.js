import * as actionTypes from "./actionTypes"

//screen index handle actions
export const handleScreenIndex = (index) => {

    return {
        type: actionTypes.SET_SCREEN_INDEX,
        index
    }
}

//Profile details update
export const profileUpdateListen = (data, id) => {

    return {
        type: actionTypes.PROFILE_UPDATE_LISTEN,
        data,
        id
    }
}

export const profileUpdateSuccess = () => {

    return {
        type: actionTypes.PROFILE_UPDATE_SUCCESS
    }
}

//Profile Image update
export const profileImageUpdateListen = (data, dispatch) => {
    console.log(dispatch)
    return {
        type: actionTypes.PROFILE_IMG_UPDATE_LISTEN,
        data,
        dispatch
    }
}

export const profileImageUpdateSuccess = () => {

    return {
        type: actionTypes.PROFILE_IMG_UPDATE_SUCCESS
    }
}

//Profile cover image update
export const coverImageUpdateListen = (data, file) => {
    return {
        type: actionTypes.COVER_IMG_UPDATE_LISTEN,
        data,
        file
    }
}

export const coverImageUpdateSuccess = () => {
    return {
        type: actionTypes.COVER_IMG_UPDATE_SUCCESS
    }
}

//Image upload progress
export const imageUploadProgress = (progress) => {
    return {
        type: actionTypes.IMAGE_UPLOAD_PROGRESS_LISTEN,
        progress
    }
}

//Use this to fetch all order by customer
export const getAllOrdersByCustomerListen = (id) => {
    return {
        type: actionTypes.GET_ALL_ORDERS_BY_CUSTOMER_LISTEN,
        payload: id
    }
}

export const getAllOrdersByCustomerSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_ORDERS_BY_CUSTOMER_SUCCESS,
        payload: data
    }
}

//use this to handle get all customer loader
export const handleGetCustomerAllOrderByIDLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_CUSTOMER_ORDER_BY_ID_LOADER,
        payload: state
    }
}

//Use this to get customer order by ID
export const getOrderByIDListen = (id) => {

    return {
        type: actionTypes.GET_CUSTOMER_ORDER_BY_ID_LISTEN,
        payload: id
    }
}

export const getOrderByIDSuccess = (data) => {

    return {
        type: actionTypes.GET_CUSTOMER_ORDER_BY_ID_SUCCESS,
        payload: data
    }
}

//Use this to handle get customer order by id loader
export const handleGetCustomerOrderByIDLoader = (state) => {

    return {
        type: actionTypes.HANDLE_GET_CUSTOMER_ORDER_BY_ID_LOADER,
        payload: state
    }
}

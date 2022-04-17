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
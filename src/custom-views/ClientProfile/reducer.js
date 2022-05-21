import * as actionTypes from "./actionTypes"

const init  = {
    screenIndex: 1,
    progress: 0,

    allCustomerOrders: [],
    allCustomerOrderLoader: true,

    singleCustomerOrder: {},
    singleCustomerOrderLoader: true
}

const clientProfileReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.SET_SCREEN_INDEX:
            return {
                ...state,
                screenIndex: action.index
            }
        case actionTypes.IMAGE_UPLOAD_PROGRESS_LISTEN:
            return {
                ...state,
                progress: action.progress
            }
        case actionTypes.GET_CUSTOMER_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                singleCustomerOrder: action.payload
            }
        case actionTypes.HANDLE_GET_CUSTOMER_ORDER_BY_ID_LOADER:
            return {
                ...state,
                singleCustomerOrderLoader: action.payload
            }
        case actionTypes.GET_ALL_ORDERS_BY_CUSTOMER_SUCCESS:
            return {
                ...state,
                allCustomerOrders: action.payload
            }
        case actionTypes.HANDLE_GET_ALL_ORDERS_BY_CUSTOMER_LOADER:
            return {
                ...state,
                allCustomerOrderLoader: action.payload
            }
        default:
            return state
    }
}

export default clientProfileReducer
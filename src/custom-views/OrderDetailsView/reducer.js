import * as actionTypes from "./constants"

const init = {
    orderLoading: false,
    orderSuccess: false,
    orderByIDLoader: false,
    orderDetails: {},

    sourceFiles: [],
    sourceFilesLoader: true
}

const orderDetailsViewReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.HANDLE_ORDER_LOADER_LISTEN:
            return {
                ...state,
                orderLoading: action.payload
            }
        case actionTypes.HANDLE_ORDER_STATE:
            return {
                ...state,
                orderSuccess: action.payload
            }
        case actionTypes.HANDLE_GET_ORDER_BY_ID_LOADER:
            return {
                ...state,
                orderByIDLoader: action.payload
            }
        case actionTypes.GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                orderDetails: action.payload
            }
        case actionTypes.GET_ORDER_SOURCE_FILES_SUCCESS: {
            return {
                ...state,
                sourceFiles: action.payload
            }
        }
        case actionTypes.HANDLE_GET_ORDER_SOURCE_FILES_LOADER:
            return {
                ...state,
                sourceFilesLoader: action.payload
            }
        default:
            return state
    }
}

export default orderDetailsViewReducer
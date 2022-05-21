import * as actionTypes from "./actionTypes"

const init = {
    allOrder: [],
    allOrderLoader: false,
    singleOrder: {},
    singleOrderLoader: false,

    timeLineData: [],
    timeLineLoader: true
}

const clientOrderReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.GET_ALL_ORDER_SUCCESS:
            return {
                ...state,
                singleOrder: action.payload
            }
        case actionTypes.HANDLE_GET_ALL_ORDER_LOADER:
            return {
                ...state,
                allOrderLoader: action.payload
            }
        case actionTypes.GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                singleOrder: action.payload
            }
        case actionTypes.HANDLE_GET_ORDER_BY_ID_LOADER:
            return {
                ...state,
                singleOrderLoader: action.payload
            }
        case actionTypes.HANDLE_ORDER_TIME_LINE_LOADER:
            return {
                ...state,
                timeLineLoader: action.payload
            }
        case actionTypes.GET_ORDER_TIME_LINE_SUCCESS: {
            return {
                ...state,
                timeLineData: action.payload
            }
        }
        default: return state
    }
}

export default clientOrderReducer
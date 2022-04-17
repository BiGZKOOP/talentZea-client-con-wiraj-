import * as actionTypes from "./constants"

const init = {
    orderLoading: false,
    orderSuccess: false
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
        default:
            return state
    }
}

export default orderDetailsViewReducer
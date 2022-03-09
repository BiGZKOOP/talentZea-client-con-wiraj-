import * as actionTypes from "./actionTypes"

const init  = {
    screenIndex: 1
}

const clientProfileReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.SET_SCREEN_INDEX:
            return {
                ...state,
                screenIndex: action.index
            }
        default:
            return state
    }
}

export default clientProfileReducer
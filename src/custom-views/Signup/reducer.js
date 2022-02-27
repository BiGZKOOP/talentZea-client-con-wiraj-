import * as actionTypes from "./actionTypes"

const init = {
    screenIndex: 0
}

const signUpReducer = (state = init, action) => {

    const {type} = action
    switch (type) {
        case actionTypes.SCREEN_INDEX_SET:
            const {index} = action
            return {
                ...state,
                screenIndex: index
            }
        default: return state
    }
}

export default signUpReducer
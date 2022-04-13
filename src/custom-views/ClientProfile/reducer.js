import * as actionTypes from "./actionTypes"

const init  = {
    screenIndex: 1,
    progress: 0
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
        default:
            return state
    }
}

export default clientProfileReducer
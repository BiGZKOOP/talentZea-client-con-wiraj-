import * as actionTypes from "./actionTypes"

//screen index handle actions
export const handleScreenIndex = (index) => {

    return {
        type: actionTypes.SET_SCREEN_INDEX,
        index
    }
}
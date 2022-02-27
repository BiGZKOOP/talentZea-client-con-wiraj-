import * as actionTypes from "./actionTypes"

export const setScreenIndex = (index) => {

    return {
        type: actionTypes.SCREEN_INDEX_SET,
        index
    }
}
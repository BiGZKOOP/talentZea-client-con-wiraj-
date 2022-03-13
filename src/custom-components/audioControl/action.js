import * as actionTypes from "./actionTypes"

export const audioHandle = (dis) => {
    return {
        type: actionTypes.AUDIO_HANDLE,
        payload: dis
    }
}

export const audioModelLoad = () => {

    return {
        type: actionTypes.AUDIO_MODAL_LOAD
    }
}
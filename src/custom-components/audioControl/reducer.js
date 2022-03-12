import * as actionTypes from "./actionTypes"
import music from "../../assets/audio/welcome.mp3"
import fairy from "../../assets/audio/fairy.wav"

const init = {
    playAudio: false,
    loaded: false,
    welcomeAudio: new Audio(music),
    fairyAudio: new Audio(fairy)
}

export const audioReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.AUDIO_HANDLE:
            const {payload} = action
            return {
                ...state,
                playAudio: payload
            }
        case actionTypes.AUDIO_MODAL_LOAD:
            return  {
                ...state,
                loaded: true
            }
        default:
            return state
    }
}

export default audioReducer
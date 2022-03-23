import * as actionTypes from "./actionTypes"

//screen index handle actions
export const handleScreenIndex = (index) => {

    return {
        type: actionTypes.SET_SCREEN_INDEX,
        index
    }
}

//Profile details update
export const profileUpdateListen = (data) => {

    return {
        type: actionTypes.PROFILE_UPDATE_LISTEN,
        data
    }
}

export const profileUpdateSuccess = () => {

    return {
        type: actionTypes.PROFILE_UPDATE_SUCCESS
    }
}

//Profile Image update
export const profileImageUpdateListen = (data, file) => {

    return {
        type: actionTypes.PROFILE_IMG_UPDATE_LISTEN,
        data,
        file
    }
}

export const profileImageUpdateSuccess = () => {

    return {
        type: actionTypes.PROFILE_IMG_UPDATE_SUCCESS
    }
}

//Profile cover image update
export const coverImageUpdateListen = (data, file) => {
    return {
        type: actionTypes.COVER_IMG_UPDATE_LISTEN,
        data,
        file
    }
}

export const coverImageUpdateSuccess = () => {
    return {
        type: actionTypes.COVER_IMG_UPDATE_SUCCESS
    }
}
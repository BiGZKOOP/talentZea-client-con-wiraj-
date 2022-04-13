import * as actionTypes from "./actionTypes"

//screen index handle actions
export const handleScreenIndex = (index) => {

    return {
        type: actionTypes.SET_SCREEN_INDEX,
        index
    }
}

//Profile details update
export const profileUpdateListen = (data, id) => {

    return {
        type: actionTypes.PROFILE_UPDATE_LISTEN,
        data,
        id
    }
}

export const profileUpdateSuccess = () => {

    return {
        type: actionTypes.PROFILE_UPDATE_SUCCESS
    }
}

//Profile Image update
export const profileImageUpdateListen = (data, dispatch) => {
    console.log(dispatch)
    return {
        type: actionTypes.PROFILE_IMG_UPDATE_LISTEN,
        data,
        dispatch
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

//Image upload progress
export const imageUploadProgress = (progress) => {
    return {
        type: actionTypes.IMAGE_UPLOAD_PROGRESS_LISTEN,
        progress
    }
}
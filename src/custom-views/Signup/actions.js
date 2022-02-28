import * as actionTypes from "./actionTypes"

export const setScreenIndex = (index) => {

    return {
        type: actionTypes.SCREEN_INDEX_SET,
        index
    }
}

export const getAllCountriesListen = () => {
    return {
        type: actionTypes.GET_ALL_COUNTRIES_LISTEN
    }
}

export const getAllCountriesSuccess = (data) => {

    return {
        type: actionTypes.GET_ALL_COUNTRIES_SUCCESS,
        data
    }
}
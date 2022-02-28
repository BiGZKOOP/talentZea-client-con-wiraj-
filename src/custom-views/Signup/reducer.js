import * as actionTypes from "./actionTypes"

const init = {
    screenIndex: 0,
    allCountries: []
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
        case actionTypes.GET_ALL_COUNTRIES_SUCCESS:
            const {data} = action
            return {
                ...state,
                allCountries: data
            }
        default: return state
    }
}

export default signUpReducer
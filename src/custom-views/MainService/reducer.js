import * as actionTypes from "./actionTypes"

const init = {
    subServiceLoad: false,
    subServices: {}
}

const mainServiceReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.GET_SUB_SERVICE_SUCCESS: {
            return {
                ...state,
                subServices: action.data,
                subServiceLoad: true
            }
        }
        default:
            return state
    }
}

export default mainServiceReducer
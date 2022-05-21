import * as actionTypes from "./actionTypes"

const init = {
    subServiceLoad: false,
    singleSubLoad: false,
    singleSubService: {},
    subServices: {},
    singleSubServiceByID: {},
    allSubServices: []
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
        case actionTypes.GET_MAIN_SERVICE_BY_ID_SUCCESS:
            return {
                ...state,
                singleSubService: action.payload
            }
        case actionTypes.HANDLE_GET_MAIN_SERVICE_BY_ID_LOADER:
            return {
                ...state,
                singleSubLoad: action.payload
            }
        case actionTypes.GET_SUB_SERVICE_BY_ID_SUCCESS:
            return {
                ...state,
                singleSubServiceByID: action.payload
            }
        case actionTypes.GET_ALL_SUB_SERVICE_SUCCESS:
            return {
                ...state,
                allSubServices: action.payload
            }
        default:
            return state
    }
}

export default mainServiceReducer
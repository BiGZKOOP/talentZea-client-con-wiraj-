import * as actionTypes from "./constants"
import {SIGNOUT_SUCCESS} from "../../../../custom-views/Signup/actionTypes"

const init = {
    user: {},
    userLoad: false,
    mainServices: []
}

const loginReducer = (state = init, action) => {

    switch (action.type) {
        case actionTypes.GET_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                user: action.data,
                userLoad: true
            }
        }
        case SIGNOUT_SUCCESS: {
            return {
                ...state,
                user: {},
                userLoad: false
            }
        }
        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                userLoad: true
            }
        }
        case actionTypes.GET_ALL_MAIN_SERVICES_SUCCESS: {
            return {
                ...state,
                mainServices: action.data
            }
        }
        default:
            return state
    }
}

export default loginReducer
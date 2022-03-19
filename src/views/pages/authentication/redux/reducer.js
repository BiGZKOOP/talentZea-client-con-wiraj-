import * as actionTypes from "./constants"

const init = {
    user: {},
    userLoad: false
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
        default:
            return state
    }
}

export default loginReducer
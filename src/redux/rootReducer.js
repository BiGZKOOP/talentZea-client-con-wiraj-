// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/views/apps/todo/store'
import chat from '@src/views/apps/chat/store'
import users from '@src/views/apps/user/store'
import email from '@src/views/apps/email/store'
import invoice from '@src/views/apps/invoice/store'
import calendar from '@src/views/apps/calendar/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'
import configReducer from "../utility/configCalling/reducer"
import loginReducer from "../views/pages/authentication/redux/reducer"
import signUpReducer from "../custom-views/Signup/reducer"
import {combineReducers} from "redux"
import clientProfileReducer from "../custom-views/ClientProfile/reducer"
import audioReducer from "../custom-components/audioControl/reducer"
import mainServiceReducer from "../custom-views/MainService/reducer"
import orderDetailsViewReducer from "../custom-views/OrderDetailsView/reducer"
import clientOrderReducer from "../custom-views/ClientOrders/reducer"

const rootReducer = combineReducers({
    auth,
    todo,
    chat,
    email,
    users,
    navbar,
    layout,
    invoice,
    calendar,
    ecommerce,
    dataTables,
    permissions,
    configReducer,
    loginReducer,
    signUpReducer,
    clientProfileReducer,
    audioReducer,
    mainServiceReducer,
    orderDetailsViewReducer,
    clientOrderReducer
})

export default rootReducer

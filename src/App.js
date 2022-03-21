// ** Router Import
import Router from './router/Router'
import './assets/css/theme.css'
import './assets/css/animations.css'
import Amplify from "aws-amplify"
import awsconfig from "./aws-exports"
import {useEffect} from "react"
import {getAllCountriesListen} from "./custom-views/Signup/actions"
import {useDispatch} from "react-redux"
import {getCurrentUserListen} from "./views/pages/authentication/redux/actions"

Amplify.configure(awsconfig)

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUserListen())
        dispatch(getAllCountriesListen())
    }, [])

    return <Router/>
}

export default App

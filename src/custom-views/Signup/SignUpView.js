// ** Styles
import '@styles/react/pages/page-authentication.scss'
import "../../assets/css/signup.css"
import WelcomeComp from "../../custom-components/Signup/WelcomeComp"
import {useDispatch, useSelector} from "react-redux"
import SignupCustomerData from "../../custom-components/Signup/SignupCustomerData"
import EnterPasswordUsername from "../../custom-components/Signup/EnterPasswordUsername"
import {fireAlertMessage} from "../../utility/custom-util"
import {useEffect} from "react"
import {getAllCountriesListen} from "./actions"

const SignUpView = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCountriesListen())
    }, [])

    const {screenIndex} = useSelector(state => state.signUpReducer)

    const handleScreens = () => {
        switch (screenIndex) {
            case 0:
                return <WelcomeComp/>
            case 1:
                return <SignupCustomerData/>
            case 2:
                return <EnterPasswordUsername/>
            default:
                fireAlertMessage("An error occurred")
        }
    }

    return (
        <div className='auth-wrapper auth-cover signup-body'>
            {handleScreens()}
        </div>
    )
}

export default SignUpView

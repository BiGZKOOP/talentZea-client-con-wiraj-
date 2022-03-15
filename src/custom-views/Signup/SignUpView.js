// ** Styles
import '@styles/react/pages/page-authentication.scss'
import "../../assets/css/signup.css"
import WelcomeComp from "../../custom-components/Signup/WelcomeComp"
import {useDispatch, useSelector} from "react-redux"
import EnterPasswordUsername from "../../custom-components/Signup/EnterPasswordUsername"
import {fireAlertMessage} from "../../utility/custom-util"
import {useEffect} from "react"
import {getAllCountriesListen} from "./actions"
import OtpSend from "../../custom-components/Signup/OtpSend"
import UserDetails from "../../custom-components/Signup/UserDetails"

const SignUpView = () => {

    const dispatch = useDispatch()
    const {screenIndex, verifySend} = useSelector(state => state.signUpReducer)

    useEffect(() => {
        dispatch(getAllCountriesListen())
    }, [])


    const handleScreens = () => {
        switch (screenIndex) {
            case 0:
                return <WelcomeComp/>
            case 1:
                return <UserDetails />
            case 2:
                return verifySend ? <OtpSend /> : <EnterPasswordUsername/>
            default:
                fireAlertMessage("An error occurred")
        }
    }

    return (
        <div className='auth-wrapper auth-cover'>
            {handleScreens()}
        </div>
    )
}

export default SignUpView

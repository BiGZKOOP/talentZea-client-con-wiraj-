// ** Styles
import '@styles/react/pages/page-authentication.scss'
import "../../assets/css/signup.css"
import WelcomeComp from "../../custom-components/Signup/WelcomeComp"
import {useSelector} from "react-redux"
import EnterPasswordUsername from "../../custom-components/Signup/EnterPasswordUsername"
import {fireAlertMessage} from "../../utility/custom-util"
import OtpSend from "../../custom-components/Signup/OtpSend"
import UserDetails from "../../custom-components/Signup/UserDetails"

const SignUpView = () => {

    const {screenIndex, verifySend} = useSelector(state => state.signUpReducer)


    const handleScreens = () => {
        switch (screenIndex) {
            case 0:
                return <WelcomeComp/>
            case 1:
                return <UserDetails />
            case 2:
                return verifySend ? <OtpSend widthLG={4}/> : <EnterPasswordUsername/>
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

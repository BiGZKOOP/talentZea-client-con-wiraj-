import {CardText, CardTitle, Col} from "reactstrap"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setScreenIndex} from "../../custom-views/Signup/actions"
import SignupWelcomeSVG from "../../assets/custom_images/svg/SignupWelcomeSVG"

const WelcomeComp = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const routeToLogin = () => {
        history.push("/login")
    }

    const changeScreens = () => {
        dispatch(setScreenIndex(1))
    }


    return <div className='auth-inner signup-body m-0 d-center signup-back-inner'>
        <Col
            className='d-flex align-items-center signup-inner-container shadow-lg radius-20 auth-bg px-2 p-5'
            lg='4' sm='2'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                <div className="d-center floating-img">
                    <div className="w-75">
                        <SignupWelcomeSVG />
                    </div>
                </div>
                <div className="d-center mt-4">
                    <button
                        onClick={changeScreens}
                        className="btn btn-primary p-1 f-shippori">
                        CLICK HERE TO START THE JOURNEY !
                    </button>
                </div>
                <div
                    onClick={routeToLogin}
                    className="d-flex justify-content-center pointer mt-2">
                    <p className="text-white lead font-bold clickable">
                        Back to login
                    </p>
                </div>
            </Col>
        </Col>
    </div>
}

export default WelcomeComp
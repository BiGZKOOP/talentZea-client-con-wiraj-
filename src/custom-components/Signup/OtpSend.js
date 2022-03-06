import {Col, Input, Spinner} from "reactstrap"
import {useHistory} from "react-router-dom"
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {sendOtpListen} from "../../custom-views/Signup/actions"

const OtpSend = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const routeToLogin = () => {
        history.push("/login")
    }

    const {username, signupLoad} = useSelector(state => state.signUpReducer)

    // eslint-disable-next-line no-unused-vars
    const [otp, setOtp] = useState("")

    const handleVerification = () => {
        dispatch(sendOtpListen(username, otp, history))
    }

    return <div className='auth-inner m-0 d-center'>
        <Col
            className='d-flex align-items-center shadow-lg bg-transparent signup-prev-inner radius-20 auth-bg px-2 p-5'
            lg='4' sm='2'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                <div className="d-center flex-column">
                    <div className="mb-2 text-center">
                        <h1 className="text-light f-Londrina">We sent you an OTP</h1>
                        <h4 className="text-light f-Londrina">Enter the OTP to verify</h4>
                    </div>
                    <div>
                        <Input
                            onChange={e => setOtp(e.target.value)}/>
                    </div>
                    {
                        signupLoad && <Col className="d-center mt-2">
                            <Spinner color="light"/>
                        </Col>
                    }
                    <div>
                        <button
                            onClick={handleVerification}
                            className="d-flex justify-content-center pointer mt-2 btn-danger btn">
                            Verify user
                        </button>
                    </div>
                    <button
                        onClick={routeToLogin}
                        className="d-flex text-medium justify-content-center pointer mt-2 btn-transparent clickable text-light f-indie-flower btn">
                        Back to login
                    </button>
                </div>
            </Col>
        </Col>
    </div>
}

export default OtpSend
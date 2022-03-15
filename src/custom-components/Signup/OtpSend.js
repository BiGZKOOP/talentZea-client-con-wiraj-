import {Col, Input, Spinner} from "reactstrap"
import {useHistory} from "react-router-dom"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {sendOtpListen} from "../../custom-views/Signup/actions"

const OtpSend = ({widthLG}) => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [inptUsername, setInptUsername] = useState("")

    const routeToLogin = () => {
        history.push("/login")
    }

    const {username, signupLoad} = useSelector(state => state.signUpReducer)

    useEffect(() => {
        setInptUsername(username)
    }, [])

    // eslint-disable-next-line no-unused-vars
    const [otp, setOtp] = useState("")

    const handleVerification = () => {
        dispatch(sendOtpListen(inptUsername, otp, history))
    }

    return <div className='auth-inner signup-body m-0 d-center'>
        <Col
            className='d-flex align-items-center shadow-lg radius-20 auth-bg px-2 p-5'
            lg={widthLG} sm='2'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                <div className="d-center flex-column">
                    <div className="mb-2 text-center">
                        <h1 className="f-Londrina">We sent you an OTP</h1>
                        <h4 className="f-Londrina">Enter the OTP to verify</h4>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-1">Enter email {inptUsername}</label>
                        <Input
                            disabled={!!username}
                            id="email"
                            value={inptUsername}
                            placeholder="123@example.com"
                            onChange={e => setInptUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="otp" className="mb-1">Enter OTP</label>
                        <Input
                            id="otp"
                            onChange={e => setOtp(e.target.value)}/>
                    </div>
                    {
                        signupLoad && <Col className="d-center mt-2">
                            <Spinner color="light"/>
                        </Col>
                    }
                    <div className="mt-1">
                        <button
                            onClick={handleVerification}
                            className="d-flex justify-content-center pointer mt-2 btn-danger btn">
                            Verify user
                        </button>
                    </div>
                    <button
                        onClick={routeToLogin}
                        className="d-flex text-medium justify-content-center pointer mt-1 btn-transparent clickable f-indie-flower btn">
                        Back to login
                    </button>
                </div>
            </Col>
        </Col>
    </div>
}

export default OtpSend
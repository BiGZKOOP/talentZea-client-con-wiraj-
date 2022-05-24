import {Card, CardText, CardTitle, Col, Form, Input, Label, Progress, Row, Spinner} from "reactstrap"
import {fireAlertMessage} from "../../utility/custom-util"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {useState} from "react"
import "../../assets/css/signup.css"
import {handlePasswordResetListen, sendForgotPwCodeListen} from "../Signup/actions"

const ForgotPasswordView = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const {signupLoad, pwCodeSend} = useSelector(state => state.signUpReducer)
    // eslint-disable-next-line no-unused-vars
    const [load, setLoad] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [username, setUserName] = useState("")

    const [passwordType, setPasswordType] = useState("password")
    const [rePasswordType, setRePasswordType] = useState("password")

    const cookObject = (values) => {
        return {
            username,
            ...values
        }
    }

    const validate = (values) => {

        if (!values.code) {
            fireAlertMessage("code is required !!!")
            return
        }
        if (!username) {
            fireAlertMessage("username is required !!!")
            return
        }
        if (!values.password) {
            fireAlertMessage("password is required !!!")
            return
        }
        if (!values.rePassword) {
            fireAlertMessage("password is required !!!")
            return
        }
        if (values.password !== values.rePassword) {
            fireAlertMessage("passwords do not match !!!")
        } else {
            dispatch(handlePasswordResetListen(cookObject(values)))
        }
    }

    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            code: "",
            password: "",
            rePassword: ""
        },
        onSubmit: (values) => {
            if (!signupLoad) validate(values)
        }
    })

    const changeScreens = () => {
        history.push("/login")
    }

    const sendFPWCode = () => {
        dispatch(sendForgotPwCodeListen(username))
    }

    return <div className='auth-inner forgot-pw-inner-container m-0 d-center full-page'>
        <Card
            className='d-flex align-items-center flex-column shadow-lg mt-2 signup-prev-inner forgot-pw-inner-container radius-20 auth-bg px-2 p-5 col-lg-4 col-sm-12'>
            <Col className='px-xl-2 mx-auto' sm='12' md='6' lg='8'>
                <CardTitle tag='h1' className='fw-bold mb-1 text-center f-Londrina w-100'>
                    <h1 className="sign-topic text-light f-Staatliches">Forgot password</h1>
                </CardTitle>
                <CardText className='mb-2 text-center f-courgette text-light text-medium'>Let's get you
                    started up</CardText>
            </Col>
            <Col lg={12} className="d-center flex-column" hidden={pwCodeSend}>
                <div className="w-100">
                    <Label
                        for="nic"
                        className="sign-labels f-shippori text-medium text-light mb-1">Username</Label>
                    <Input
                        disabled={pwCodeSend}
                        type="text"
                        name="username"
                        id="username"
                        placeHolder="Enter your username"
                        onChange={e => setUserName(e.target.value)}
                        value={username}
                    />
                </div>
                <button onClick={sendFPWCode} hidden={pwCodeSend} className="btn btn-danger mt-2">Send verification code</button>
            </Col>
            <Col lg={12} className="d-center flex-column mt-2" hidden={!pwCodeSend}>
                <div className="w-100">
                    <Label
                        for="code"
                        className="sign-labels f-shippori text-medium text-light mb-1">Send code</Label>
                    <Input
                        type="number"
                        name="code"
                        id="code"
                        placeHolder="Enter your code"
                        onChange={formik.handleChange}
                        value={formik.values.code}
                    />
                </div>
            </Col>
            <Col className="w-100 mt-2">
                <Form onSubmit={formik.handleSubmit}>
                    <Row className="mt-2" hidden={!pwCodeSend}>
                        <Col>
                            <Label
                                for="nic"
                                className="sign-labels f-shippori text-medium mb-1 text-light">Password <span
                                className="text-grey">(format:- Example@123)</span></Label>
                            <Input
                                type={passwordType}
                                name="password"
                                id="password"
                                placeHolder="Enter your password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <div className="d-flex justify-content-end w-100 align-items-end">
                                <div className="d-flex align-items-end mt-1">
                                    <Label htmlFor="password" className="text-grey">Show password</Label>
                                </div>
                                <div className='form-switch form-check-success ml-2'>
                                    <div>
                                        <Input
                                            onChange={(e) => {
                                                e.target.checked ? setPasswordType("text") : setPasswordType("password")
                                            }}
                                            type='switch' id='password' name='primary'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2" hidden={!pwCodeSend}>
                        <Col>
                            <Label
                                for="nic"
                                className="sign-labels f-shippori text-medium mb-1 text-light">
                                Re-enter password
                                <span
                                    className="text-grey">(format:- Example@123)</span>
                            </Label>
                            <Input
                                type={rePasswordType}
                                name="rePassword"
                                id="rePassword"
                                placeHolder="Re enter your password"
                                onChange={formik.handleChange}
                                value={formik.values.rePassword}
                            />
                            <div className="d-flex justify-content-end w-100 align-items-end">
                                <div className="d-flex align-items-end mt-1">
                                    <Label htmlFor="password" className="text-grey">Show password</Label>
                                </div>
                                <div className='form-switch form-check-success ml-2'>
                                    <div>
                                        <Input
                                            onChange={(e) => {
                                                e.target.checked ? setRePasswordType("text") : setRePasswordType("password")
                                            }}
                                            type='switch' id='password' name='primary'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {
                        signupLoad && <Col className="d-center mt-2">
                            <Spinner color="light"/>
                        </Col>
                    }
                    <Col className="d-center mt-4" hidden={!pwCodeSend}>
                        <button className="btn btn-primary">CREATE YOUR ACCOUNT</button>
                    </Col>
                    <Col className="d-flex justify-content-end mt-3">
                        <p
                            onClick={changeScreens}
                            className="clickable text-light f-courgette text-small">
                            BACK TO LOGIN
                        </p>
                    </Col>
                </Form>
            </Col>
        </Card>
    </div>
}

export default ForgotPasswordView
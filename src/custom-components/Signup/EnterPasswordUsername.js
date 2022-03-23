import {Card, CardText, CardTitle, Col, Form, Input, Label, Progress, Row, Spinner} from "reactstrap"
import {fireAlertMessage} from "../../utility/custom-util"
import {useFormik} from "formik"
import {setScreenIndex, signupListen} from "../../custom-views/Signup/actions"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {useEffect, useState} from "react"

const EnterPasswordUsername = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const {signupLoad, userRegDetails} = useSelector(state => state.signUpReducer)
    // eslint-disable-next-line no-unused-vars
    const [load, setLoad] = useState(false)

    //Use to cook the registration object. This will merge the userdetails and the user cred.
    const cookObject = (username, password) => {

        delete Object(userRegDetails).country

        return {
            ...userRegDetails,
            address:"katubedda bodima",
            // username,
            password
        }
    }

    const validate = (values) => {
        if (!values.username) {
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
            const {username, password} = values
            dispatch(signupListen(cookObject(username, password)))
        }
    }

    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            username: "sss",
            password: "",
            rePassword: ""
        },
        onSubmit: (values) => {
            if (!signupLoad) validate(values)
        }
    })

    useEffect(() => {
        formik.values.username = userRegDetails.email
        setLoad(true)
    }, [])

    const changeScreens = () => {
        history.push("/login")
    }

    const goToDetails = () => {
        dispatch(setScreenIndex(1))
    }

    return <div className='auth-inner signup-body m-0 d-center'>
        <Card
            className='d-flex align-items-center flex-column shadow-lg signup-prev-inner radius-20 auth-bg px-2 p-5 col-lg-4 col-sm-12'>
            <Col className='px-xl-2 mx-auto' sm='12' md='6' lg='8'>
                <CardTitle tag='h1' className='fw-bold mb-1 text-center f-Londrina w-100'>
                    <h1 className="sign-topic">LET'S FINISH YOUR ACCOUNT</h1>
                </CardTitle>
                <CardText className='mb-2 text-center f-courgette'><h4>Let's get you
                    started up</h4></CardText>
            </Col>
            <Col className="w-100 mt-2">
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col>
                            <Label
                                for="nic"
                                className="sign-labels f-shippori text-medium mb-1">Username</Label>
                            <Input
                                disabled
                                type="text"
                                name="username"
                                id="username"
                                placeHolder="Enter your username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Label
                                for="nic"
                                className="sign-labels f-shippori text-medium mb-1">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeHolder="Enter your password"
                                onChange={formik.handleChange}
                                value={formik.values.nic}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Label
                                for="nic"
                                className="sign-labels f-shippori text-medium mb-1">Re-enter password</Label>
                            <Input
                                type="password"
                                name="rePassword"
                                id="rePassword"
                                placeHolder="Re enter your password"
                                onChange={formik.handleChange}
                                value={formik.values.rePassword}
                            />
                        </Col>
                    </Row>
                    {
                        signupLoad && <Col className="d-center mt-2">
                            <Spinner color="light"/>
                        </Col>
                    }
                    <Col className="d-center mt-4">
                        <button className="btn btn-danger">CREATE YOUR ACCOUNT</button>
                    </Col>
                    <Col className="d-flex justify-content-between mt-3">
                        <p
                            onClick={changeScreens}
                            className="font-bold clickable text-danger">
                            BACK TO LOGIN
                        </p>

                        <p
                            onClick={goToDetails}
                            className="font-bold clickable text-warning">
                            BACK TO DETAILS
                        </p>
                    </Col>
                </Form>
            </Col>
        </Card>
    </div>
}

export default EnterPasswordUsername
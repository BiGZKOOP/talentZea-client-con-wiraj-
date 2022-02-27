import {CardText, CardTitle, Col, Form, Input, Label, Row} from "reactstrap"
import {fireAlertMessage} from "../../utility/custom-util"
import {useFormik} from "formik"

const EnterPasswordUsername = () => {

    const validate = (values) => {
        if (!values.username) {
            fireAlertMessage("username is required !!!")
            return
        }
        if (!values.password) {
            fireAlertMessage("password is required !!!")
        }
        if (!values.rePassword) {
            fireAlertMessage("password is required !!!")
        }
        if (values.password !== values.rePassword) {
            fireAlertMessage("passwords do not match !!!")
        }
    }

    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            rePassword: ""
        },
        onSubmit: (values) => {
            validate(values)
        }
    })

    return <div className='auth-inner m-0 d-center'>
        <Col
            className='d-flex align-items-center flex-column shadow-lg bg-transparent signup-inner radius-20 auth-bg px-2 p-5'
            lg='5' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='12' md='6' lg='8'>
                <CardTitle tag='h1' className='fw-bold mb-1 text-center f-Londrina'>
                    <h1 className="text-dark">LET'S FINISH YOUR ACCOUNT</h1>
                </CardTitle>
                <CardText className='mb-2 text-center f-courgette'><h4 className="text-dark">Let's get you
                    started up</h4></CardText>
            </Col>
            <Col className="w-100">
                <Form>
                    <Row>
                        <Col>
                            <Label
                                for="nic"
                                className="font-bold f-shippori text-medium mb-1">Username</Label>
                            <Input
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
                                className="font-bold f-shippori text-medium mb-1">Password</Label>
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
                                className="font-bold f-shippori text-medium mb-1">Re-enter password</Label>
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
                    <Col className="d-center mt-2">
                        <button className="btn btn-danger">CREATE YOUR ACCOUNT</button>
                    </Col>
                </Form>
            </Col>
        </Col>
    </div>
}

export default EnterPasswordUsername
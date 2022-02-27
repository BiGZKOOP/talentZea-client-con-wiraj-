import {CardText, CardTitle, Col, Form, Label, Input, Row} from "reactstrap"
import {fireAlertMessage} from "../../utility/custom-util"
import {useFormik} from "formik"
import {setScreenIndex} from "../../custom-views/Signup/actions"
import {useDispatch} from "react-redux"

const SignupCustomerData = () => {

    const dispatch = useDispatch()

    const validate = (values) => {
        if (!values.name) {
            fireAlertMessage("name is required !!!")
            return
        }
        if (!values.email) {
            fireAlertMessage("email is required !!!")
            return
        }
        if (!values.nic) {
            fireAlertMessage("nic is required !!!")
            return
        }
        if (!values.countryCode) {
            fireAlertMessage("Country code is required !!!")
            return
        }
        if (!values.country) {
            fireAlertMessage("country is required !!!")
            return
        }
        if (!values.phoneNumber) {
            fireAlertMessage("phone number is required !!!")
        }
        if (!values.dob) {
            fireAlertMessage("DOB is required !!!")
        }
    }

    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            nic: "",
            countryCode: "",
            country: "",
            phoneNumber: "",
            dob: ""
        },
        onSubmit: (values) => {
            validate(values)
        }
    })

    const changeScreens = () => {
        dispatch(setScreenIndex(2))
    }

    return <div className='auth-inner m-0 d-center'>
        <Col
            className='d-flex align-items-center flex-column shadow-lg bg-transparent signup-inner radius-20 auth-bg px-2 p-5'
            lg='10' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='12' md='6' lg='12'>
                <CardTitle tag='h1' className='fw-bold mb-1 text-center f-Londrina'>
                    <h1 className="text-dark">LET'S GET TO KNOW YOU</h1>
                </CardTitle>
                <CardText className='mb-2 text-center f-courgette'><h4 className="text-dark">Let's get you
                    started up</h4></CardText>
            </Col>
            <Col className="w-100">
                <Form>
                    <Col className="col-12 mb-3">
                        <Label
                            for="fullName"
                            className="font-bold f-shippori text-dark text-medium mb-1">Full Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeHolder="Enter your full name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </Col>
                    <div className="d-flex input-container">
                        <Col className="double-input mb-3">
                            <Label
                                for="email"
                                className="font-bold f-shippori text-dark text-medium mb-1">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeHolder="example@mail.com"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </Col>
                        <Col className="double-input mb-3">
                            <Label
                                for="nic"
                                className="font-bold f-shippori text-dark text-medium mb-1">NIC</Label>
                            <Input
                                type="text"
                                name="nic"
                                id="nic"
                                placeHolder="Enter your NIC"
                                onChange={formik.handleChange}
                                value={formik.values.nic}
                            />
                        </Col>
                    </div>
                    <div className="d-flex input-container">
                        <Col className="double-input mb-3">
                            <Label
                                for="email"
                                className="font-bold f-shippori text-dark text-medium mb-1">Country code</Label>
                            <Input
                                type="text"
                                name="countryCode"
                                id="countryCode"
                                placeHolder="example@mail.com"
                                onChange={formik.handleChange}
                                value={formik.values.countryCode}
                            />
                        </Col>
                        <Col className="double-input mb-3">
                            <Label
                                for="nic"
                                className="font-bold f-shippori text-dark text-medium mb-1">Country</Label>
                            <Input
                                type="text"
                                name="country"
                                id="country"
                                placeHolder="Enter your country"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                            />
                        </Col>
                    </div>
                    <div className="d-flex input-container">
                        <Col className="double-input mb-3">
                            <Label
                                for="email"
                                className="font-bold f-shippori text-dark text-medium mb-1">Phone number</Label>
                            <Input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeHolder="+94123456789"
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                            />
                        </Col>
                        <Col className="double-input mb-3">
                            <Label
                                for="nic"
                                className="font-bold f-shippori text-dark text-medium mb-1">DOB</Label>
                            <Input
                                type="text"
                                name="dob"
                                id="dob"
                                placeHolder="Enter your DOB"
                                onChange={formik.handleChange}
                                value={formik.values.dob}
                            />
                        </Col>
                    </div>
                    <div>
                        <Col className="d-center">
                            <button
                                onClick={changeScreens}
                                className="btn btn-primary">
                                LET'S GO AHEAD...
                            </button>
                        </Col>
                    </div>
                </Form>
            </Col>
        </Col>
    </div>
}

export default SignupCustomerData
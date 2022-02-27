import {CardText, CardTitle, Col, Form, Label, Input, Row} from "reactstrap"
import {fireAlertMessage} from "../../utility/custom-util"
import {useFormik} from "formik"
import {setScreenIndex} from "../../custom-views/Signup/actions"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const SignupCustomerData = () => {

    const dispatch = useDispatch()

    const {allCountries} = useSelector(state => state.signUpReducer)

    useEffect(() => {
        console.log(allCountries)
    }, [allCountries])

    const changeScreens = () => {
        dispatch(setScreenIndex(2))
    }

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
            return
        }
        if (!values.dob) {
            fireAlertMessage("DOB is required !!!")
            return
        }
        changeScreens()
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
            alert("submit data !!!")
        }
    })

    return <div className='auth-inner m-0 d-center'>
        <Col
            className='d-flex align-items-center flex-column shadow-lg bg-transparent signup-inner radius-20 auth-bg px-2 p-5'
            lg='8' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='12' md='6' lg='12'>
                <CardTitle tag='h1' className='fw-bold mb-1 text-center f-Londrina'>
                    <h1 className="text-light sign-topic">LET'S GET TO KNOW YOU</h1>
                </CardTitle>
                <CardText className='mb-2 text-center f-courgette'><h4 className="text-light topic">Let's get you
                    started up</h4></CardText>
            </Col>
            <Col className="w-100">
                <Form onSubmit={formik.handleSubmit}>
                    <Col className="col-12 mb-3">
                        <Label
                            for="fullName"
                            className="f-shippori text-light text-medium mb-1 sign-labels">Full Name</Label>
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
                                className="f-shippori text-light text-medium mb-1 sign-labels">Email</Label>
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
                                className="sign-labels f-shippori text-light text-medium mb-1">NIC</Label>
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
                                className="sign-labels f-shippori text-light text-medium mb-1">Country code</Label>
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
                                className="sign-labels f-shippori text-light text-medium mb-1">Country</Label>
                            <Input
                                type="select"
                                name="country"
                                id="country"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                                onBlur={formik.handleBlur}
                                className="sign-up-custom-input"
                            >
                                <option style={{fontSize: "12px"}} value="">
                                    Select sector
                                </option>
                                {allCountries &&
                                allCountries.map((e, index) => {
                                    return (
                                        <option
                                            key={index}
                                            style={{fontSize: "12px"}}
                                            value={e}
                                        >
                                            {e}
                                        </option>
                                    )
                                })}
                            </Input>
                        </Col>
                    </div>
                    <div className="d-flex input-container phone-dob-row">
                        <Col className="double-input mb-3">
                            <Label
                                for="nic"
                                className="sign-labels f-shippori text-light text-medium mb-1">DOB</Label>
                            <Input
                                type="text"
                                name="dob"
                                id="dob"
                                placeHolder="Enter your DOB"
                                onChange={formik.handleChange}
                                value={formik.values.dob}
                            />
                        </Col>
                        <Col className="double-input mb-3">
                            <Label
                                for="email"
                                className="sign-labels f-shippori text-light text-medium mb-1">Phone number</Label>
                            <PhoneInput
                                country={"sg"}
                                value={formik.values.phoneNumber}
                                onChange={(phone) => (formik.values.phoneNumber = phone)}
                            />
                        </Col>
                    </div>
                    <div>
                        <Col className="d-center">
                            <button
                                type="submit"
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
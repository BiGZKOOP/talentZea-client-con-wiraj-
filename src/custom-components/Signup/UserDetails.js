import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {fireAlertMessage} from "../../utility/custom-util"
import {useFormik} from "formik"
import {Card, Col, Form, Input, Label} from "reactstrap"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import {setScreenIndex, userDetailsAddListen} from "../../custom-views/Signup/actions"

const UserDetails = () => {

    const {allCountries, userRegDetails} = useSelector(state => state.signUpReducer)
    // eslint-disable-next-line no-unused-vars
    const [load, setLoad] = useState(false)

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
        if (!values.nicNumber) {
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
        }
        // eslint-disable-next-line no-use-before-define
        dispatch(userDetailsAddListen(formik.values))
        dispatch(setScreenIndex(2))
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            nicNumber: "",
            countryCode: "",
            country: "",
            phoneNumber: "",
            dob: ""
        },
        onSubmit: (values) => {
            validate(values)
        }
    })

    useEffect(() => {
        if (userRegDetails.length !== 0) {
            setLoad(true)
            const {
                country,
                name,
                email,
                nicNumber,
                countryCode,
                phoneNumber,
                dob
            } = userRegDetails
            formik.values.country = country
            formik.values.name = name
            formik.values.email = email
            formik.values.nicNumber = nicNumber
            formik.values.countryCode = countryCode
            formik.values.phoneNumber = phoneNumber
            formik.values.dob = dob
        }
    }, [allCountries, userRegDetails])

    return <div className="auth-inner signup-body m-0 d-center">
        <Card lg={6} className="shadow-lg radius-20 p-2 signup-inner-container">
            <h1 className="text-center f-Londrina font-large-1 mb-3 text-light font-large-2 f-Staatliches">We like to know about you...</h1>
            <Form onSubmit={formik.handleSubmit}>
                <Col className="col-12 mb-3">
                    <Label
                        for="fullName"
                        className="f-shippori text-medium mb-1 sign-labels text-light">Full Name</Label>
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
                            className="f-shippori text-medium mb-1 sign-labels text-light">Email</Label>
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
                            for="nicNumber"
                            className="sign-labels f-shippori text-medium mb-1 text-light">NIC</Label>
                        <Input
                            type="text"
                            name="nicNumber"
                            id="nicNumber"
                            placeHolder="Enter your NIC"
                            onChange={formik.handleChange}
                            value={formik.values.nicNumber}
                        />
                    </Col>
                </div>
                <div className="d-flex input-container">
                    <Col className="double-input mb-3">
                        <Label
                            for="email"
                            className="sign-labels f-shippori text-medium mb-1 text-light">Country code</Label>
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
                            for="country"
                            className="sign-labels f-shippori text-medium mb-1 text-light">Country</Label>
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
                            for="dob"
                            className="sign-labels f-shippori text-medium mb-1 text-light">DOB</Label>
                        <Input
                            type="date"
                            name="dob"
                            id="dob"
                            placeHolder="Enter your DOB"
                            onChange={formik.handleChange}
                            value={formik.values.dob}
                        />
                    </Col>
                    <Col className="double-input mb-3 ml-2">
                        <Label
                            for="email"
                            className="sign-labels f-shippori text-medium mb-1 text-light">Phone number</Label>
                        <PhoneInput
                            country={'us'}
                            value={formik.values.phoneNumber}
                            onChange={(phone) => (formik.values.phoneNumber = phone)}
                        />
                    </Col>
                </div>
                <div className="d-flex justify-content-end">
                    <input type="submit" className="btn btn-gradient-primary" value="Next"/>
                </div>
            </Form>
        </Card>
    </div>
}
export default UserDetails
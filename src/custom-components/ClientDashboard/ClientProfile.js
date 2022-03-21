import {Card, Col, Form, Input, Label, Spinner} from "reactstrap"
import PhoneInput from "react-phone-input-2"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {useFormik} from "formik"
import {profileUpdateListen} from "../../custom-views/ClientProfile/actions"

const ClientProfile = () => {

    ///Use selectors
    const {allCountries} = useSelector(state => state.signUpReducer)
    const {user} = useSelector(state => state.loginReducer)
    const {signupLoad} = useSelector(state => state.signUpReducer)

    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const [load, setLoad] = useState(true)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            nicNumber: "",
            countryCode: "",
            country: "",
            phoneNumber: "",
            dob: ""
        },
        onSubmit: (values) => {
            delete Object(values).country
            dispatch(profileUpdateListen({
                ...values
            }))
        }
    })

    const populateFormik = () => {
        formik.values.name = user.name
        formik.values.email = user.email
        formik.values.address = user.address
        formik.values.nicNumber = user.nicNumber
        formik.values.countryCode = user.countryCode
        formik.values.country = user.country
        formik.values.phoneNumber = user.phoneNumber
        formik.values.dob = user.dob
    }

    useEffect(() => {
        populateFormik()
        console.log(user)
        setLoad(false)
    }, [])

    return <Card className="p-2">
        <Form onSubmit={formik.handleSubmit}>
            <Col className="col-12 mb-3">
                <Label
                    for="fullName"
                    className="f-shippori text-medium mb-1 sign-labels">Full Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeHolder="Enter your full name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </Col>
            <Col className="col-12 mb-3">
                <Label
                    for="address"
                    className="f-shippori text-medium mb-1 sign-labels">Full Name</Label>
                <Input
                    type="textarea"
                    name="address"
                    id="address"
                    placeHolder="Enter your full name"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
            </Col>
            <div className="d-flex input-container">
                <Col className="double-input mb-3">
                    <Label
                        for="email"
                        className="f-shippori text-medium mb-1 sign-labels">Email</Label>
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
                        className="sign-labels f-shippori text-medium mb-1">NIC</Label>
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
                        className="sign-labels f-shippori text-medium mb-1">Country code</Label>
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
                        className="sign-labels f-shippori text-medium mb-1">Country</Label>
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
                        className="sign-labels f-shippori text-medium mb-1">DOB</Label>
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
                        className="sign-labels f-shippori text-medium mb-1">Phone number</Label>
                    <PhoneInput
                        country={'us'}
                        value={formik.values.phoneNumber}
                        onChange={(phone) => (formik.values.phoneNumber = phone)}
                    />
                </Col>
            </div>
            <div className="d-flex align-items-center justify-content-end">
                <button type="submit" className="btn text-medium d-center btn-primary">
                    Update your profile
                    {signupLoad && <Spinner className="ml-2" />}
                </button>
            </div>
        </Form>
    </Card>
}

export default ClientProfile
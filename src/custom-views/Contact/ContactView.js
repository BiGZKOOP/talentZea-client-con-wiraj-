import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import MainNav from "../../custom-components/MainNav/MainNav"
import "../../assets/css/contact.css"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import {Mail, PhoneCall} from "react-feather"
import AudioBtn from "../../custom-components/audioControl/AudioBtn"
import {useFormik} from "formik"
import {fireAlertError} from "../../utility/custom-util"
import Footer from "../../@core/layouts/components/footer"
import {useEffect} from "react"
import {scrollToTopUTIL} from "../../utility/Utils"

const ContactView = () => {
    
    useEffect(() => {
        scrollToTopUTIL()
    }, [])

    const validate = (values) => {

        if (!values.email) {
            fireAlertError("Oops", "You have to enter your email address !")
            return
        }
        if (!values.name) {
            fireAlertError("Oops", "You have to enter your name !")
            return
        }
        if (!values.topic) {
            fireAlertError("Oops", "You have to enter a topic !")
            return
        }
        if (!values.message) {
            fireAlertError("Oops", "You have to write your message !")
            // return
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            topic: "",
            message: ""
        },
        onSubmit: values => {
            validate(values)
        }
    })

    return <Row className="">
        <div className="p-1 mb-5 mb-lg-0 header-purple-grad">
            <MainNav index={3}/>
        </div>
        <div className="text-center f-Staatliches mt-3">
            <h1 className="font-large-2">Get in touch with us</h1>
            <h4>Your <span className="text-primary">ideas</span> truly matters for us !</h4>
        </div>
        <Col className="mt-4">
            <div className="mt-2 mb-4">
                <div className="contact-card w-100">
                    <div className="p-2 contact-card-left">
                        <div>
                            <h3 className="f-shippori">Contact information</h3>
                            <h5 className="f-shippori mt-2">Feel free to contact us for any question you have.</h5>
                        </div>
                        <div className="mt-4 floating-img">
                            <FriendlySvg/>
                        </div>
                        <div className="mt-4">
                            <Card className="p-2 scalable">
                                <div className="d-flex align-items-baseline">
                                    <div className="w-25">
                                        <PhoneCall size={25}/>
                                    </div>
                                    <div className="w-75">
                                        <h4>+9411 112 34 56</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-2 scalable">
                                <div className="d-flex align-items-baseline">
                                    <div className="w-25">
                                        <Mail size={25}/>
                                    </div>
                                    <div className="w-75">
                                        <h4>123@example.com</h4>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Card className="contact-card-right mr-2">
                        <CardHeader className="mb-2 bg-primary">
                            <li className="f-Londrina text-large text-light">We would love to hear from you !</li>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={formik.handleSubmit}>
                                <div>
                                    <Label for="email" className="text-medium">Your email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        placeholder="123@example.com" className="bg-light-grey"/>
                                </div>
                                <div className="mt-3">
                                    <Label for="name" className="text-medium">Your name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        className="bg-light-grey" placeholder="John Doe"/>
                                </div>
                                <div className="mt-3">
                                    <Label for="topic" className="text-medium">Mail topic</Label>
                                    <Input
                                        id="topic"
                                        name="topic"
                                        onChange={formik.handleChange}
                                        value={formik.values.topic}
                                        placeholder="I would like to know about..." className="bg-light-grey"/>
                                </div>
                                <div className="mt-3">
                                    <Label className="text-medium">Your message</Label>
                                    <Input
                                        id="message"
                                        name="message"
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                        type="textarea" className="bg-light-grey"
                                           placeholder="Hi user ! we would really love to hear what you have to say."/>
                                </div>
                                <div className="mt-3 d-flex justify-content-end">
                                    <div className="send-btn">
                                        <Input type="submit" className="btn btn-primary pt-2 pb-2" value="SEND"/>
                                    </div>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Col>
        <AudioBtn/>
        <Footer />
    </Row>
}

export default ContactView
import {Card, CardBody, CardHeader, Col, Input, Label, Row} from "reactstrap"
import MainNav from "../../custom-components/MainNav/MainNav"
import "../../assets/css/contact.css"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import {Mail, PhoneCall} from "react-feather"
import AudioBtn from "../../custom-components/audioControl/AudioBtn"

const ContactView = () => {

    return <Row className="">
        <div className="p-1 mb-5  mb-lg-0">
            <MainNav index={3}/>
        </div>
        <div className="text-center f-Londrina">
            <h1 className="font-large-2">Get in touch with us</h1>
        </div>
        <Col className="mt-4">
            <div className="mt-2 d-flex justify-content-between contact-card mb-4">
                <div className="d-flex w-100">
                    <div className="w-25 p-2 contact-card-left">
                        <div>
                            <h3 className="f-shippori">Contact infomation</h3>
                            <h5 className="f-shippori mt-2">Feel free to contact us for any question you have.</h5>
                        </div>
                        <div className="mt-4 floating-img">
                            <FriendlySvg />
                        </div>
                        <div className="mt-4">
                            <Card className="p-2 scalable">
                                <div className="d-flex align-items-baseline">
                                    <div className="w-25">
                                        <PhoneCall size={30}/>
                                    </div>
                                    <div className="w-75">
                                        <h4>+9411 112 34 56</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-2 scalable">
                                <div className="d-flex align-items-baseline">
                                    <div className="w-25">
                                        <Mail size={30}/>
                                    </div>
                                    <div className="w-75">
                                        <h4>123@example.com</h4>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Card className="w-75 ml-4 ml-sm-0">
                        <CardHeader className="mb-2 bg-primary">
                            <li className="f-Londrina font-large-1 text-light">We would love to hear from you !</li>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <Label className="text-medium">Your email</Label>
                                <Input placeholder="123@example.com"/>
                            </div>
                            <div className="mt-3">
                                <Label className="text-medium">Your name</Label>
                                <Input className="" placeholder="John Doe"/>
                            </div>
                            <div className="mt-3">
                                <Label className="text-medium">Mail topic</Label>
                                <Input placeholder="I would like to know about..."/>
                            </div>
                            <div className="mt-3">
                                <Label className="text-medium">Your email</Label>
                                <Input type="textarea" placeholder="Hi user ! we would really love to hear what you have to say."/>
                            </div>
                            <div className="mt-3 d-flex justify-content-end">
                                <div className="w-25">
                                    <Input type="submit" className="btn btn-primary pt-2 pb-2" value="SEND"/>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Col>
        <AudioBtn />
    </Row>
}

export default ContactView
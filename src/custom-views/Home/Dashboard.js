import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap"
import FreeLancerSvg from "../../assets/custom_images/svg/FreeLancer.svg"
import "../../assets/css/dashboard.css"
import AirpodsSvg from "../../assets/custom_images/svg/Airpods.svg"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import SkillSvg from "../../assets/custom_images/svg/Skill.svg"
import Contract from "../../assets/custom_images/svg/Contract"
import ThinkingSvg from "../../assets/custom_images/svg/Thinking.svg"
import HandcraftsSvg from "../../assets/custom_images/svg/Handcrafts.svg"
import Faq from "../../views/pages/faq"
import MainNav from "../../custom-components/MainNav/MainNav"
import {useHistory} from "react-router-dom"

const Dashboard = () => {

    const history = useHistory()

    return (
        <Row>
            <div className="p-1 mb-5  mb-lg-0">
                <MainNav index={1}/>
            </div>
            <Row className="mt-lg-5">
                <Col className="d-center" lg={6} sm={12}>
                    <FreeLancerSvg/>
                </Col>
                <Col lg={6} sm={12} className="mt-5 mt-lg-0">
                    <h1 className="f-Londrina font-large-2 text-sm-c-center">We create memories here</h1>
                    <p className="text-medium f-shippori line-h-3 text-sm-c-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <Col className="d-flex d-center-sm">
                        <button className="btn btn-outline-primary mr-3 text-medium">
                            See our work
                        </button>
                        <button className="btn btn-danger mt-lg-0 text-medium">
                            Let's do a project
                        </button>
                    </Col>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col className="d-center">
                    <AirpodsSvg/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="f-Londrina font-large-2 text-center">Why <span className="text-primary">Talent Zea</span> ?</h1>
                    <p className="text-small f-shippori line-h-3 text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting,
                    </p>
                </Col>
                <Row className="mt-5 d-flex justify-content-around w-100 ml-1">
                    <Card className="dash-card scalable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina">#CREATIVE</h2>
                        </div>
                        <CardBody>
                            <CreativeSvg/>
                        </CardBody>
                        <CardFooter>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className="dash-card scalable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina">#FRIENDLY</h2>
                        </div>
                        <CardBody>
                            <FriendlySvg/>
                        </CardBody>
                        <CardFooter>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className="dash-card scalable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina">#SKILLFUL</h2>
                        </div>
                        <CardBody>
                            <SkillSvg/>
                        </CardBody>
                        <CardFooter>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className="dash-card scalable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina">#24/7 AVAILABLE</h2>
                        </div>
                        <CardBody>
                            <Contract/>
                        </CardBody>
                        <CardFooter>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </CardFooter>
                    </Card>
                </Row>
            </Row>
            <Row className="d-flex flex-column d-center mt-5">
                <Col className="d-center"  lg={3} sm={10}>
                    <ThinkingSvg/>
                </Col>
                <Col className="mt-3">
                    <h2 className="text-center f-indie-flower">"COLORFUL IDEAS CAME FROM PEACEFUL MINDS"</h2>
                    <h4 className="text-center f-indie-flower">-Talent Zea-</h4>
                </Col>
            </Row>
            <Col className="mt-5">
                <Col className="text-center">
                    <h1 className="f-Londrina font-large-2">OUR SERVICES</h1>
                </Col>
                <Row className="p-2 mt-3 radius-10  d-center flex-wrap d-flex">
                    <Card className="dash-card m-2 scalable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina">GRAPHICS DESIGNING</h2>
                        </div>
                        <CardFooter>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </CardFooter>
                        <CardFooter className="d-center">
                            <button
                                onClick={() => history.push("/service/:id")}
                                className="btn btn-outline-foursquare">
                                SHOW ME...
                            </button>
                        </CardFooter>
                    </Card>
                    <Card className="dash-card m-2 scalable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina">WEB DEVELOPING</h2>
                        </div>
                        <CardFooter>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </CardFooter>
                        <CardFooter className="d-center">
                            <button className="btn btn-outline-foursquare">
                                SHOW ME...
                            </button>
                        </CardFooter>
                    </Card>
                    <Card className="dash-card m-2 scalable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina">MOBILE APP DEVELOPING</h2>
                        </div>
                        <CardFooter>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </CardFooter>
                        <CardFooter className="d-center">
                            <button className="btn btn-outline-foursquare">
                                SHOW ME...
                            </button>
                        </CardFooter>
                    </Card>
                    <Card className="dash-card m-2 bg-instagram text-light rotatable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina text-light">COMING MORE...</h2>
                        </div>
                        <CardFooter>
                            <p>
                                More services are on the way...!!!
                            </p>
                        </CardFooter>
                    </Card>
                </Row>
            </Col>
            <div className="mt-5">
                <Col className="d-center">
                    <HandcraftsSvg />
                </Col>
                <Col  className="mt-5 mb-5">
                    <h1  className="text-center f-Londrina font-large-2">What do you need to know ?</h1>
                </Col>
                <Col className="mt-3 text-center">
                    <Faq />
                </Col>
            </div>
        </Row>
    )
}

export default Dashboard
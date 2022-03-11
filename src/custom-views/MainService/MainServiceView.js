import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardFooter, Col, Row} from "reactstrap"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import ContactSVG from "../../assets/custom_images/svg/ContactSVG"

const MainServiceView = () => {
    
    return <Row>
        <div className="p-1 mb-5  mb-lg-0">
            <MainNav index={2}/>
        </div>
        <div className="mt-4 mb-5 d-center flex-column">
            <div className="main-img">
                <CreativeSvg/>
            </div>
            <h1 className="text-center mt-4 f-Londrina text-primary topic-header">GRAPHICS DESIGNING</h1>
            <h2 className="f-indie-flower">We create memories here !</h2>
        </div>
        <div className="mt-5">
            <p className="f-Londrina text-topic text-center">What we do here ?</p>
        </div>
        <Col className="mt-1 d-flex">
            <Row className="p-2 radius-10  d-center flex-wrap d-flex">
                <Card className="dash-card m-2 scalable">
                    <div className="pt-2">
                        <h2 className="text-center f-Londrina">LOGO DESIGNING</h2>
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
                        <h2 className="text-center f-Londrina">COVER DESIGNING</h2>
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
                        <h2 className="text-center f-Londrina">MOCKUP DESIGNING</h2>
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
                        <h2 className="text-center f-Londrina">MOCKUP DESIGNING</h2>
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
                        <h2 className="text-center f-Londrina">MOCKUP DESIGNING</h2>
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
        <Row className="mt-5">
            <div className="mt-5">
                <p className="f-Londrina text-topic text-center">Some of our works...</p>
            </div>
            <div>
                <OurWorkMainService />
            </div>
        </Row>
        <Row className=" d-center mt-5 mb-5">
            <div className="d-center main-img mb-2">
                <ContactSVG />
            </div>
            <div className="mb-3">
                <h1 className="text-center f-indie-flower text-contact">Feel free to contact us for any question you have !</h1>
            </div>
            <div className="d-center">
                <button className="btn btn-foursquare">Contact Us</button>
            </div>
        </Row>
    </Row>
}

export default MainServiceView
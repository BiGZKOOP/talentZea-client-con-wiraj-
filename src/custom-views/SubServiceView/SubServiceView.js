import MainNav from "../../custom-components/MainNav/MainNav"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import {Card, CardFooter, Col, Row} from "reactstrap"
import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import ContactSVG from "../../assets/custom_images/svg/ContactSVG"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
import SubServicePricing from "../../custom-components/SubServices/SubServicePricing"
import {useHistory} from "react-router-dom"
import SubServiceWelcomeSVG from "../../assets/custom_images/svg/SubServiceWelcomeSVG"

const SubServiceView = () => {

    const history = useHistory()

    return <Row>
        <div className="p-1 mb-5  mb-lg-0">
            <MainNav index={2}/>
        </div>
        <div className="mt-4 mb-5 d-center flex-column">
            <div className="main-img floating-img">
                <SubServiceWelcomeSVG />
            </div>
            <h1 className="text-center mt-4 f-Londrina text-primary topic-header">LOGO DESIGNING</h1>
            <h2 className="f-indie-flower">We create memories here !</h2>
            <div className="d-flex">
                <button className="btn btn-danger text-medium mt-2 mr-2">PLACE ORDER</button>
                <button
                    onClick={() => history.goBack()}
                    className="btn btn-outline-primary text-medium mt-2">BACK TO SERVICES</button>
            </div>
        </div>
        <Row className="mt-5 d-center">
            <div className="mt-5">
                <p className="f-Londrina text-topic text-center">Some of our works...</p>
            </div>
            <div>
                <OurWorkMainService />
            </div>
        </Row>
        <SubServicePricing />
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

export default SubServiceView
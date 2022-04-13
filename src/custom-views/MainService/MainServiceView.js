import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardFooter, Col, Row, Spinner} from "reactstrap"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import ContactSVG from "../../assets/custom_images/svg/ContactSVG"
import {useHistory} from "react-router-dom"
import AudioBtn from "../../custom-components/audioControl/AudioBtn"
import {useDispatch, useSelector} from "react-redux"
import SuccessOrderSVG from "../../assets/custom_images/svg/SuccessOrderSVG"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import {useEffect} from "react"
import {getMainServiceByIDListen} from "./actions"
import Footer from "../../@core/layouts/components/footer"
import ContactComp from "../../custom-components/contact-comp"
import ServiceCookLoader from "../../custom-components/loaders/ServiceCookLoader"

const MainServiceView = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const pathname = window.location.pathname

    const id = pathname.split("/service/")[1]

    const {fairyAudio} = useSelector(state => state.audioReducer)
    // eslint-disable-next-line no-unused-vars
    const {singleSubService, subServiceLoad, singleSubLoad} = useSelector(state => state.mainServiceReducer)

    const transitionAudio = () => {
        fairyAudio.play()
        fairyAudio.volume = 0.4
    }

    useEffect(() => {
        console.log(singleSubService)
        dispatch(getMainServiceByIDListen(id))
    }, [])


    const getImageArray = () => {

        return [singleSubService?.requestMainService?.image?.image1, singleSubService?.requestMainService?.image?.image2, singleSubService?.requestMainService?.image?.image3]
    }


    if (singleSubLoad) return <ServiceCookLoader/>
    else {
        return <Row>
            <div className="p-1 mb-5 mb-lg-0 w-100 sticky-top-custom">
                <MainNav index={4}/>
            </div>
            <div className="mt-4 mb-5 d-center flex-column">
                <div className="main-img floating-img">
                    <CreativeSvg/>
                </div>
                <h1 className="text-center mt-4 f-Londrina text-primary topic-header">{
                    singleSubService?.requestMainService?.mainTopic
                }</h1>
                <h2 className="f-indie-flower">We create memories here !</h2>
            </div>
            <Row className="d-center mt-5 mb-5">
                <h1 className="text-center mb-3 f-Londrina">What we provide...</h1>
                <Row className="w-50 ">
                    <p className="text-medium lead text-center">"{singleSubService?.requestMainService?.mainTopicDescription}"</p>
                </Row>
            </Row>
            <Col className="mt-5">
                <Col className="text-center">
                    <h1 className="f-Londrina font-large-2">OUR SERVICES</h1>
                </Col>
                <Row className="p-2 mt-3 radius-10  d-center flex-wrap d-flex">
                    {
                        singleSubService?.subMainService?.map((e, index) => {
                            return <Card key={index} className="dash-card m-2 scalable bg-semi-dark">
                                <div className="pt-2">
                                    <h2 className="text-center f-Londrina">{e?.mainTopic}</h2>
                                </div>
                                <CardFooter>
                                    <p>
                                        {e?.description}
                                    </p>
                                </CardFooter>
                                <CardFooter className="d-center">
                                    <button
                                        onClick={() => {
                                            transitionAudio()
                                            history.push(`/sub-service/${e._id}`)
                                        }}
                                        className="btn btn-outline-foursquare">
                                        SHOW ME...
                                    </button>
                                </CardFooter>
                            </Card>
                        })
                    }
                    <Card className="dash-card m-2 bg-instagram text-light rotatable bg-black">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina text-light ">COMING MORE...</h2>
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
                    <OurWorkMainService images={getImageArray()}/>
                </div>
            </Row>
            <ContactComp/>
            <AudioBtn/>
            <Footer/>
        </Row>
    }
}

export default MainServiceView
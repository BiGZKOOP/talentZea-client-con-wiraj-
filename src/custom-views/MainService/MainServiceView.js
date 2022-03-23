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
import {getMainServicesListen} from "./actions"

const MainServiceView = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const pathname = window.location.pathname

    const id = pathname.split("/service/")[1]

    const {fairyAudio} = useSelector(state => state.audioReducer)
    // eslint-disable-next-line no-unused-vars
    const {subServices, subServiceLoad} = useSelector(state => state.mainServiceReducer)

    const transitionAudio = () => {
        fairyAudio.play()
        fairyAudio.volume = 0.4
    }

    useEffect(() => {
        dispatch(getMainServicesListen(id))
        console.log(subServices)
    }, [])


    return <Row>
        <div className="p-1 mb-5 mb-lg-0 w-100 position-sticky">
            <MainNav index={2}/>
        </div>
        <div className="mt-4 mb-5 d-center flex-column">
            <div className="main-img floating-img">
                <CreativeSvg/>
            </div>
            <h1 className="text-center mt-4 f-Londrina text-primary topic-header">{
                subServices.length > 0 ? subServices[0].mainService.mainTopic : "...."
            }</h1>
            <h2 className="f-indie-flower">We create memories here !</h2>
        </div>
        <Col className="mt-5">
            <Col className="text-center">
                <h1 className="f-Londrina font-large-2">OUR SERVICES</h1>
            </Col>
            <Row className="p-2 mt-3 radius-10  d-center flex-wrap d-flex">
                {
                    !subServiceLoad && <div className="d-center flex-column animate__animated animate__bounce">
                        <Spinner className="text-primary mb-2"/>
                        <h1 className="text-primary">Loading...</h1>
                    </div>
                }
                {
                    subServiceLoad && subServices?.map(e => {
                        return <Card className="dash-card m-2 scalable bg-semi-dark">
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
                                        history.push(`/service/${e?._id}`)
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
                <OurWorkMainService/>
            </div>
        </Row>
        <Row className=" d-center mt-5 mb-5">
            <div className="d-center main-img mb-2 floating-img">
                <FriendlySvg/>
            </div>
            <div className="mb-2 mt-1">
                <h1 className="text-center f-Londrina text-contact">Feel free to contact us for any question you
                    have !</h1>
            </div>
            <div className="d-center">
                <button className="btn btn-foursquare">Contact Us</button>
            </div>
        </Row>
        <AudioBtn/>
    </Row>
}

export default MainServiceView
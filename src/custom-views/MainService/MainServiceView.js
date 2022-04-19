import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardBody, CardFooter, Col, Row, Spinner} from "reactstrap"
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
            <Card className="ml-2 mt-4 p-1">
                <h1 className="font-bold f-Londrina font-large-2 text-primary">{singleSubService?.requestMainService?.mainTopic}</h1>
                <h5 className="lead">We create memories here</h5>
            </Card>
            <Col className="mt-5">
                <Col className="text-center">
                    <h1 className="f-Londrina font-large-1">OUR SERVICES</h1>
                </Col>
                <Row className="p-2 mt-3 radius-10 d-center flex-wrap d-flex">
                    <p>Services available {singleSubService?.subMainService?.length}</p>
                    {
                        singleSubService?.subMainService?.length === 0 && <div className="d-center p-4 dashed-border">
                            <h1>No Services yet !!!</h1>
                        </div>
                    }
                    {
                        singleSubService?.subMainService?.map((e, index) => {
                            return <Card
                                onClick={() => {
                                    transitionAudio()
                                    history.push(`/sub-service/${e._id}`)
                                }}
                                key={index} className="dash-card-v m-2 scalable bg-semi-dark m-0 p-0">
                                <CardBody className="m-0 p-0">
                                    <div className="m-0 p-0">
                                        <OurWorkMainService count={1} images={getImageArray()}/>
                                    </div>
                                    <div className="p-1 pb-0 pt-1">
                                        <h5 className="font-monospace">{e?.mainTopic}</h5>
                                    </div>
                                    <div className="p-1">
                                        <p className="font-monospace">We provide you the best designs ever.</p>
                                    </div>
                                </CardBody>
                                <CardFooter className="p-1 pb-0 d-flex justify-content-end">
                                    <p className="text-small">starting at
                                        <button className="btn btn-primary ml-1">$ 120</button>
                                    </p>
                                </CardFooter>
                            </Card>
                        })
                    }
                    {/*<Card className="dash-card m-2 bg-instagram text-light rotatable bg-black">*/}
                    {/*    <div className="pt-2">*/}
                    {/*        <h2 className="text-center f-Londrina text-light ">COMING MORE...</h2>*/}
                    {/*    </div>*/}
                    {/*    <CardFooter>*/}
                    {/*        <p>*/}
                    {/*            More services are on the way...!!!*/}
                    {/*        </p>*/}
                    {/*    </CardFooter>*/}
                    {/*</Card>*/}
                </Row>
            </Col>
            <ContactComp/>
            <AudioBtn/>
            <Footer/>
        </Row>
    }
}

export default MainServiceView
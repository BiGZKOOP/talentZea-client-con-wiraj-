import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardBody, CardFooter, Col, Input, Label, Row, Spinner} from "reactstrap"
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
import MainServiceTabs from "../../custom-components/MainService/MainServiceTabs"

const MainServiceView = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const pathname = window.location.pathname

    const id = pathname.split("/service/")[1]

    const {fairyAudio} = useSelector(state => state.audioReducer)
    // eslint-disable-next-line no-unused-vars
    const {singleSubService, subServiceLoad, singleSubLoad} = useSelector(state => state.mainServiceReducer)
    // eslint-disable-next-line no-unused-vars
    const {mainServices, mainServicesLoad} = useSelector(state => state.loginReducer)

    const transitionAudio = () => {
        fairyAudio.play()
        fairyAudio.volume = 0.4
    }

    useEffect(() => {
        console.log(singleSubService)
        dispatch(getMainServiceByIDListen(id))
    }, [])


    const getImageArray = (e) => {
        return [e.image?.image1, e?.image?.image2, e?.image?.image3]
    }


    if (singleSubLoad) return <ServiceCookLoader/>
    else {
        return <Row>
            <div className="p-1 mb-lg-0 w-100 ml-1 position-sticky z-index-1000 main-service-back">
                <MainNav index={4}/>
            </div>
            <div className="ml-2 mt-4 p-1 d-flex justify-content-between flex-column-sm">
                <div>
                    <h1 className="font-bold f-Staatliches font-large-2 text-black-c">{singleSubService?.requestMainService?.mainTopic}</h1>
                    <h5 className="lead">We create memories here</h5>
                </div>
                <div className="d-flex flex-column-sm">
                    <div className="d-flex align-items-end mr-5">
                        <Input placeholder="search service"/>
                        <button className="btn btn-purple ml-1">Search</button>
                    </div>
                </div>
            </div>
            <hr/>
            <Col className="mt-5">
                <Col className="text-center f-Staatliches">
                    <h4 className="text-purple">We provide you the best !</h4>
                    <h1 className="f-Staatliches font-large-2">{singleSubService?.requestMainService?.mainTopic} services</h1>
                    <p className="">(Services available {singleSubService?.subMainService?.length})</p>
                </Col>
                <Row className="p-2 mt-3 radius-10 d-center flex-wrap d-flex">
                    {
                        singleSubService?.subMainService?.length === 0 && <div className="d-center p-4 dashed-border">
                            <h1 className="animate__animated animate__bounce text-danger f-Londrina">No Services yet !!!</h1>
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
                                        <OurWorkMainService count={1} images={getImageArray(e)}/>
                                    </div>
                                    <div className="p-1 pb-0 pt-1">
                                        <h3 className="f-Staatliches">{e?.mainTopic}</h3>
                                    </div>
                                    <div className="p-1">
                                        <p className="f-shippori">We provide you the best designs ever.</p>
                                    </div>
                                </CardBody>
                                <CardFooter className="p-1 pb-0 d-flex justify-content-end">
                                    <p className="text-small text-black-c f-shippori">starting at
                                        <button className="btn btn-purple ml-1">$ 120</button>
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
                <hr/>
            </Col>
            <Row className="ml-2 mt-2">
                {/*<h1>Explore other services</h1>*/}
                {/*<div className="mt-1 d-flex flex-wrap">*/}
                {/*    {*/}
                {/*        mainServices.map((e, index) => {*/}
                {/*            return <MainServiceTabs key={index} id={e?._id} topic={e?.mainTopic}/>*/}
                {/*        })*/}
                {/*    }*/}
                {/*</div>*/}
            </Row>
            <ContactComp/>
            <AudioBtn/>
            <Footer/>
        </Row>
    }
}

export default MainServiceView
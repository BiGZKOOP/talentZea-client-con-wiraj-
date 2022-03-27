import {
    Card,
    CardBody,
    CardFooter,
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    Row, Spinner, UncontrolledDropdown
} from "reactstrap"
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
import AudioBtn from "../../custom-components/audioControl/AudioBtn"
import {Facebook, Instagram, Link, Mail, Music, Phone, Users} from "react-feather"
import {useEffect, useState} from "react"
import Headset from "../../assets/custom_images/svg/Headset"
import {useDispatch, useSelector} from "react-redux"
import {audioHandle, audioModelLoad} from "../../custom-components/audioControl/action"
import logo from "../../assets/custom_images/logo.png"
import Footer from "../../@core/layouts/components/footer"
import {useParams} from "react-router"
import queryString from "query-string"
import Cookies from 'universal-cookie'

const Dashboard = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [logoStyle, setLogoStyle] = useState("fadein-anim delay-8")
    // eslint-disable-next-line no-unused-vars
    const {welcomeAudio, loaded, playAudio, fairyAudio} = useSelector(state => state.audioReducer)
    const {mainServices, mainServicesLoad} = useSelector(state => state.loginReducer)

    // const location = useLocation()
    // eslint-disable-next-line no-unused-vars
    const params = useParams()
    const queryParams = queryString.parse(window.location.search)

    const fetchFromUrl = () => {
        const ref = queryParams["ref"]
        const cookies = new Cookies()

        const refGet = cookies.get("ref")

        if (!refGet) {
            cookies.set("ref", ref, {
                maxAge: 259200
            })
        }
    }

    const playAudioHandle = async () => {
        dispatch(audioHandle(!playAudio))
        if (playAudio) await welcomeAudio.pause()
        else await welcomeAudio.play()
        welcomeAudio.volume = 0.2
        welcomeAudio.loop = true
        setShow(!show)
    }

    const transitionAudio = () => {
        fairyAudio.play()
        fairyAudio.volume = 0.4
    }


    useEffect(() => {
        fetchFromUrl()
        setTimeout(function () {
            setLogoStyle("animate__animated animate__bounce")
        }, 9500)
        dispatch(audioModelLoad())
    }, [])

    return (
        <Row>
            <Row className="position-relative full-page overflow-hidden">
                <div className="full-page header-behind position-absolute"/>
                <div className="d-flex mb-5 position-absolute header-footer">
                    <Facebook className="mb-2 footer-icon animate__animated animate__bounceInLeft f-icon-delay-1"
                              size={25}/>
                    <Instagram className="mb-2 footer-icon animate__animated animate__bounceInLeft f-icon-delay-2"
                               size={25}/>
                    <Mail className="mb-2 footer-icon animate__animated animate__bounceInLeft f-icon-delay-3"
                          size={25}/>
                    <Phone className="footer-icon animate__animated animate__bounceInLeft f-icon-delay-4" size={25}/>
                </div>
                <div className="p-1 mb-5 mb-lg-0 w-100 ml-1 position-sticky">
                    <MainNav index={1}/>
                </div>
                <div className="mt-lg-5 d-flex justify-content-center mb-5">
                    <Col lg={10} sm={12} className="ml-3 mt-lg-0 ml-lg-0 d-center flex-column">
                        <Col className={`logo-header zindex-4 mb-2 ${logoStyle}`}>
                            <img width="100%"
                                 src={logo}/>
                        </Col>
                        <h1 className="f-Londrina main-topic text-sm-c-center text-light">
                            <span className="fadein-anim header-topic-delay-1">WE MAKE</span> <span
                            className="text-primary shivering-anim delay-1">DREAM</span> <span
                            className="fadein-anim header-topic-delay-2">LIKE</span> <span
                            className="text-purple shivering-anim delay-3">DESIGNS</span> <span
                            className="fadein-anim header-topic-delay-3">HERE</span></h1>
                        <h2 className="text-center f-Londrina animate__animated animate__bounceInRight delay-5 text-light">
                            We design #MEMORIES here !
                        </h2>
                        <Col className="mt-2">
                            <button
                                className="btn btn-danger mt-lg-0 text-medium animate__animated animate__zoomInUp delay-5">
                                Let's Start !
                            </button>
                        </Col>
                    </Col>
                </div>
            </Row>
            <Row className="mt-5">
                <Col className="d-center bounce-img">
                    <AirpodsSvg/>
                </Col>
            </Row>
            <Row className="sticky-top-custom">
                <Col>
                    <h1 className="f-Londrina font-large-2 text-center">Why <span
                        className="text-primary">Talent Zea</span> ?</h1>
                    <p className="text-small f-shippori line-h-3 text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting,
                    </p>
                </Col>
                <Row className="mt-5 d-flex justify-content-around w-100 ml-1">
                    <Card className="dash-card scalable bg-semi-dark">
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
                    <Card className="dash-card scalable bg-semi-dark">
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
                    <Card className="dash-card scalable bg-semi-dark">
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
                    <Card className="dash-card scalable bg-semi-dark">
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
                <Col className="d-center floating-img" lg={3} sm={10}>
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
                    {
                        !mainServicesLoad && <div className="d-center flex-column animate__animated animate__bounce">
                            <Spinner className="text-primary mb-2"/>
                            <h1 className="text-primary">Loading...</h1>
                        </div>
                    }
                    {
                        mainServicesLoad && mainServices?.map(e => {
                            return <Card className="dash-card m-2 scalable bg-semi-dark">
                                <div className="pt-2">
                                    <h2 className="text-center f-Londrina">{e?.mainTopic}</h2>
                                </div>
                                <CardFooter>
                                    <p>
                                        {e?.mainTopicDescription}
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
            <div className="mt-5">
                <Col className="d-center bounce-img">
                    <HandcraftsSvg/>
                </Col>
                <Col className="mt-5 mb-5">
                    <h1 className="text-center f-Londrina font-large-2">What do you need to know ?</h1>
                </Col>
            </div>
            <AudioBtn/>
            {/*//////////////////////*/}
            {/*Modal starts form here*/}
            {/*//////////////////////*/}
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-sm'>
                <ModalHeader className='bg-primary' toggle={() => setShow(!show)}></ModalHeader>
                <ModalBody className='px-sm-5 mx-50 pb-4'>
                    <div className="floating-img mt-2">
                        <Headset/>
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="f-Londrina">Welcome User...!</h1>
                        <h5 className="f-Londrina">(For better experience enable the music)</h5>
                        <button
                            onClick={playAudioHandle}
                            className="btn btn-outline-danger mt-1"><Music/></button>
                    </div>
                </ModalBody>
            </Modal>
            {/*//////////////////////*/}
            {/*Modal ended*/}
            {/*//////////////////////*/}
            <Footer/>
        </Row>
    )
}

export default Dashboard
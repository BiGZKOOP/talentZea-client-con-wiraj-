import {
    Card,
    CardBody,
    CardFooter,
    Col, Input,
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
// eslint-disable-next-line no-unused-vars
import logo from "../../assets/custom_images/logo.png"
import video from "../../assets/videos/intro.mp4"
import Footer from "../../@core/layouts/components/footer"
import {useParams} from "react-router"
import queryString from "query-string"
import Cookies from 'universal-cookie'
import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import MainServiceSwipper from "../../custom-components/swipers/MainServiceSwipper"

const Dashboard = () => {

    // eslint-disable-next-line no-unused-vars
    const history = useHistory()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [logoStyle, setLogoStyle] = useState("fadein-anim delay-8")
    // eslint-disable-next-line no-unused-vars
    const {welcomeAudio, loaded, playAudio, fairyAudio} = useSelector(state => state.audioReducer)
    const {mainServicesLoad} = useSelector(state => state.loginReducer)

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

    // const transitionAudio = () => {
    //     fairyAudio.play()
    //     fairyAudio.volume = 0.4
    // }
    //
    // const getImageArray = (e) => {
    //
    //     return [e?.image?.image1, e?.image?.image2, e?.image?.image3]
    // }

    useEffect(() => {
        fetchFromUrl()
        setTimeout(function () {
            setLogoStyle("animate__animated animate__bounce")
        }, 9500)
        dispatch(audioModelLoad())
    }, [])

    return (
        <Row>
            <Row className="position-relative hero-header overflow-hidden">
                <div className="p-1 mb-lg-0 w-100 ml-1 position-sticky z-index-100">
                    <MainNav index={1}/>
                </div>
                <video autoPlay muted loop id="myVideo" className="animated-back sm-none">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="d-flex d-center zindex-4 hero-header m-0 position-absolute">
                    <Col lg={10} sm={12} className="hero-inner-container hero-header-font position-absolute">
                        <div>
                            <h1 className="text-center-sm f-Londrina hero-header-font">Find the perfect freelance</h1>
                            <h1 className="text-center-sm f-Londrina hero-header-font">services for your business</h1>
                            <div className="mt-2 w-100 d-flex">
                                <Input />
                                <button className="btn btn-purple ml-1">Search</button>
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
            <Col className="mt-5" id="service">
                <a name="service"/>
                <Col className="text-center">
                    <h1 className="f-Londrina font-large-1">OUR SERVICES</h1>
                </Col>
                <Row className="p-2 mt-3 radius-10  d-center flex-wrap d-flex">
                    {
                        !mainServicesLoad && <div className="d-center flex-column animate__animated animate__bounce">
                            <Spinner className="text-primary mb-2"/>
                            <h1 className="text-primary">Loading...</h1>
                        </div>
                    }
                    <MainServiceSwipper count={5}/>
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
            <Row className="sticky-top-custom d-center mt-3">
                <Col lg={6} sm={12}>
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
            <Row className="d-flex flex-column d-center mt-5 mb-5">
                <Col className="d-center floating-img" lg={3} sm={10}>
                    <ThinkingSvg/>
                </Col>
                <Col className="mt-3">
                    <h2 className="text-center f-indie-flower">"COLORFUL IDEAS CAME FROM PEACEFUL MINDS"</h2>
                    <h4 className="text-center f-indie-flower">-Talent Zea-</h4>
                </Col>
            </Row>
            {/*<AudioBtn/>*/}
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
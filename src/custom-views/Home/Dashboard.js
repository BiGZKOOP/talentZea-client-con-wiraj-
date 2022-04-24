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
import {Check, Facebook, Instagram, Link, Mail, Music, Phone, Users} from "react-feather"
import {useEffect, useState} from "react"
import Headset from "../../assets/custom_images/svg/Headset"
import {useDispatch, useSelector} from "react-redux"
import {audioHandle, audioModelLoad} from "../../custom-components/audioControl/action"
// eslint-disable-next-line no-unused-vars
import logo from "../../assets/custom_images/logo.png"
// eslint-disable-next-line no-unused-vars
import video from "../../assets/videos/intro.mp4"
import Footer from "../../@core/layouts/components/footer"
import queryString from "query-string"
import Cookies from 'universal-cookie'
import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import MainServiceSwipper from "../../custom-components/swipers/MainServiceSwipper"
// eslint-disable-next-line no-unused-vars
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import BannerSVG from "../../assets/custom_images/svg/BannerSVG"
import SubServiceWelcomeSVG from "../../assets/custom_images/svg/SubServiceWelcomeSVG"

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


    // eslint-disable-next-line no-unused-vars
    const {inView, entry, ref} = useInView({
        threshold: 0
    })

    // eslint-disable-next-line no-unused-vars
    const [ref2, inView2] = useInView({
        threshold: 0.5
    })

    const [ref3, inView3] = useInView({
        threshold: 0.5
    })

    const [ref4, inView4] = useInView({
        threshold: 0.5
    })

    const [ref5, inView5] = useInView({
        threshold: 0.5
    })

    const [ref6, inView6] = useInView({
        threshold: 0.5
    })

    const [ref7, inView7] = useInView({
        threshold: 0.5
    })

    const [ref8, inView8] = useInView({
        threshold: 0.5
    })

    const [ref9, inView9] = useInView()

    const [ref10, inView10] = useInView({
        threshold: 0.5
    })

    const animationControl = useAnimation()
    const animationControl2 = useAnimation()
    const animationControl3 = useAnimation()
    const animationControl4 = useAnimation()
    const animationControl5 = useAnimation() //Main service div
    const animationControl6 = useAnimation() //about div
    const animationControl7 = useAnimation() //last div
    const animationControl8 = useAnimation() //svg last
    const animationControl9 = useAnimation() //main service topic last
    const animationControl10 = useAnimation() //main service topic last

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

    useEffect(() => {
        fetchFromUrl()
        setTimeout(function () {
            setShow(!show)
        }, 5000)
        dispatch(audioModelLoad())
    }, [])

    //Animation effect
    useEffect(() => {
        if (inView) {
            animationControl.start({
                scale: 1,
                x: 0
            })
        } else {
            animationControl.start({
                scale: 0
            })
        }
    }, [inView])

    //In View2 animations
    useEffect(() => {
        if (inView2) {
            animationControl2.start({
                delay: 1,
                opacity: 1,
                rotate: "0deg"
            })
        } else {
            animationControl2.start({
                delay: 0,
                opacity: 0,
                rotate: "10deg"
            })
        }
    }, [inView2])

    //In View3 animations
    useEffect(() => {
        if (inView3) {
            animationControl3.start({
                opacity: 1,
                delay: 1,
                filter: "none"
            })
        } else {
            animationControl3.start({
                opacity: 0,
                filter: "grayscale(100%)"
            })
        }
    }, [inView3])

    //In View4 animations
    useEffect(() => {
        if (inView4) {
            animationControl4.start({
                filter: "none",
                scale: 1,
                rotate: "0deg"
            })
        } else {
            animationControl4.start({
                filter: "grayscale(100%)",
                rotate: "-50deg",
                scale: 0.7
            })
        }
    }, [inView4])

    //In View5 animations
    useEffect(() => {
        if (inView5) {
            animationControl5.start({
                filter: "none"
            })
        } else {
            animationControl5.start({
                filter: "grayscale(100%)"
            })
        }
    }, [inView5])

    //In View6 animations
    useEffect(() => {
        if (inView6) {
            animationControl6.start({
                filter: "none"
            })
        } else {
            animationControl6.start({
                filter: "grayscale(100%)"
            })
        }
    }, [inView6])

    //In View7 animations
    useEffect(() => {
        if (inView7) {
            animationControl7.start({
                filter: "none"
            })
        } else {
            animationControl7.start({
                filter: "grayscale(100%)"
            })
        }
    }, [inView7])

    //In View8 animations
    useEffect(() => {
        if (inView8) {
            animationControl8.start({
                opacity: 1
            })
        } else {
            animationControl8.start({
                opacity: 0
            })
        }
    }, [inView8])

    //In View9 animations
    useEffect(() => {
        if (inView9) {
            animationControl9.start({
                x: 0
            })
        } else {
            animationControl9.start({
                x: "-100vw"
            })
        }
    }, [inView9])

    //In View10 animations
    useEffect(() => {
        if (inView10) {
            animationControl10.start({
                x: 0,
                filter: "none"
            })
        } else {
            animationControl10.start({
                x: "-100vw",
                filter: "grayscale(100%)"
            })
        }
    }, [inView10])

    return (
        <Row>
            <Row className="hero-header overflow-hidden position-relative">
                <div className="p-1 mb-lg-0 w-100 ml-1 position-sticky z-index-1000">
                    <MainNav index={1}/>
                </div>
                <motion.div
                    initial={{
                        x: "grayscale(100%)"
                    }}
                    className="d-flex hero-header m-0 main-service-back position-absolute">
                    <Col lg={6} sm={12} className="hero-header-font h-100 d-center z-index-1000">
                        <motion.div
                            initial={{
                                filter: "grayscale(100%)",
                                rotate: "0deg"
                            }}
                            animate={animationControl4}
                            ref={ref4} className="p-lg-5 p-1 position-relative">
                            <h5 className="text-white f-courgette">Service providing agency</h5>
                            <h1 className="text-center-sm text-light m-0 p-0 f-Staatliches hero-header-font animate__animated animate__fadeInRight">Find
                                the perfect
                                <span className="text-purple f-lobster"> freelance</span></h1>
                            <h1 className="text-center-sm text-light f-Staatliches hero-header-font animate__animated animate__fadeInLeft">services
                                for your
                                <span className="text-purple"> business</span></h1>
                            <p className="text-small-extra mt-3 text-light word-break-all sm-none">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                demonstrate the visual form of a document or a typeface without relying on
                                meaningful content. Lorem ipsum may be used as a placeholder before final copy is
                                available.</p>
                            <div className="w-100 mt-2 d-flex animate__animated animate__fadeInDown">
                                <motion.button className="btn hero-btn-2 mr-2 clickable">Our services</motion.button>
                                <motion.button className="btn hero-btn-1 mr-2 clickable">Contact us now</motion.button>
                            </div>
                            <div className="round-element-3 animate-auto-scale sm-none zindex-minus-1" />
                        </motion.div>
                    </Col>
                    <Col lg={6} sm={12} className="animated-back sm-none d-center z-index-100">
                        <motion.div
                            initial={{
                                filter: "grayscale(100%)"
                            }}
                            animate={animationControl4}
                            className="w-75">
                            {/*<motion.video autoPlay muted controls="controls" width="700" height="450" loop id="myVideo"*/}
                            {/*              className="sm-none">*/}
                            {/*    /!*<video width="700" height="450" controls="controls" poster="image" preload="true">*!/*/}
                            {/*    <source src={video} type="video/mp4"/>*/}
                            {/*</motion.video>*/}
                            <div className="swingimg">
                                <SubServiceWelcomeSVG />
                            </div>
                        </motion.div>
                    </Col>
                </motion.div>
                <div className="round-element-1 animate__animated swingimg sm-none" />
                <div className="round-element-2 swingimg-2 scalable sm-none" />
                <div className="round-element-4 swingimg scalable sm-none" />
                <div className="round-element-5 swingimg-2 scalable sm-none" />
                <div className="round-element-6 swingimg-3 scalable sm-none" />
            </Row>
            <div ref={ref5} className="mt-5">
                <motion.div
                    initial={{
                        filter: "grayscale(100%)"
                    }}
                    animate={animationControl5}
                    className="main-service-container-back p-3" id="service">
                    <div ref={ref3}>
                        <a name="service"/>
                        <div ref={ref9}>
                            <motion.div
                                initial={{
                                    x: "-100vw"
                                }}
                                animate={animationControl9}>
                                <h1 className="f-Londrina font-large-2 text-purple f-Staatliches"><Check/> Check our
                                    services</h1>
                            </motion.div>
                        </div>
                        <Row className="mt-1 radius-10  d-center flex-wrap d-flex">
                            {
                                !mainServicesLoad &&
                                <div className="d-center flex-column animate__animated animate__bounce">
                                    <Spinner className="text-primary mb-2"/>
                                    <h1 className="text-primary">Loading...</h1>
                                </div>
                            }
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={animationControl3}
                            >
                                <MainServiceSwipper count={5}/>
                            </motion.div>
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
                    </div>
                </motion.div>
            </div>
            <div ref={ref6}>
                <motion.div
                    initial={{
                        filter: "grayscale(100%)"
                    }}
                    animate={animationControl6}
                >
                    <Row className="sticky-top-custom d-center pt-5 pb-5 lower-container-back text-black-c">
                        <Col lg={6} sm={12}>
                            <div
                                ref={ref}>
                                <motion.div
                                    initial={{
                                        x: "100vw"
                                    }}
                                    animate={animationControl}
                                >
                                    <h1 className="f-Londrina font-large-2 text-center text-black-c">Why <span
                                        className="text-purple">Talent Zea</span> ?</h1>
                                    <p className="text-small f-shippori line-h-3 text-center">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been
                                        the industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a galley
                                        of type and scrambled it to make a type specimen book. It has survived not only
                                        five centuries,
                                        but also the leap into electronic typesetting,
                                    </p>
                                </motion.div>
                            </div>
                        </Col>
                        <Row className="mt-5 d-flex justify-content-around w-100 ml-1">
                            <div ref={ref2} className="dash-card">
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={animationControl2}>
                                    <Card
                                        className="scalable bg-primary">
                                        <div
                                            className="pt-2">
                                            <h2 className="text-center text-light f-Londrina">#CREATIVE</h2>
                                        </div>
                                        <CardBody>
                                            <CreativeSvg/>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            </div>
                            <div className="dash-card">
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={animationControl2}>
                                    <Card className="scalable bg-foursquare">
                                        <div className="pt-2">
                                            <h2 className="text-center f-Londrina text-light">#FRIENDLY</h2>
                                        </div>
                                        <CardBody>
                                            <FriendlySvg/>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            </div>
                            <div className="dash-card">
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={animationControl2}>
                                    <Card className="scalable bg-success">
                                        <div className="pt-2">
                                            <h2 className="text-center text-light f-Londrina">#SKILLFUL</h2>
                                        </div>
                                        <CardBody>
                                            <SkillSvg/>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            </div>
                            <div className="dash-card">
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={animationControl2}>
                                    <Card className="scalable bg-primary">
                                        <div className="pt-2">
                                            <h2 className="text-center f-Londrina">#24/7 AVAILABLE</h2>
                                        </div>
                                        <CardBody>
                                            <Contract/>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            </div>
                        </Row>
                    </Row>
                </motion.div>
            </div>
            <div ref={ref7}>
                <div
                    // initial={{
                    //     filter: "grayscale(100%)"
                    // }}
                    // animate={animationControl7}
                >
                    <Row className="d-flex flex-column d-center pt-5 pb-5 contact-container-back">
                        <div ref={ref8}>
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={animationControl8}
                                className="d-center floating-img">
                                <Col lg={3} sm={10}>
                                    <ThinkingSvg/>
                                </Col>
                            </motion.div>
                        </div>
                        <Col className="mt-3">
                            <h2 className="text-center f-indie-flower text-black-c">"COLORFUL IDEAS CAME FROM PEACEFUL
                                MINDS"</h2>
                            <h4 className="text-center f-indie-flower text-black-c">-Talent Zea-</h4>
                        </Col>
                    </Row>
                </div>
            </div>
            <Row className="m-4">
                <div ref={ref10} className="d-center">
                    <Col lg={10} className="m-0 p-0">
                        <motion.div
                            initial={{
                                x: "100vw",
                                filter: "grayscale(100%)"
                            }}
                            animate={animationControl10}
                        >
                            <Card className="m-0 banner-container p-2 bg-transparent">
                                <CardBody className="m-0 d-flex justify-content-between">
                                    <div className="d-flex justify-content-center flex-column">
                                        <h1 className="text-light font-large-2 f-Staatliches">MAKE YOUR PROJECT <span
                                            className="text-danger">SHINE</span>.</h1>
                                        <h1 className="text-light f-courgette">just one click away <button
                                            className="btn btn-primary font-monospace">Contact us</button></h1>
                                        <p className="text-light mt-3">Get a <span
                                            className="text-success">professional touch</span> into your project.</p>
                                    </div>
                                    <Col lg={4} className="animate__animated animate__bounce">
                                        <BannerSVG/>
                                    </Col>
                                </CardBody>
                            </Card>
                        </motion.div>
                    </Col>
                </div>
            </Row>
            <div className="z-index-1000">
                <AudioBtn/>
            </div>
            <div className="counter-element d-center overflow-hidden sm-none">
                <Col lg={8} className="counter-card p-2 counter-inner-element d-flex justify-content-between">
                    <div className="w-25 d-center flex-column animate__animated animate__bounceInUp">
                        <h1 className="text-light f-Londrina font-large-2">250+</h1>
                        <h5 className="font-bold font-monospace text-light">Clients</h5>
                    </div>
                    <div className="w-25 d-center flex-column">
                        <h1 className="text-light f-Londrina font-large-2 animate__animated animate__bounceInLeft">250+</h1>
                        <h5 className="font-bold font-monospace text-light">Clients</h5>
                    </div>
                    <div className="w-25 d-center flex-column">
                        <h1 className="text-light f-Londrina font-large-2 animate__animated animate__bounceInDown">250+</h1>
                        <h5 className="font-bold font-monospace text-light">Clients</h5>
                    </div>
                    <div className="w-25 d-center flex-column">
                        <h1 className="text-light f-Londrina font-large-2 animate__animated animate__bounceInRight">250+</h1>
                        <h5 className="font-bold font-monospace text-light">Clients</h5>
                    </div>
                </Col>
            </div>
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
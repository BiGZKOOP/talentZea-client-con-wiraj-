import {
    Card,
    CardBody,
    Col, Input, Modal,
    ModalBody,
    ModalHeader,
    Row, Spinner
} from "reactstrap"
import "../../assets/css/dashboard.css"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import SkillSvg from "../../assets/custom_images/svg/Skill.svg"
import Contract from "../../assets/custom_images/svg/Contract"
import ThinkingSvg from "../../assets/custom_images/svg/Thinking.svg"
import MainNav from "../../custom-components/MainNav/MainNav"
import {useHistory} from "react-router-dom"
import AudioBtn from "../../custom-components/audioControl/AudioBtn"
import {Check, Facebook, Instagram, Link, Mail, Music, Phone, PlayCircle, Users} from "react-feather"
import {useEffect, useState} from "react"
import Headset from "../../assets/custom_images/svg/Headset"
import {useDispatch, useSelector} from "react-redux"
import {audioHandle, audioModelLoad} from "../../custom-components/audioControl/action"
import Footer from "../../@core/layouts/components/footer"
import queryString from "query-string"
import Cookies from 'universal-cookie'
import MainServiceSwipper from "../../custom-components/swipers/MainServiceSwipper"
// eslint-disable-next-line no-unused-vars
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import BannerSVG from "../../assets/custom_images/svg/BannerSVG"
import SubServiceWelcomeSVG from "../../assets/custom_images/svg/SubServiceWelcomeSVG"
import business from "../../assets/custom_images/business.png"
import video from "../../assets/videos/intro.mp4"
import SignupWelcomeSVG from "../../assets/custom_images/svg/SignupWelcomeSVG"

const Dashboard = () => {

    // eslint-disable-next-line no-unused-vars
    const history = useHistory()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [videoModalShow, setVideoModalShow] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [logoStyle, setLogoStyle] = useState("fadein-anim delay-8")
    // eslint-disable-next-line no-unused-vars
    const {welcomeAudio, loaded, playAudio, fairyAudio} = useSelector(state => state.audioReducer)
    const {singleSubLoad, allSubServices} = useSelector(state => state.mainServiceReducer)

    console.log(allSubServices)

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

    // eslint-disable-next-line no-unused-vars
    const [ref7, inView7] = useInView({
        threshold: 0.5
    })

    // eslint-disable-next-line no-unused-vars
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
    const animationControl11 = useAnimation() //bubble animation in header
    const animationControl12 = useAnimation() //Client banner animation


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

    useEffect(() => {
        if (inView4) {
            animationControl12.start({
                x: 0
            })
        } else {
            animationControl12.start({
                x: "-100vw"
            })
        }
    }, [inView4])

    useEffect(() => {
        if (inView3) {
            animationControl12.start({
                x: 0
            })
        }
    }, [inView3])


    useEffect(() => {
        if (inView4) {
            animationControl11.start({
                opacity: 1
            })
        } else {
            animationControl11.start({
                opacity: 0
            })
        }
    }, [inView4])

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
                // filter: "none"
            })
        } else {
            animationControl5.start({
                // filter: "grayscale(100%)"
            })
        }
    }, [inView5])

    //In View6 animations
    useEffect(() => {
        if (inView6) {
            animationControl6.start({
                // filter: "none"
            })
        } else {
            animationControl6.start({
                // filter: "grayscale(100%)"
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
                // filter: "grayscale(100%)"
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
            <div className="p-1 mb-lg-0 w-100 ml-1 position-sticky z-index-1000 sm-only header-purple-grad">
                <MainNav index={1}/>
            </div>
            <Row className="hero-header overflow-hidden position-relative">
                <div className="p-1 mb-lg-0 w-100 ml-1 position-sticky z-index-1000 sm-none">
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
                            <p className="text-small-extra mt-3 text-light word-break sm-none">In publishing and graphic
                                design, Lorem ipsum is a placeholder text commonly used to
                                demonstrate the visual form of a document or a typeface without relying on
                                meaningful content. Lorem ipsum may be used as a placeholder before final copy is
                                available.</p>
                            <div className="w-100 mt-2 d-flex animate__animated animate__fadeInDown">
                                <motion.button
                                    onClick={() => {
                                        window.location.href = "https://talentzea.com/home#service"
                                    }}
                                    className="btn hero-btn-2 mr-2 clickable">Our services</motion.button>
                                <motion.button
                                    onClick={() => history.push("/contact")}
                                    className="btn hero-btn-1 mr-2 clickable">Contact us now</motion.button>
                            </div>
                            <div className="round-element-3 animate-auto-scale sm-none zindex-minus-1"/>
                        </motion.div>
                    </Col>
                    <Col lg={6} sm={12} className="animated-back sm-none d-center z-index-100">
                        <motion.div
                            initial={{
                                filter: "grayscale(100%)"
                            }}
                            animate={animationControl4}
                            className="w-75">
                            <div className="swingimg">
                                <SubServiceWelcomeSVG/>
                            </div>
                        </motion.div>
                    </Col>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={animationControl11}
                    className="round-element-1 swingimg sm-none"/>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={animationControl11}
                    className="round-element-2 swingimg-2 scalable sm-none"/>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={animationControl11}
                    className="round-element-4 swingimg scalable sm-none"/>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={animationControl11}
                    className="round-element-5 swingimg-2 scalable sm-none"/>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={animationControl11}
                    className="round-element-6 swingimg-3 scalable sm-none"/>
            </Row>
            <Row className="w-100 lower-container-back">
                <Col lg={6} className="h-100 sm-none">
                    <div className="h-100 d-flex align-items-end">
                        <img width="70%" src={business} className="z-index-100"/>
                    </div>
                </Col>
                <Col lg={6} className="d-flex flex-column align-items-start justify-content-center p-3 p-lg-0">
                    <h3 className="text-pink f-Staatliches">Home for best designs</h3>
                    <h1 className="font-large-3 f-Staatliches text-light word-break">THE NEW WAY OF <span
                        className="text-pink">#DESIGNING</span></h1>
                    <p className="mt-3 text-light">In publishing and graphic design, Lorem ipsum is a placeholder text
                        commonly used to demonstrate the visual form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                </Col>
            </Row>
            <div ref={ref5} className="mt-5">
                <div
                    // initial={{
                    //     filter: "grayscale(100%)"
                    // }}
                    // animate={animationControl5}
                    className="main-service-container-back p-3 mb-5" id="service">
                    <div ref={ref3}>
                        <a name="service"/>
                        <div ref={ref9}>
                            <div
                                // initial={{
                                //     x: "-100vw"
                                // }}
                                // animate={animationControl9}
                                className="d-center flex-column"
                            >
                                <p className="text-center font-monospace text-purple font-bold letter-space-5">DIGITAL
                                    ART DESIGNING</p>
                                <h1 className="f-Londrina f-Staatliches text-center hero-header-font text-black-c">
                                    <Check/> Check our <span className="text-purple">services</span></h1>
                                <Col lg={7} sm={10} className="mt-2">
                                    <p className='text-center text-black-c'>In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly used to
                                        demonstrate the visual form of a document or a typeface without relying on
                                        meaningful content. Lorem ipsum may be used as a placeholder before final copy
                                        is
                                        available.</p>
                                </Col>
                            </div>
                        </div>
                        {
                            !singleSubLoad && <div className="mt-5">
                                <Col lg={5} sm={12} className="d-flex">
                                    <Input placeholder="search service..."/>
                                    <button className="btn btn-primary ml-2 f-Staatliches">search</button>
                                </Col>
                            </div>
                        }
                        <Row className="mt-4 radius-10  d-center flex-wrap d-flex">
                            {
                                singleSubLoad &&
                                <div className="d-center flex-column animate__animated animate__bounce">
                                    <Spinner className="text-primary mb-2"/>
                                    <h1 className="text-primary">Loading...</h1>
                                </div>
                            }
                            <div>
                                <MainServiceSwipper count={5}/>
                            </div>
                            <p className="mt-1 f-courgette text-purple">*Swipe to see more</p>
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
                </div>
            </div>
            <div className="d-center bg-danger video-intro-back flex-column w-100 m-0 p-2 p-lg-0">
                <button onClick={() => setVideoModalShow(!videoModalShow)}
                        className="btn btn-danger video-btn full-round p-1 m-0">
                    <PlayCircle size={50}/>
                </button>
                <div className="mt-2">
                    <h1 className="f-Staatliches text-light hero-header-font text-center">Check our video presentation</h1>
                    <div className="mt-2">
                        <h3 className="text-pink f-courgette text-center text-medium">"COLORFUL IDEAS CAME FROM PEACEFUL MINDS"</h3>
                        <h4 className="text-pink f-courgette text-medium text-center">~Talent zea~</h4>
                    </div>
                </div>
                <div className="mt-2">
                    <button
                        onClick={() => history.push("/contact")}
                        className="btn btn-outline-light text-medium">CONTACT US</button>
                </div>
            </div>
            <div ref={ref6}>
                <motion.div
                    initial={{
                        // filter: "grayscale(100%)"
                    }}
                    animate={animationControl6}
                >
                    <Row className="sticky-top-custom d-center pt-5 pb-5 text-black-c mt-5">
                        <Col lg={6} sm={12}>
                            <div
                                className="p-2 p-lg-0"
                                ref={ref}>
                                <motion.div
                                    initial={{
                                        x: "100vw"
                                    }}
                                    animate={animationControl}
                                >
                                    <h1 className="f-Staatliches hero-header-font text-center text-black-c">Why <span
                                        className="text-purple text-shadow-ex-sm">Talent Zea</span> ?</h1>
                                    <p className="text-medium text-dark f-courgette line-h-3 text-center">
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
                        <Row className="mt-5 d-center w-100 pl-1">
                            <div className="dash-card dash-card-1 m-0 p-0">
                                <CardBody>
                                    <CreativeSvg/>
                                </CardBody>
                            </div>
                            <div className="dash-card dash-card-3 m-0 p-0">
                                <CardBody>
                                    <h1 className="text-light hero-header-font f-Staatliches text-shadow-sm">our motto
                                        is
                                        <span className="text-yellow"> creativity</span></h1>
                                    <h5 className="text-light f-Londrina mt-2">In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly used
                                        to demonstrate the visual form.</h5>
                                </CardBody>
                            </div>
                            <div className="dash-card dash-card-2 m-0 p-0">
                                <CardBody className="d-center">
                                    <div className="w-75 p-0">
                                        <SignupWelcomeSVG/>
                                    </div>
                                </CardBody>
                            </div>
                            <div className="dash-card dash-card-3 m-0 p-0">
                                <CardBody>
                                    <h1 className="text-light hero-header-font f-Staatliches text-shadow-sm">Group of
                                        <span className="text-green"> professionals</span></h1>
                                    <h5 className="text-light f-Londrina mt-2">In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly used
                                        to demonstrate the visual form.</h5>
                                </CardBody>
                            </div>
                            <br/>
                            <div className="dash-card dash-card-3 m-0 p-0">
                                <CardBody>
                                    <h1 className="text-light hero-header-font f-Staatliches text-shadow-sm">Friendly
                                        <span className="text-info"> communication</span></h1>
                                    <h5 className="text-light f-Londrina mt-2">In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly used
                                        to demonstrate the visual form.</h5>
                                </CardBody>
                            </div>
                            <div className="dash-card dash-card-5 m-0 p-0">
                                <CardBody>
                                    <FriendlySvg/>
                                </CardBody>
                            </div>
                            <div className="dash-card dash-card-3 m-0 p-0">
                                <CardBody>
                                    <h1 className="text-light hero-header-font f-Staatliches text-shadow-sm">we will
                                        make you <span className="text-crimson">win</span></h1>
                                    <h5 className="text-light f-Londrina mt-2">In publishing and graphic design, Lorem
                                        ipsum is a placeholder text commonly used
                                        to demonstrate the visual form.</h5>
                                </CardBody>
                            </div>
                            <div className="dash-card dash-card-4 m-0 p-0">
                                <CardBody className="d-center">
                                    <SkillSvg/>
                                </CardBody>
                            </div>
                        </Row>
                    </Row>
                </motion.div>
            </div>
            <Row className="mt-5 mb-5 w-100 m-0">
                <div ref={ref10} className="d-center">
                    <Col lg={10} className="m-0 p-0">
                        <motion.div
                            initial={{
                                x: "100vw"
                                // filter: "grayscale(100%)"
                            }}
                            animate={animationControl10}
                        >
                            <Card className="m-0 banner-container p-2 bg-transparent">
                                <CardBody className="m-0 d-flex justify-content-between">
                                    <div className="d-flex justify-content-center flex-column">
                                        <h1 className="text-light font-large-2 f-Staatliches">MAKE YOUR PROJECT <span
                                            className="text-danger">SHINE</span>.</h1>
                                        <h1 className="text-light f-courgette">just one click away <button
                                            onClick={() => history.push("/contact")}
                                            className="btn btn-primary font-monospace mt-2 mt-lg-0">Contact us</button></h1>
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
            <motion.div
                initial={{
                    x: 0
                }}
                animate={animationControl12}
                className="counter-element d-flex justify-content-end overflow-hidden sm-none">
                <Col lg={8} className="counter-card p-2 counter-inner-element d-flex justify-content-between">
                    <div className="w-25 d-center flex-column animate__animated animate__bounceInUp">
                        <h1 className="text-light f-Londrina font-large-2">50+</h1>
                        <h5 className="font-bold font-monospace text-light">Clients</h5>
                    </div>
                    <div className="w-25 d-center flex-column">
                        <h1 className="text-light f-Londrina font-large-2 animate__animated animate__bounceInLeft">200+</h1>
                        <h5 className="font-bold font-monospace text-light">Projects</h5>
                    </div>
                    <div className="w-25 d-center flex-column">
                        <h1 className="text-light f-Londrina font-large-2 animate__animated animate__bounceInDown">+130</h1>
                        <h5 className="font-bold font-monospace text-light">Clients</h5>
                    </div>
                    <div className="w-25 d-center flex-column">
                        <h1 className="text-light f-Londrina font-large-2 animate__animated animate__bounceInRight">80+</h1>
                        <h5 className="font-bold font-monospace text-light">Clients</h5>
                    </div>
                </Col>
            </motion.div>
            {/*//////////////////////*/}
            {/*Modal starts form here*/}
            {/*//////////////////////*/}
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-sm'>
                <ModalHeader className='bg-primary' toggle={() => setShow(!show)}/>
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

            {/*//////////////////////*/}
            {/*Vide modal*/}
            {/*//////////////////////*/}
            <Modal isOpen={videoModalShow} toggle={() => setVideoModalShow(!videoModalShow)}
                   className='modal-dialog-centered bg-transparent modal-lg'>
                <motion.video autoPlay controls="controls" loop id="myVideo"
                              className="video bg-transparent">
                    <source src={video} type="video/mp4"/>
                </motion.video>
            </Modal>
            {/*//////////////////////*/}
            {/*Vide modal*/}
            {/*//////////////////////*/}
            <Footer/>
        </Row>
    )
}

export default Dashboard
import MainNav from "../../custom-components/MainNav/MainNav"
import {Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
import SubServicePricing from "../../custom-components/SubServices/SubServicePricing"
import {useHistory} from "react-router-dom"
import SubServiceWelcomeSVG from "../../assets/custom_images/svg/SubServiceWelcomeSVG"
import {useDispatch, useSelector} from "react-redux"
import Footer from "../../@core/layouts/components/footer"
import ContactComp from "../../custom-components/contact-comp"
import {useEffect, useState} from "react"
import {getSubServiceByIDListen} from "../MainService/actions"
import ServiceCookLoader from "../../custom-components/loaders/ServiceCookLoader"
import PaymentForm from "../../custom-components/SubServices/PaymentForm"

const SubServiceView = () => {

    const pathname = window.location.pathname

    const id = pathname.split("/sub-service/")[1]

    const {singleSubServiceByID, singleSubLoad} = useSelector(state => state.mainServiceReducer)

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    const history = useHistory()

    const getImageArray = () => {

        return [singleSubServiceByID?.image?.image1, singleSubServiceByID?.image?.image2, singleSubServiceByID?.image?.image3]
    }


    useEffect(() => {
        dispatch(getSubServiceByIDListen(id))
    }, [])

    if (singleSubLoad) return <ServiceCookLoader/>
    else {
        return <Row>
            <div className="p-1 mb-5  mb-lg-0">
                <MainNav index={4}/>
            </div>
            <div className="mt-4 mb-5 d-center flex-column">
                <div className="main-img floating-img">
                    <SubServiceWelcomeSVG/>
                </div>
                <h1 className="text-center mt-4 f-Londrina text-primary topic-header">{singleSubServiceByID?.mainTopic}</h1>
                <h2 className="f-indie-flower">We create memories here !</h2>
                <div className="d-flex">
                    <button
                        onClick={() => setShow(!show)}
                        className="btn btn-danger text-medium mt-2 mr-2">PLACE ORDER</button>
                    <button
                        onClick={() => history.goBack()}
                        className="btn btn-outline-primary text-medium mt-2">BACK TO SERVICES
                    </button>
                </div>
            </div>
            <Row className="w-100 d-center mt-5">
                <Row className="w-50 ">
                    <h1 className="text-center mb-3 f-Londrina">
                        What we provide
                    </h1>
                    <p className="text-medium text-center">{singleSubServiceByID?.description}</p>
                </Row>
            </Row>
            <Row className="mt-5 mb-5 d-center">
                <div className="mt-5 mb-3">
                    <p className="f-Londrina text-topic text-center">Some of our works...</p>
                </div>
                <div>
                    <OurWorkMainService count={3} images={getImageArray()}/>
                </div>
            </Row>
            <SubServicePricing faq={singleSubServiceByID?.faq}/>
            <ContactComp/>
            <Footer/>

            {/*//////////////////////*/}
            {/*Modal starts form here*/}
            {/*//////////////////////*/}
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
                <ModalHeader className='bg-primary' toggle={() => setShow(!show)}/>
                <ModalBody className='px-sm-5 mx-50 pb-4'>
                    <PaymentForm />
                </ModalBody>
            </Modal>
            {/*//////////////////////*/}
            {/*Modal ended*/}
            {/*//////////////////////*/}

        </Row>
    }
}

export default SubServiceView
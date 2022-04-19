import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardBody, CardFooter, CardHeader, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
import SubServicePricing from "../../custom-components/SubServices/SubServicePricing"
import {useDispatch, useSelector} from "react-redux"
import Footer from "../../@core/layouts/components/footer"
import ContactComp from "../../custom-components/contact-comp"
import {useEffect, useState} from "react"
import {getSubServiceByIDListen} from "../MainService/actions"
import ServiceCookLoader from "../../custom-components/loaders/ServiceCookLoader"
import PaymentForm from "../../custom-components/SubServices/PaymentForm"
import ServiceMainSwiper from "../../custom-components/swipers/ServiceMainSwiper"
import OrderCard from "../../custom-components/SubServices/OrderCard"

const SubServiceView = () => {

    const pathname = window.location.pathname

    const id = pathname.split("/sub-service/")[1]

    const {singleSubServiceByID, singleSubLoad} = useSelector(state => state.mainServiceReducer)

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    // const history = useHistory()

    const getImageArray = () => {

        return [singleSubServiceByID?.image?.image1, singleSubServiceByID?.image?.image2, singleSubServiceByID?.image?.image3]
    }


    useEffect(() => {
        dispatch(getSubServiceByIDListen(id))
    }, [])

    if (singleSubLoad) return <ServiceCookLoader/>
    else {
        return <Row>
            <div className="p-1 mb-lg-0">
                <MainNav index={4}/>
            </div>
            <Row className="mb-5 flex-column-sm mt-5 mt-0-sm">
                <div style={{width: "60%"}} className="p-2 d-center w-sm-100">
                    <div className="w-75 w-sm-100">
                        <div className="mb-3">
                            <h3 className="text-medium">Graphics designing {" > "} Logo designing</h3>
                        </div>
                        <div>
                            <ServiceMainSwiper count={1} images={getImageArray()}/>
                        </div>
                        <p className="mt-2 text-primary">Swipe to see more !</p>
                        <Card className="p-2 mt-3">
                            <div className="mt-2">
                                <h3>About this service</h3>
                            </div>
                            <p className="mt-1">{singleSubServiceByID?.description}</p>
                        </Card>
                        <hr />
                        <SubServicePricing faq={singleSubServiceByID?.faq}/>
                    </div>
                </div>
                <div className="w-sm-100" style={{width: "40%", height: "100vh"}} >
                    <Card className="p-2">
                        <h3 className="m-0 p-0 text-success">Order Cards (3)</h3>
                    </Card>
                    <div className="p-1 dashed-border-dark radius-10 overflow-auto inset-dark" style={{height: "100vh"}}>
                        <div>
                            <OrderCard />
                            <OrderCard />
                            <OrderCard />
                            <OrderCard />
                        </div>
                    </div>
                </div>
            </Row>
            <ContactComp/>
            <Footer/>
            {/*//////////////////////*/}
            {/*Modal starts form here*/}
            {/*//////////////////////*/}
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
                <ModalHeader className='bg-primary' toggle={() => setShow(!show)}/>
                <ModalBody className='px-sm-5 mx-50 pb-4'>
                    <PaymentForm/>
                </ModalBody>
            </Modal>
            {/*//////////////////////*/}
            {/*Modal ended*/}
            {/*//////////////////////*/}

        </Row>
    }
}

export default SubServiceView
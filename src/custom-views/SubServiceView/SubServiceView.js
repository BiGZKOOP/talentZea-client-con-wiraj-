import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardBody, CardFooter, CardHeader, Input, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
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
import AudioBtn from "../../custom-components/audioControl/AudioBtn"
import {Clock} from "react-feather"
import Select from "react-select"

const SubServiceView = () => {

    const revisionOptions = [
        { value: 0, label: 'none' },
        { value: 1, label: '1' },
        { value: 2, label: '2' }
    ]

    const [show, setShow] = useState(false)

    const pathname = window.location.pathname

    const id = pathname.split("/sub-service/")[1]

    const {singleSubServiceByID, singleSubLoad} = useSelector(state => state.mainServiceReducer)

    const dispatch = useDispatch()

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
            <div className="p-1 mb-lg-0 w-100 ml-1 position-sticky z-index-1000 main-service-back">
                <MainNav index={1}/>
            </div>
            <Row className="mb-5 flex-column-sm mt-5 mt-0-sm">
                <div style={{width: "55%"}} className="p-2 d-center w-sm-100">
                    <div className="w-75 w-sm-100">
                        <div className="mb-3">
                            <h1 className="f-Staatliches"><span className="text-danger font-bold">Graphics designing</span> {" > "}
                                <span className="text-primary font-bold">Logo designing</span></h1>
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
                        <hr/>
                        <SubServicePricing faq={singleSubServiceByID?.faq}/>
                    </div>
                </div>
                <div className="w-sm-100" style={{width: "45%", height: "100vh"}}>
                    <Card className="p-2 crimson-purple-grad">
                        <h3 className="m-0 p-0 text-light font-bold">Order Cards (3)</h3>
                    </Card>
                    <div className="radius-10 overflow-auto inset-dark p-2 shadow-inset">
                        <div>
                            <Card className="shadow-lg">
                                <CardHeader className="d-flex justify-content-between light-orange-grad">
                                    <h4 className="text-black-c text-large f-Staatliches">Logo Designing</h4>
                                    <div className="bg-light shadow-inset-light p-1 d-center radius-5">
                                        <h1 className="text-warning font-bold text-black-c f-Staatliches text-large p-0 m-0">$ 250 /=</h1>
                                    </div>
                                </CardHeader>
                                <CardBody className="light-orange-grad">
                                    <div className="d-flex align-items-center font-bold">
                                        <Clock size={13} className="mr-1"/> 2 Days delivery
                                    </div>
                                </CardBody>
                                <CardBody>
                                    <div className="d-flex flex-column">
                                        <p>The start of the school of the year brings joy to some children and brings dismay to some
                                            children</p>
                                    </div>
                                </CardBody>
                                <CardBody className="d-flex flex-column justify-content-between mt-0 pt-0">
                                    <div className="mb-2">
                                        <h3 className="f-Staatliches">Add extras</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5>Number of revisions</h5>
                                                </div>
                                                <Select options={revisionOptions}/>
                                            </div>
                                            <p>(Per revision <span className="font-bold">$ 12</span>)</p>
                                        </li>
                                        <li className="mt-3">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5>Source files included</h5>
                                                </div>
                                                <Input type="checkbox"/>
                                            </div>
                                            <p>(For source files <span className="font-bold">$ 12</span>)</p>
                                        </li>
                                        <li className="mt-3">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5>Express delivery within <span className="font-bold">12 days</span></h5>
                                                </div>
                                                <Input type="checkbox"/>
                                            </div>
                                            <p>(For express delivery <span className="font-bold">$ 12</span>)</p>
                                        </li>
                                    </ul>
                                </CardBody>
                                <CardFooter className="d-center">
                                    <buton onClick={() => setShow(!show)} className="btn btn-success w-75">Continue</buton>
                                </CardFooter>
                                {/*//////////////////////*/}
                                {/*Modal starts form here*/}
                                {/*//////////////////////*/}
                                <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
                                    <ModalHeader className='bg-primary' toggle={() => setShow(!show)}>
                                        <h1 className="text-light f-Staatliches">Place your order</h1>
                                    </ModalHeader>
                                    <ModalBody className='px-sm-5 mx-50 pb-4'>
                                        <PaymentForm price={100}/>
                                    </ModalBody>
                                </Modal>
                                {/*//////////////////////*/}
                                {/*Modal ended*/}
                                {/*//////////////////////*/}
                            </Card>
                        </div>
                    </div>
                </div>
            </Row>
            <AudioBtn />
            <ContactComp/>
            <Footer/>

        </Row>
    }
}

export default SubServiceView
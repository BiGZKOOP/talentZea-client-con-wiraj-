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
import {Clock, Star} from "react-feather"
import Select from "react-select"

const SubServiceView = () => {

    const [show, setShow] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [basePrice, setBasePrice] = useState(0)
    const [price, setPrice] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [revPrice, setRevPrice] = useState(0)
    const [sourcePrice, setSourcePrice] = useState(0)
    const [expressPrice, setExpressPrice] = useState(0)
    const [revCount, setRevCount] = useState(0)

    const pathname = window.location.pathname

    const id = pathname.split("/sub-service/")[1]

    const {singleSubServiceByID, singleSubLoad} = useSelector(state => state.mainServiceReducer)

    const dispatch = useDispatch()

    console.log(singleSubServiceByID)

    // const history = useHistory()

    const getImageArray = () => {

        return [singleSubServiceByID?.image?.image1, singleSubServiceByID?.image?.image2, singleSubServiceByID?.image?.image3]
    }

    const getRevisions = () => {

        const revisionsArr = [{value: 0, label: 'none'}]
        for (let i = 0; i < singleSubServiceByID?.revisions?.count; i++) {
            revisionsArr.push(
                {value: i + 1, label: i + 1}
            )
        }
        return revisionsArr
    }

    const updatePriceTab = () => {
        const updatePrice = parseInt(basePrice) + parseInt(revPrice) + parseInt(sourcePrice) + parseInt(expressPrice)
        setPrice(updatePrice)
    }

    const revisionPricing = (val) => {
        const updatePrice = parseInt(val?.value * singleSubServiceByID?.revisions?.price)
        setRevCount(val?.value)
        setRevPrice(updatePrice)
    }

    const sourceFilesPricing = (e) => {
        if (e.target.checked) {
            setSourcePrice(parseInt(sourcePrice) + parseInt(singleSubServiceByID?.sourceFiles?.price))
        } else {
            setSourcePrice(parseInt(sourcePrice) - parseInt(singleSubServiceByID?.sourceFiles?.price))
        }
    }

    const expressDeliveryPricing = (e) => {
        if (e.target.checked) {
            setExpressPrice(parseInt(expressPrice) + parseInt(singleSubServiceByID?.expressDelivery?.price))
        } else {
            setExpressPrice(parseInt(expressPrice) - parseInt(singleSubServiceByID?.expressDelivery?.price))
        }
    }

    useEffect(() => {
        dispatch(getSubServiceByIDListen(id))
        setBasePrice(singleSubServiceByID?.price)
        setPrice(singleSubServiceByID?.price)
    }, [singleSubServiceByID?.price])

    useEffect(() => {
        updatePriceTab()
    }, [sourcePrice, revPrice, expressPrice])

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
                            <h1 className="f-Staatliches"><span
                                className="text-danger font-bold">Graphics designing</span> {" > "}
                                <span className="text-primary font-bold">{singleSubServiceByID?.orderTopic}</span></h1>
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
                    <div className="radius-10 overflow-auto inset-dark p-2 shadow-inset">
                        <div>
                            <Card className="shadow-lg">
                                <CardHeader className="d-flex justify-content-between light-orange-grad">
                                    <h4 className="text-black-c text-large f-Staatliches">{singleSubServiceByID?.orderTopic}</h4>
                                    <div className="bg-light shadow-inset-light p-1 d-center radius-5">
                                        <h1 className="text-warning font-bold text-black-c f-Staatliches text-large p-0 m-0">$ {price}.00
                                            /=</h1>
                                    </div>
                                </CardHeader>
                                <CardBody className="light-orange-grad">
                                    <div className="d-flex align-items-center font-bold">
                                        <Clock size={13} className="mr-1"/> {singleSubServiceByID?.deliveryTime} Days
                                        delivery
                                    </div>
                                </CardBody>
                                <CardBody>
                                    <div className="d-flex flex-column">
                                        <p>{singleSubServiceByID?.orderDescription}</p>
                                    </div>
                                </CardBody>
                                <CardBody className="d-flex flex-column justify-content-between mt-0 pt-0">
                                    <div className="mb-2">
                                        <h3 className="f-Staatliches">Add extras</h3>
                                    </div>
                                    <ul>
                                        <li hidden={Boolean(!singleSubServiceByID?.revisions?.hide)}>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5>Number of revisions</h5>
                                                </div>
                                                <Select
                                                    onChange={(e => {
                                                        revisionPricing(e)
                                                    })}
                                                    options={getRevisions()}/>
                                            </div>
                                            <p>(Per revision <span
                                                className="font-bold">$ {singleSubServiceByID?.revisions?.price}</span>)
                                            </p>
                                        </li>
                                        <li hidden={Boolean(!singleSubServiceByID?.sourceFiles?.hide)} className="mt-3">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5>Source files included</h5>
                                                </div>
                                                <Input
                                                    onChange={(e) => {
                                                        sourceFilesPricing(e)
                                                    }}
                                                    type="checkbox"/>
                                            </div>
                                            <p>(For source files <span
                                                className="font-bold">$ {singleSubServiceByID?.sourceFiles?.price}</span>)
                                            </p>
                                        </li>
                                        <li hidden={Boolean(!singleSubServiceByID?.expressDelivery?.hide)}
                                            className="mt-3">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5>Express delivery within <span
                                                        className="font-bold">{singleSubServiceByID?.expressDelivery?.count} days</span>
                                                    </h5>
                                                </div>
                                                <Input
                                                    onChange={(e) => {
                                                        expressDeliveryPricing(e)
                                                    }}
                                                    type="checkbox"/>
                                            </div>
                                            <p>(For express delivery <span
                                                className="font-bold">$ {singleSubServiceByID?.expressDelivery?.price}</span>)
                                            </p>
                                        </li>
                                    </ul>
                                </CardBody>
                                <CardFooter className="d-center">
                                    <buton onClick={() => setShow(!show)} className="btn btn-success w-75">Continue
                                    </buton>
                                </CardFooter>
                                {/*//////////////////////*/}
                                {/*Modal starts form here*/}
                                {/*//////////////////////*/}
                                <Modal isOpen={show} toggle={() => setShow(!show)}
                                       className='modal-dialog-centered modal-lg'>
                                    <ModalHeader className='bg-primary' toggle={() => setShow(!show)}>
                                        <h1 className="text-light f-Staatliches">Place your order</h1>
                                    </ModalHeader>
                                    <ModalBody className='px-sm-5 mx-50 pb-4'>
                                        <div>
                                            <CardHeader className="mb-0">
                                                <span className="f-courgette">Talent Zea</span>
                                                <h1 className="f-Staatliches font-large-1"><span
                                                    className="text-danger">Graphics desig|ning</span> {">"} <span
                                                    className="text-primary">LOGO designing</span></h1>
                                            </CardHeader>
                                            <CardBody>
                                                <div>
                                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder
                                                        text
                                                        commonly used to demonstrate the visual form of a document or a
                                                        typeface without relying on meaningful content. Lorem ipsum may
                                                        be
                                                        used as a placeholder before final copy is available.</p>
                                                </div>
                                                <div className="mt-5">
                                                    <h3 className="f-courgette">Pricing & features</h3>
                                                </div>
                                                <div className="mt-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <Star size={15}/> <span className="ml-1 text-primary">Base price</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <span className="ml-1 font-bold text-primary">$ {basePrice}.00 /=</span>
                                                        </div>
                                                    </div>
                                                    {
                                                        parseInt(revPrice) > 0 &&
                                                        <div className="mt-1 d-flex justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Star size={15}/> <span
                                                                className="ml-1">{revCount} revisions (per revision <span
                                                                className="font-bold">${singleSubServiceByID?.revisions?.price}.00/=</span>)</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span
                                                                    className="ml-1 font-bold">$ {revPrice}.00 /=</span>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        parseInt(sourcePrice) > 0 &&
                                                        <div className="mt-1 d-flex justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Star size={15}/> <span className="ml-1">Source files included</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span
                                                                    className="ml-1 font-bold">$ {sourcePrice}.00 /=</span>
                                                            </div>
                                                        </div>
                                                    }
                                                    {
                                                        parseInt(expressPrice) > 0 &&
                                                        <div className="mt-1 d-flex justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Star size={15}/> <span className="ml-1">Express delivery <span
                                                                className="font-bold">({singleSubServiceByID?.expressDelivery?.price} days delivery)</span></span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span
                                                                    className="ml-1 font-bold">$ {expressPrice}.00 /=</span>
                                                            </div>
                                                        </div>
                                                    }
                                                    <hr/>
                                                    <div className="mt-1 d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h3 className="f-courgette">Total:</h3>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <h2 className="font-bold">$ {price}.00 /=</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </div>
                                        <Card className="p-2">
                                            <PaymentForm price={price}
                                                         revisions={{
                                                             count: revCount,
                                                             price: revPrice
                                                         }}
                                                         sourceFiles={{
                                                             price:sourcePrice
                                                         }}
                                                         expressDelivery={{
                                                             price: expressPrice
                                                         }}
                                            />
                                        </Card>
                                        <p className="text-center f-courgette">"Every great journey, start from one
                                            little step"</p>
                                        <p className="text-center f-courgette">~Talent Zea~</p>
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
            <AudioBtn/>
            <ContactComp/>
            <Footer/>

        </Row>
    }
}

export default SubServiceView
import {Card, CardBody, CardHeader, Col, Row, Spinner} from "reactstrap"
import Timeline from "../../@core/components/timeline"
import Avatar from "../../@core/components/avatar"
import {useEffect} from "react"
// eslint-disable-next-line no-unused-vars
import {useDispatch, useSelector} from "react-redux"
import moment from "moment"
import ServiceCookLoader from "../../custom-components/loaders/ServiceCookLoader"
import {getOrderByIDListen} from "../ClientProfile/actions"
import {getOrderTimeLineByIDListen, getSingleOrderByIDListen} from "../ClientOrders/actions"
import MainNav from "../../custom-components/MainNav/MainNav"
import "../../assets/css/dashboard.css"
import Footer from "../../@core/layouts/components/footer"
import SourceFileCard from "../../custom-components/orderDetails/SourceFileCard"
import {getAllOrderSourceFilesListen} from "./actions"

const OrderDetailsView = () => {

    const pathname = window.location.pathname
    // eslint-disable-next-line no-unused-vars
    const id = pathname.split("/order/")[1]

    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()

    const {singleOrder, singleOrderLoader, timeLineData, timeLineLoader} = useSelector(state => state.clientOrderReducer)
    const {sourceFiles, sourceFilesLoader} = useSelector(state => state.orderDetailsViewReducer)

    const handleStatusPointer = (num) => {
        switch (num) {
            case 0:
                return "warning"
            case 1:
                return "info"
            case 2:
                return "success"
            case -1:
                return "danger"
            default:
                return "dark"
        }
    }

    useEffect(() => {
        dispatch(getSingleOrderByIDListen(id))
        dispatch(getOrderTimeLineByIDListen(id))
    }, [])

    //Use this effect to get the source files
    useEffect(() => {
        dispatch(getAllOrderSourceFilesListen(singleOrder._id))
    }, [singleOrder])

    const timelineMsgHandler = (orderLog) => {

        switch (orderLog?.logStatus) {
            case 0:
                return {
                    title: 'Created the project',
                    content: `New project has started by ${orderLog?.customerID?.firstName}`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'warning',
                    customContent: (
                        <div className='d-flex align-items-center mb-50'>
                            <Avatar
                                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU"
                                imgHeight={38} imgWidth={38}/>
                            <div className='ms-50'>
                                <h6 className='mb-0'>Leonains (Client)</h6>
                            </div>
                        </div>
                    )
                }
            case 1:
                return {
                    title: 'Started the project',
                    content: `Project is on going now`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'info'
                }
            case 2:
                return {
                    title: 'Completed the project',
                    content: `Hooray ! completed the project`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'success'
                }
            case -1:
                return {
                    title: 'Canceled the project',
                    content: `Reson: ${orderLog?.message}`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'danger'
                }
            default: break
        }
    }

    // eslint-disable-next-line no-unused-vars
    const cookTimeLineData = () => {

        const timeLineArr = []

        timeLineData.map(e => {
            timeLineArr.push(timelineMsgHandler(e))
        })

        return timeLineArr
    }

    useEffect(() => {
        dispatch(getOrderByIDListen(id))
        dispatch(getOrderTimeLineByIDListen(id))
    }, [])

    //Use this effect to get the source files
    useEffect(() => {
        dispatch(getAllOrderSourceFilesListen(singleOrder._id))
    }, [singleOrder])

    if (!singleOrderLoader) {
        return <div className="m-0 p-0">
            <div className="m-0 mb-lg-0 p-1 w-100 position-sticky z-index-1000 header-purple-grad">
                <MainNav index={1}/>
            </div>
            <Card className="m-1 mt-3">
                <CardHeader className="d-flex justify-content-between">
                    <div>
                        <h1 className="f-Staatliches font-large-1"><span
                            className="text-danger">{singleOrder?.subServiceID?.mainService?.mainTopic}</span> {">"}
                            <span className="text-primary">{singleOrder?.subServiceID?.mainTopic}</span></h1>
                        <p className="text-silver mt-1">Created at:- {moment(singleOrder?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
                        <p className="text-silver">
                            {singleOrder?.subServiceID?.deliveryTime} days delivery</p>
                    </div>
                    <div className="mr-1">
                        <h1 className="font-bold">$ {singleOrder?.amount}.00 /=</h1>
                    </div>
                </CardHeader>
                <hr/>
                <CardBody >
                    <h1 className="f-courgette">Pricing & Features</h1>
                    <div className="w-sm-100">
                        <ol className="f-courgette mt-2">
                            <li className="text-medium mb-1">
                                <div className="w-100 d-flex justify-content-between text-primary">
                                    <div>
                                        Base price
                                    </div>
                                    <div>
                                        $ {singleOrder?.subServiceID?.price}.00 /=
                                    </div>
                                </div>
                            </li>
                            {
                                Boolean(singleOrder?.subServiceID?.hide) && <li className="text-medium mb-1">
                                    <div className="w-100 d-flex justify-content-between">
                                        <div>
                                            Revisions:- 7
                                        </div>
                                        <div>
                                            $ {singleOrder?.revisions.price}.00 /=
                                        </div>
                                    </div>
                                </li>
                            }
                            {
                                parseInt(singleOrder?.sourceFiles?.price) > 0 && <li className="text-medium mb-1">
                                    <div className="w-100 d-flex justify-content-between">
                                        <div>
                                            Source files included
                                        </div>
                                        <div>
                                            $ {singleOrder?.sourceFiles?.price}.00 /=
                                        </div>
                                    </div>
                                </li>
                            }
                            {
                                parseInt(singleOrder?.expressDelivery?.price) > 0 && <li className="text-medium">
                                    <div className="w-100 d-flex justify-content-between">
                                        <div>
                                            Express delivery - <span
                                            className="text-danger">{singleOrder?.subServiceID?.expressDelivery.count} days</span>
                                        </div>
                                        <div>
                                            $ {singleOrder?.expressDelivery?.price}.00 /=
                                        </div>
                                    </div>
                                </li>
                            }
                        </ol>
                    </div>
                </CardBody>
            </Card>
            <Row className="m-1 mt-5">
                <Col sm={12} lg={7}>
                    <div className="mb-2">
                        <h3>Order Timeline</h3>
                    </div>
                    <Card className="mb-5 p-2 bg-semi-dark d-flex">
                        {
                            !timeLineLoader ? <Timeline data={cookTimeLineData()}/> : <Spinner />
                        }
                    </Card>
                </Col>
                <Col lg={5} sm={12}>
                    <div className="d-center h-100">
                        <Card className="d-flex flex-column d-center p-5">
                            <div className="d-flex flex-row align-items-baseline">
                                <div
                                    className={`bg-${handleStatusPointer(singleOrder?.orderStatus)} full-round mr-1 p-0`}
                                    style={{width: "15px", height: "15px"}}/>
                                <h1 className={`text-${handleStatusPointer(singleOrder?.orderStatus)}`}>Pending</h1>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 m-1 mb-5">
                <div className="d-flex align-items-baseline mb-2">
                    <h1 className="f-Staatliches">Source files</h1>
                </div>
                {
                    sourceFilesLoader ? <div className="w-100 d-center flex-column animate__animated animate__bounce mt-2">
                        <Spinner className="text-primary"/>
                        <p className="text-small text-primary f-courgette mt-1">cooking data...</p>
                    </div> : sourceFiles.length > 0 ? <Row className="mt-1 d-flex flex-wrap">
                        {
                            sourceFiles.map((e, index) => {
                                return <SourceFileCard key={index} data={e}/>
                            })
                        }
                    </Row> : <div className="w-100 d-center mt-2">
                        <h3 className="f-courgette text-danger">No source files shared yet !</h3>
                    </div>
                }
            </Row>
            <Footer/>
        </div>
    } else {
        return <ServiceCookLoader />
    }
}

export default OrderDetailsView
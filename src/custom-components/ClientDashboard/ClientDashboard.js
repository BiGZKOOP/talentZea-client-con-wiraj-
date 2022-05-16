import {Fragment, useEffect, useState} from "react"
import {Card, CardBody, Col, Input, Row} from "reactstrap"
import SuccessOrderSVG from "../../assets/custom_images/svg/SuccessOrderSVG"
import PendingOrderSVG from "../../assets/custom_images/svg/PendingOrderSVG"
import CanceledOrderSVG from "../../assets/custom_images/svg/CanceledOrderSVG"
import "../../assets/css/ClientDashboard.css"
import Timeline from "../../@core/components/timeline"
// eslint-disable-next-line no-unused-vars
import {time_linedata} from "../../views/apps/user/view/UserTimeline"
import {Bell, Copy} from "react-feather"
import {toast} from "react-toastify"
import {Clipboard_success_toast} from "../../views/extensions/toastify/ToastTypes"
import {useDispatch, useSelector} from "react-redux"
import {getAllOrdersByCustomerListen} from "../../custom-views/ClientProfile/actions"
import ClientDashboardOrderCard from "./ClientDashboardOrderCard"

const ClientDashboard = () => {

    const [ref, setRef] = useState("")
    const [completeOrders, setCompleteOrders] = useState(0)
    const [pendingOrders, setPendingOrders] = useState(0)
    const [onGoingOrders, setOnGoingOrders] = useState(0)

    const {user} = useSelector(state => state.loginReducer)
    const {allCustomerOrders} = useSelector(state => state.clientProfileReducer)

    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()

    const countOrderCats = () => {
        let comp = 0
        let ongoing = 0
        let pending = 0
        allCustomerOrders.map(e => {
            switch (e.orderStatus) {
                case 0:
                    pending += 1
                    break
                case 1:
                    ongoing +=  1
                    break
                case 2:
                    comp += 1
                    break
                default: break
            }
        })
        setCompleteOrders(comp)
        setOnGoingOrders(ongoing)
        setPendingOrders(pending)
    }

    useEffect(() => {
        setRef(`https://talentzea.com/home?ref=${user.referralID}`)
    }, [])

    useEffect(() => {
        if (user?._id) dispatch(getAllOrdersByCustomerListen(user?._id))
    }, [user])

    //Use this effect to handle the order counts by categories
    useEffect(() => {
        countOrderCats()
    }, [])

    const copyToClipBoard = () => {
        toast(<Clipboard_success_toast />, { icon: false, hideProgressBar: true })
        navigator.clipboard.writeText(ref)
    }

    return <div className="m-0 p-1">
        <Row className="mt-2">
            <div className="mb-2">
                <h4>Personal affliate link</h4>
            </div>
            <Col className="mb-1 d-flex" lg={5} sm={12}>
                <Input disabled value={ref}/>
                <button
                    onClick={copyToClipBoard}
                    className="btn btn-outline-warning ml-2 d-flex d-center text-small"><Copy size={18}
                                                                                              className="mr-1"/> copy
                </button>
            </Col>
            <p className="f-courgette text-medium text-danger">Share this link to get 10% discount from your next order !!!</p>
            <Row className="d-sm-center">
                <Col sm={12} lg={7}>
                    <div className="mb-2">
                        {/*<h3>Order Timeline</h3>*/}
                    </div>
                    <Card className="mb-5 p-2 bg-semi-dark d-center" style={{height: "335px"}}>
                        {/*<Timeline data={time_linedata}/>*/}
                        <h1 className="text-center f-Staatliches">Under construction</h1>
                        <h5 className="f-courgette">Shh...a new feature is coming soon !!!</h5>
                    </Card>
                </Col>
                <Col>
                    <div className="mb-2">
                        <h3>Order List ({allCustomerOrders?.length})</h3>
                    </div>
                    <Card className="overflow-auto p-2 bg-semi-dark d-center" style={{height: "310px"}}>
                        {
                            !allCustomerOrders?.length > 0 ? <div className="text-center">
                                <h3 className="f-courgette">No orders yet !</h3>
                                <h1 className="f-Staatliches text-large">Let's make an order</h1>
                                <button className="btn btn-danger mt-2 f-Staatliches text-medium">TO SERVICE</button>
                            </div> : <ClientDashboardOrderCard />
                        }
                    </Card>
                </Col>
            </Row>
            <Col lg={12} sm={12}>
                <div className="p-0 m-0">
                    <h3>Order History</h3>
                </div>
                <Row className="p-2 overflow-auto">
                    <Col lg={4} sm={12}>
                        <Card className="scalable bg-semi-dark">
                            <CardBody className="d-center flex-column">
                                <div className="w-75 d-center">
                                    <SuccessOrderSVG/>
                                </div>
                                <h3 className="f-Londrina mt-2">Complete Order count</h3>
                                <h1 className="text-success f-Londrina mb-2 font-large-2">{completeOrders}</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="mt-lg-0 mt-2" lg={4} sm={12}>
                        <Card className="scalable bg-semi-dark">
                            <CardBody className="d-center flex-column">
                                <div className="w-75 d-center">
                                    <PendingOrderSVG/>
                                </div>
                                <h3 className="f-Londrina mt-2">Pending Order count</h3>
                                <h1 className="text-warning f-Londrina mb-2 font-large-2">{pendingOrders}</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className="scalable bg-semi-dark">
                            <CardBody className="d-center flex-column">
                                <div className="w-75 d-center">
                                    <CanceledOrderSVG/>
                                </div>
                                <h3 className="f-Londrina mt-2">On going Order count</h3>
                                <h1 className="text-danger f-Londrina mb-2 font-large-2">{onGoingOrders}</h1>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}

export default ClientDashboard
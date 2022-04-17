import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, Col, Input, Row} from "reactstrap"
import Timeline from "../../@core/components/timeline"
import {time_linedata} from "../../views/apps/user/view/UserTimeline"
import {useDispatch, useSelector} from "react-redux"
import ServiceCookLoader from "../../custom-components/loaders/ServiceCookLoader"
import {useEffect} from "react"
import {getOrderByIDListen} from "./actions"
import NoneDataComp from "../../custom-components/NoneDataComp"
import Footer from "../../@core/layouts/components/footer"

const OrderDetailsView = () => {

    const pathname = window.location.pathname

    const id = pathname.split("/order/")[1]
    
    const {orderByIDLoader, orderDetails} = useSelector(state => state.orderDetailsViewReducer)
    
    const dispatch = useDispatch()

    console.log(orderDetails)
    
    useEffect(() => {
        dispatch(getOrderByIDListen(id))
    }, [])

    if (orderByIDLoader) return <ServiceCookLoader />
    else {
        if (orderDetails) {
            return <div>
                <div className="mb-3">
                    <MainNav/>
                </div>
                <div className="p-2">
                    <div className="d-flex justify-content-between mb-4">
                        <h1 className="f-Londrina"><span className="text-danger">Main Category</span> {">"} <span
                            className="text-primary">Sub Category</span></h1>
                        <button className="btn btn-primary">$ {orderDetails.amount} /=</button>
                    </div>
                    <Row>
                        <Col sm={12} lg={7}>
                            <div className="mb-2">
                                <h3>Order Timeline</h3>
                            </div>
                            <Card className="mb-5 p-2 bg-semi-dark">
                                <Timeline data={time_linedata}/>
                            </Card>
                        </Col>
                        <Col lg={5}>
                            <div className="d-center h-100">
                                <div className="d-flex align-items-baseline">
                                    <div className="bg-danger full-round mr-1 p-0" style={{width: "15px", height:"15px"}}/>
                                    <h1>Pending</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <h1 className="f-Londrina mb-2">Post your feedback</h1>
                        <Card className="bg-semi-dark p-2 m-1">
                            <Input placeholder="Type your feedback here..." className="w-100 bg-semi-dark" type="textarea"/>
                            <div className="mt-2 d-flex justify-content-end">
                                <button className="btn btn-danger">Submit</button>
                            </div>
                        </Card>
                    </Row>
                </div>
                <Footer />
            </div>
        } else {
            return <NoneDataComp />
        }
    }
}

export default OrderDetailsView
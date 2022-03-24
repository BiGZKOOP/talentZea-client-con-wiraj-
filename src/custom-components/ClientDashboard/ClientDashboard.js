import {Fragment, useEffect, useState} from "react"
import {Card, CardBody, Col, Input, Row} from "reactstrap"
import SuccessOrderSVG from "../../assets/custom_images/svg/SuccessOrderSVG"
import PendingOrderSVG from "../../assets/custom_images/svg/PendingOrderSVG"
import CanceledOrderSVG from "../../assets/custom_images/svg/CanceledOrderSVG"
import "../../assets/css/ClientDashboard.css"
import Timeline from "../../@core/components/timeline"
import {time_linedata} from "../../views/apps/user/view/UserTimeline"
import ClientDashboardOrderCard from "./ClientDashboardOrderCard"
import {Bell, Copy} from "react-feather"
import Avatar from "../../@core/components/avatar"
import {toast} from "react-toastify"
import {Clipboard_success_toast} from "../../views/extensions/toastify/ToastTypes"

const ClientDashboard = () => {

    const [ref, setRef] = useState("")

    useEffect(() => {
        setRef("http://localhost:3000/pages/profile?ref=121212")
    })

    const copyToClipBoard = () => {
        toast(<Clipboard_success_toast />, { icon: false, hideProgressBar: true })
        navigator.clipboard.writeText(ref)
    }

    return <div className="m-0 p-1">
        <Row className="mt-2">
            <div className="mb-2">
                <h4>Personal affliate link</h4>
            </div>
            <Col className="mb-3 d-flex" lg={5} sm={12}>
                <Input disabled value={ref}/>
                <button
                    onClick={copyToClipBoard}
                    className="btn btn-outline-warning ml-2 d-flex d-center text-small"><Copy size={18}
                                                                                              className="mr-1"/> copy
                </button>
            </Col>
            <Row className="d-sm-center">
                <Col sm={12} lg={7}>
                    <div className="mb-2">
                        <h3>Order Timeline</h3>
                    </div>
                    <Card className="mb-5 p-2 bg-semi-dark">
                        <Timeline data={time_linedata}/>
                    </Card>
                </Col>
                <Col>
                    <div className="mb-2">
                        <h3>Order List (2)</h3>
                    </div>
                    <Card className="overflow-auto p-2 bg-semi-dark" style={{height: "310px"}}>
                        <ClientDashboardOrderCard/>
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
                                <SuccessOrderSVG/>
                                <h4 className="f-Londrina mt-2">Complete Order count</h4>
                                <h1 className="text-success f-Londrina mb-2">12</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="mt-lg-0 mt-2" lg={4} sm={12}>
                        <Card className="scalable bg-semi-dark">
                            <CardBody className="d-center flex-column">
                                <PendingOrderSVG/>
                                <h4 className="f-Londrina mt-2">Pending Order count</h4>
                                <h1 className="text-warning f-Londrina mb-2">12</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className="scalable bg-semi-dark">
                            <CardBody className="d-center flex-column">
                                <CanceledOrderSVG/>
                                <h4 className="f-Londrina mt-2">Canceled Order count</h4>
                                <h1 className="text-danger f-Londrina mb-2">12</h1>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}

export default ClientDashboard
import {Fragment} from "react"
import {Card, CardBody, Col, Row} from "reactstrap"
import SuccessOrderSVG from "../../assets/custom_images/svg/SuccessOrderSVG"
import PendingOrderSVG from "../../assets/custom_images/svg/PendingOrderSVG"
import CanceledOrderSVG from "../../assets/custom_images/svg/CanceledOrderSVG"
import "../../assets/css/ClientDashboard.css"
import Timeline from "../../@core/components/timeline"
import {time_linedata} from "../../views/apps/user/view/UserTimeline"
import ClientDashboardOrderCard from "./ClientDashboardOrderCard"

const ClientDashboard = () => {

    return <div className="m-0 p-1">
        <Row className="mt-2" >
            <Row>
                <Col sm={12} lg={7}>
                    <div className="mb-2">
                        <h3>Order Timeline</h3>
                    </div>
                    <Card className="mb-5 p-2">
                        <Timeline data={time_linedata} />
                    </Card>
                </Col>
                <Col>
                    <div className="mb-2">
                        <h3>Order Timeline</h3>
                    </div>
                    <Card className="overflow-auto p-2" style={{height:"310px"}}>
                        <ClientDashboardOrderCard />
                    </Card>
                </Col>
            </Row>
            <Col lg={3} sm={12}>
                <div className="mb-2">
                    <h3>User Details</h3>
                </div>
                <Card className="p-2">
                    <div className="d-flex justify-content-between">
                        <p>Order date:-</p>
                        <p className="ml-2 text-success font-bold">2022.01.01</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>End date:-</p>
                        <p className="ml-2 text-info font-bold">2022.01.01</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Order status:-</p>
                        <p className="font-bold text-danger">Pending</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Category:-</p>
                        <p className="ml-2">Graphics designing</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Sub Category:-</p>
                        <p className="ml-2">Logo Designing</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Order cost:-</p>
                        <p className="ml-2 font-bold">Rs. 12,000 /=</p>
                    </div>
                </Card>
            </Col>
            <Col lg={9} sm={12}>
                <div className="p-0 m-0">
                    <h3>Order History</h3>
                </div>
                <Row className="p-2 overflow-auto">
                    <Col lg={4} sm={12}>
                        <Card className="m-0 p-0">
                            <CardBody className="d-center flex-column">
                                <SuccessOrderSVG />
                                <h4 className="f-Londrina mt-2">Complete Order count</h4>
                                <h1 className="text-success f-Londrina mb-2">12</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="mt-lg-0 mt-2" lg={4} sm={12}>
                        <Card>
                            <CardBody className="d-center flex-column">
                                <PendingOrderSVG />
                                <h4 className="f-Londrina mt-2">Pending Order count</h4>
                                <h1 className="text-warning f-Londrina mb-2">12</h1>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card>
                            <CardBody className="d-center flex-column">
                                <CanceledOrderSVG />
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
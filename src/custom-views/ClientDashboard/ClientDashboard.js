import {Fragment} from "react"
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import ProfileHeader from "../../views/pages/profile/ProfileHeader"
import Breadcrumbs from '@components/breadcrumbs'


const ClientDashboard = () => {

    return <Fragment>
        <Breadcrumbs breadCrumbTitle='Profile' breadCrumbParent='dashboard' breadCrumbActive='Profile'/>
        <div id='user-profile'>
            <Row>
                <Col sm='12'>
                    <ProfileHeader index={1}/>
                </Col>
            </Row>
            <section id='profile-info'>
            </section>
        </div>
        <Row className="mt-2">
            <Col lg={3} sm={12}>
                <div className="mb-1">
                    <h3>Order details</h3>
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
                <div className="mb-1">
                    <h3>Order History</h3>
                </div>
                <Row className="p-2 overflow-auto">
                    <Col>
                        <Card>
                            <CardBody className="d-center">
                                <h5>Complete Order count</h5>
                                {/*<Succ*/}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>s</Card>
                    </Col>
                    <Col>
                        <Card>s</Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Fragment>
}

export default ClientDashboard
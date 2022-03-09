import {Fragment} from "react"
import Breadcrumbs from '@components/breadcrumbs'
import {Card, Col, Row} from "reactstrap"
import ProfileHeader from "../../views/pages/profile/ProfileHeader"

const ClientOrders = () => {
    return <Row>
        <Breadcrumbs breadCrumbTitle='Profile' breadCrumbParent='dashboard' breadCrumbActive='Profile'/>
            <div id='user-profile'>
                <Row>
                    <Col sm='12'>
                        <ProfileHeader index={3}/>
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
                <Card className="p-2 overflow-auto">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">order date</th>
                            <th scope="col">End date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">cost</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">CD12F12</th>
                            <td>2020.01.01</td>
                            <td>2020.01.01</td>
                            <td className="text-purple font-bold">ON GOING</td>
                            <td>Web designing</td>
                            <td>Portfolio build</td>
                            <td>Rs. 120000 /=</td>
                            <td>
                                <button className="btn btn-primary">READ</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">CD12F12</th>
                            <td>2020.01.01</td>
                            <td>2020.01.01</td>
                            <td className="text-danger font-bold">PENDING</td>
                            <td>Web designing</td>
                            <td>Portfolio build</td>
                            <td>Rs. 120000 /=</td>
                            <td>
                                <button className="btn btn-primary">READ</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">CD12F12</th>
                            <td>2020.01.01</td>
                            <td>2020.01.01</td>
                            <td className="text-success font-bold">COMPLETE</td>
                            <td>Web designing</td>
                            <td>Portfolio build</td>
                            <td>Rs. 120000 /=</td>
                            <td>
                                <button className="btn btn-primary">READ</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">CD12F12</th>
                            <td>2020.01.01</td>
                            <td>2020.01.01</td>
                            <td className="text-danger font-bold">PENDING</td>
                            <td>Web designing</td>
                            <td>Portfolio build</td>
                            <td>Rs. 120000 /=</td>
                            <td>
                                <button className="btn btn-primary">READ</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Card>
            </Col>
        </Row>
    </Row>
}

export default ClientOrders
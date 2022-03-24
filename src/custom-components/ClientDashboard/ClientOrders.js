import {Card, Col, Row} from "reactstrap"

const ClientOrders = () => {
    return <Row>
        <Row className="mt-2">
            <Col lg={3} sm={12}>
                <div className="mb-1">
                    <h3>Order details</h3>
                </div>
                <Card className="p-2 bg-semi-dark">
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
                <Card className="p-2 overflow-auto bg-semi-dark">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col" className="bg-semi-dark">Order ID</th>
                            <th scope="col" className="bg-semi-dark">order date</th>
                            <th scope="col" className="bg-semi-dark">End date</th>
                            <th scope="col" className="bg-semi-dark">Status</th>
                            <th scope="col" className="bg-semi-dark">Category</th>
                            <th scope="col" className="bg-semi-dark">Sub Category</th>
                            <th scope="col" className="bg-semi-dark">cost</th>
                            <th scope="col" className="bg-semi-dark"></th>
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
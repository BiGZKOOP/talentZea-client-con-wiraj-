import {Badge, Card, Col, Row} from "reactstrap"
import {useSelector} from "react-redux"
import moment from "moment"
import {useHistory} from "react-router-dom"

const ClientOrders = () => {

    const {allCustomerOrders} = useSelector(state => state.clientProfileReducer)
    const history = useHistory()

    const handleOrderStateBadge = (state) => {
        switch (state) {
            case 0:
                return <Badge color='light-warning' pill>
                    Pending
                </Badge>
            case 1:
                return <Badge color='light-primary' pill>
                    On going
                </Badge>
            case 2:
                return <Badge color='light-success' pill>
                    Completed
                </Badge>
            default:
                break
        }
    }

    return <Row className="m-0">
        <Row className="mt-2">
            <Col lg={12} sm={12}>
                <div className="mb-1">
                    <h3>Order History</h3>
                </div>
                <Card className="p-2 overflow-auto bg-semi-dark">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col" className="bg-semi-dark">order date</th>
                            <th scope="col" className="bg-semi-dark">Status</th>
                            <th scope="col" className="bg-semi-dark">Category</th>
                            <th scope="col" className="bg-semi-dark">Sub Category</th>
                            <th scope="col" className="bg-semi-dark">cost</th>
                            <th scope="col" className="bg-semi-dark"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allCustomerOrders.map(e => {
                                return <tr>
                                    <td>{moment(e.createdAt).format("LL")}</td>
                                    <td className="text-purple font-bold">{handleOrderStateBadge(e?.orderStatus)}</td>
                                    <td>{e?.subServiceID?.mainService?.mainTopic}</td>
                                    <td>{e?.subServiceID?.mainTopic}</td>
                                    <td>Rs. {e?.amount} /=</td>
                                    <td>
                                        <button
                                            onClick={() => history.push(`/order/${e._id}`)}
                                            className="btn btn-primary">READ</button>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </Card>
            </Col>
        </Row>
    </Row>
}

export default ClientOrders
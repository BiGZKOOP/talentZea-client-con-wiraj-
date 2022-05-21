import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux"
import moment from "moment"

const ClientDashboardOrderCard = () => {

    const history = useHistory()
    const {allCustomerOrders} = useSelector(state => state.clientProfileReducer)

    console.log(allCustomerOrders)

    return <div className="w-100 overflow-auto">
        {
            allCustomerOrders.map((e, index) => {
                return <div key={index} className="w-100 order-item-card radius-10 mb-2">
                        <CardHeader className="border-bottom-secondary">
                            <h5 className="font-monospace text-small">From <span
                                className="text-primary font-bold">{moment(e?.createdAt).format("MMM Do YY")}
                        </span></h5>
                        </CardHeader>
                        <CardBody className="mt-2">
                            <h5 className="text-small">{e?.subServiceID?.mainService?.mainTopic} {">"} {e?.subServiceID?.mainTopic}</h5>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-between">
                            <h5 className="text-small">Amount: ${e?.amount}.00/=</h5>
                            <button
                                onClick={() => history.push(`/order/${e._id}`)}
                                className="btn btn-primary text-small">Show details
                            </button>
                        </CardFooter>
                    </div>
            })
        }
    </div>
}

export default ClientDashboardOrderCard
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import {useHistory} from "react-router-dom"

const ClientDashboardOrderCard = () => {

    const history = useHistory()

    const navToOrderDetailsView = () => {
        history.push("/order/62e86cda-b484-4448-b844-97b99eb88015")
    }

    return <div>
        <div className="w-100 order-item-card mb-3 radius-10">
            <CardHeader className="border-bottom-secondary">
                <h5 className="font-monospace text-small">From <span className="text-primary font-bold">2021.01.01</span> to <span
                    className="text-danger font-bold">2021.01.01</span></h5>
            </CardHeader>
            <CardBody className="mt-2">
                <h5 className="text-small">Graphics designing {">"} Logo designing</h5>
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
                <h5 className="text-small">Amount: 120000/=</h5>
                <button className="btn btn-primary text-small">Show details</button>
            </CardFooter>
        </div>
        <div className="w-100 order-item-card radius-10">
            <CardHeader className="border-bottom-secondary">
                <h5 className="font-monospace text-small">From <span className="text-primary font-bold">2021.01.01</span> to <span
                    className="text-danger font-bold">2021.01.01</span></h5>
            </CardHeader>
            <CardBody className="mt-2">
                <h5 className="text-small">Graphics designing {">"} Logo designing</h5>
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
                <h5 className="text-small">Amount: 120000/=</h5>
                <button
                    onClick={navToOrderDetailsView}
                    className="btn btn-primary text-small">Show details</button>
            </CardFooter>
        </div>
    </div>
}

export default ClientDashboardOrderCard
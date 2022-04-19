import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import {Check, Clock} from "react-feather"

const OrderCard = () => {

    return <Card>
        <CardHeader className="d-flex justify-content-between">
            <h4>Logo Designing</h4>
            <h1 className="text-warning font-bold">$ 250 /=</h1>
        </CardHeader>
        <CardBody>
            <div className="d-flex align-items-center">
                <Clock size={13} className="mr-1"/> 2 Days delivery
            </div>
        </CardBody>
        <hr/>
        <CardBody>
            <div className="d-flex flex-column">
                <p>The start of the school of the year brings joy to some children and brings dismay to some
                    children</p>
                <p><Check size={18} className="mr-1 text-success"/>The start of the school</p>
                <p><Check size={18} className="mr-1 text-success"/>The start of the school</p>
                <p><Check size={18} className="mr-1 text-success"/>The start of the school</p>
                <p><Check size={18} className="mr-1 text-success"/>The start of the school</p>
                <p><Check size={18} className="mr-1 text-success"/>The start of the school</p>
            </div>
        </CardBody>
        <CardFooter className="d-center">
            <buton className="btn btn-success w-75">Continue</buton>
        </CardFooter>
    </Card>
}

export default OrderCard
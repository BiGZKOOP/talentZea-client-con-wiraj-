import {Card, CardBody, CardFooter, CardHeader, Input, Modal, ModalBody, ModalHeader} from "reactstrap"
import {Check, Clock} from "react-feather"
import PaymentForm from "./PaymentForm"
import {useState} from "react"
import Select from "react-select"

const OrderCard = () => {

    const revisionOptions = [
        { value: 0, label: 'none' },
        { value: 1, label: '1' },
        { value: 2, label: '2' }
    ]

    const [show, setShow] = useState(false)

    return <Card className="shadow-lg">
        <CardHeader className="d-flex justify-content-between light-orange-grad">
            <h4 className="text-black-c text-large f-Staatliches">Logo Designing</h4>
            <div className="bg-light shadow-inset-light p-1 d-center radius-5">
                <h1 className="text-warning font-bold text-black-c f-Staatliches text-large p-0 m-0">$ 250 /=</h1>
            </div>
        </CardHeader>
        <CardBody className="light-orange-grad">
            <div className="d-flex align-items-center font-bold">
                <Clock size={13} className="mr-1"/> 2 Days delivery
            </div>
        </CardBody>
        <CardBody>
            <div className="d-flex flex-column">
                <p>The start of the school of the year brings joy to some children and brings dismay to some
                    children</p>
            </div>
        </CardBody>
        <CardBody className="d-flex flex-column justify-content-between mt-0 pt-0">
            <div className="mb-2">
                <h3 className="f-Staatliches">Add extras</h3>
            </div>
            <ul>
                <li>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>Number of revisions</h5>
                        </div>
                        <Select options={revisionOptions}/>
                    </div>
                    <p>(Per revision <span className="font-bold">$ 12</span>)</p>
                </li>
                <li className="mt-3">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>Source files included</h5>
                        </div>
                        <Input type="checkbox"/>
                    </div>
                    <p>(For source files <span className="font-bold">$ 12</span>)</p>
                </li>
                <li className="mt-3">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>8 hour Express delivery</h5>
                        </div>
                        <Input type="checkbox"/>
                    </div>
                    <p>(For express delivery <span className="font-bold">$ 12</span>)</p>
                </li>
            </ul>
        </CardBody>
        <CardFooter className="d-center">
            <buton onClick={() => setShow(!show)} className="btn btn-success w-75">Continue</buton>
        </CardFooter>
        {/*//////////////////////*/}
        {/*Modal starts form here*/}
        {/*//////////////////////*/}
        <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
            <ModalHeader className='bg-primary' toggle={() => setShow(!show)}>
                <h1 className="text-light f-Staatliches">Place your order</h1>
            </ModalHeader>
            <ModalBody className='px-sm-5 mx-50 pb-4'>
                <PaymentForm price={100}/>
            </ModalBody>
        </Modal>
        {/*//////////////////////*/}
        {/*Modal ended*/}
        {/*//////////////////////*/}
    </Card>
}

export default OrderCard
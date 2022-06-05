import React, {Fragment} from 'react'
import {CardElement, PaymentElement} from '@stripe/react-stripe-js'
import usePaymentForm from "../../utility/usePaymentForm"
import {useDispatch, useSelector} from "react-redux"
import {Spinner} from "reactstrap"
import {useHistory} from "react-router-dom"

const cardElementOptions = {
    style: {
        base: {
            color: "black",
            fontSize: "15px"
        },
        invalid: {
            color: "#fa755a",
            fontSize: "15px"
        }
    }
}

const ToastComponent = ({ title, icon, color }) => (
    <Fragment>
        <div className='toastify-header pb-0'>
            <div className='title-wrapper'>
                <Avatar size='sm' color={color} icon={icon} />
                <h6 className='toast-title'>{title}</h6>
            </div>
        </div>
    </Fragment>
)

const PaymentForm = ({meta_data, price, revisions, sourceFiles, expressDelivery, subServiceID}) => {

    const {user} = useSelector(state => state.loginReducer)
    // eslint-disable-next-line no-unused-vars
    const {orderLoading, orderSuccess} = useSelector(state => state.orderDetailsViewReducer)

    const dispatch = useDispatch()
    const history = useHistory()

    const { handleSubmit } = usePaymentForm(0, user, price, revisions, sourceFiles, expressDelivery, subServiceID, dispatch, history, meta_data)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <CardElement
                    options={cardElementOptions}
                    className="payment-input mt-1"/>
                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-primary">{
                        orderLoading ? <Spinner size={14}/> : "Pay"
                    }</button>
                </div>
            </div>
        </form>
    )
}

export default PaymentForm
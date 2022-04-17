import React from 'react'
import {CardElement, PaymentElement} from '@stripe/react-stripe-js'
import usePaymentForm from "../../utility/usePaymentForm"
import {useSelector} from "react-redux"

const cardElementOptions = {
    style: {
        base: {
            color: "white",
            fontSize: "15px"
        },
        invalid: {
            color: "#fa755a",
            fontSize: "15px"
        }
    }
}

const PaymentForm = () => {

    const {user} = useSelector(state => state.loginReducer)

    const { handleSubmit } = usePaymentForm(0, user)


    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-3">
                <CardElement
                    options={cardElementOptions}
                    className="payment-input mt-1"/>
                <div className="d-flex justify-content-end mt-2">
                    <button className="btn btn-primary">Pay</button>
                </div>
            </div>
        </form>
    )
}

export default PaymentForm
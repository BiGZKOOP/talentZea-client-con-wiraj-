import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {handleOrderLoaderListen, handleOrderStateListen} from "../custom-views/OrderDetailsView/actions"
import React, {Fragment} from "react"
import {toast} from "react-toastify"
import {fireAlertError} from "./custom-util"
import {getIDToken} from "./Utils"

const ToastComponent = ({id}) => (
    <Fragment>
        <div className="d-flex flex-column">
            <div className='toastify-header pb-0'>
                🎉 Order success !
            </div>
            <div className="toastify-body mt-1">
                <p className="card-subtitle">order id: {id}</p>
            </div>
        </div>
    </Fragment>
)

const handleOrderStarter = (dispatch) => {
    dispatch(handleOrderLoaderListen(true))
    dispatch(handleOrderStateListen(false))
}

const handleOrderFinisher = (dispatch) => {
    dispatch(handleOrderLoaderListen(false))
    dispatch(handleOrderStateListen(true))
}

function usePaymentForm(status, user, amount, revisions, sourceFiles, expressDelivery, subServiceID, dispatch, history) {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        handleOrderStarter(dispatch)
        event.preventDefault()

        const cardElement = elements?.getElement(CardElement)

        if (!stripe || !elements || !cardElement) {
            handleOrderFinisher(dispatch)
            return
        }

        const stripeResponse = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        }).catch(() => handleOrderFinisher(dispatch)
        )

        const {error, paymentMethod} = stripeResponse

        if (error || !paymentMethod) {
            handleOrderFinisher(dispatch)
            return
        }

        const paymentMethodId = paymentMethod.id

        const test = await fetch(`https://talent-zea-cloud.herokuapp.com/order-service`, {
            method: 'POST',
            body: JSON.stringify(({
                customerID: user._id,
                orderStatus: status,
                paymentMethodId,
                stripeCustomerId: user.stripeCustomerId,
                amount: parseInt(amount) * 100,
                revisions,
                sourceFiles,
                expressDelivery,
                subServiceID
            })),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${await getIDToken()}`
            }
        }).then((res) => {
            res.json().then(data => {
                console.log(data)
                toast.success(<ToastComponent id={data?.data?._id}/>, {
                    icon: false,
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeButton: false
                })
                handleOrderFinisher(dispatch)
                history.push(`/order/${data.data?._id}`)
            }).catch(() => {
                handleOrderFinisher(dispatch)
                fireAlertError("Hmm...", "Looks like something went wrong !")
            })
        }).catch(err => {
            handleOrderFinisher(dispatch)
            fireAlertError("Oops !", err.message)
            fireAlertError("Hmm...", "Looks like something went wrong !")
        })
        if (test) {
            console.log('test', test)
        }
    }

    return {
        handleSubmit
    }
}

export default usePaymentForm
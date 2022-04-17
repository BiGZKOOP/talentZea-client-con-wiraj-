import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function usePaymentForm() {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        console.log("Fire")
        event.preventDefault()

        // eslint-disable-next-line no-unused-vars
        const amountToCharge = 100

        const cardElement = elements?.getElement(CardElement)

        if (!stripe || !elements || !cardElement) {
            return
        }

        const stripeResponse = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        })

        const { error, paymentMethod } = stripeResponse
        console.log('stripeResponse', stripeResponse)

        if (error || !paymentMethod) {
            return
        }

        const paymentMethodId = paymentMethod.id

        const test =  await fetch(`https://talent-zea-cloud.herokuapp.com/order-service`, {
            method: 'POST',
            body: JSON.stringify(({
                customerID: "57cb7f14-dc7d-41ad-bbd1-27327690de95",
                orderStatus: 0,
                paymentMethodId,
                stripeCustomerId: "cus_LVO972oxFc9S81",
                amount: 200
            })),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => {
            console.log(err.message)
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
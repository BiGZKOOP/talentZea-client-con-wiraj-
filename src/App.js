// ** Router Import
import Router from './router/Router'
import './assets/css/theme.css'
import './assets/css/animations.css'
import Amplify from "aws-amplify"
import awsconfig from "./aws-exports"
import React, {Fragment, useEffect} from "react"
import {getAllCountriesListen} from "./custom-views/Signup/actions"
import {useDispatch} from "react-redux"
import {getCurrentUserListen} from "./views/pages/authentication/redux/actions"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import {getMainServiceByIDListen} from "./custom-views/MainService/actions"

Amplify.configure(awsconfig)

const App = () => {

    const stripePromise = loadStripe("pk_test_51KloEqJqrnEu0zMuXbtIqLeXJdYFvvustqhAZwSkVCGeML4toazedwFu3cIlyVj2Gcl7qI8NQSPI0m84MgFmVp9n00RHxbAqDh")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMainServiceByIDListen("c9d65f9f-a927-4f7a-9cfc-b2f5d7cbacc2"))
        dispatch(getCurrentUserListen())
        dispatch(getAllCountriesListen())
    }, [])

    return <Elements stripe={stripePromise}>
        <Router/>
    </Elements>
}

export default App

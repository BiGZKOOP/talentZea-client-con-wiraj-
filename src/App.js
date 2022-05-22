// ** Router Import
import Router from './router/Router'
import './assets/css/theme.css'
import './assets/css/animations.css'
import Amplify, {Auth} from "aws-amplify"
import awsconfig from "./aws-exports"
import React, {Fragment, useEffect} from "react"
import {getAllCountriesListen} from "./custom-views/Signup/actions"
import {useDispatch, useSelector} from "react-redux"
import {getCurrentUserListen} from "./views/pages/authentication/redux/actions"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import {getAllSubServicesListen} from "./custom-views/MainService/actions"

Amplify.configure(awsconfig)

const App = () => {

    const {user} = useSelector(state => state.loginReducer)

    const isLogged = async () => {
        return !!(await Auth.currentAuthenticatedUser())

    }

    useEffect(async () => {
        if (await isLogged()) window.__lc = window.__lc || {}
        window.__lc = window.__lc || {}
        window.__lc.license = 14153526
        ;(function (n, t, c) {
            const e = {
                _q: [],
                _h: null,
                _v: "2.0",
                on() {
                    // eslint-disable-next-line no-use-before-define
                    i(["on", c.call(arguments)])
                },
                once() {
                    // eslint-disable-next-line no-use-before-define
                    i(["once", c.call(arguments)])
                },
                off() {
                    // eslint-disable-next-line no-use-before-define
                    i(["off", c.call(arguments)])
                },
                get() {
                    if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.")
                    // eslint-disable-next-line no-use-before-define
                    return i(["get", c.call(arguments)])
                },
                call() {
                    // eslint-disable-next-line no-use-before-define
                    i(["call", c.call(arguments)])
                },
                init() {
                    const n = t.createElement("script")
                    // eslint-disable-next-line no-unused-expressions
                    n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n)
                }
            }

            function i(n) {
                return e._h ? e._h.apply(null, n) : e._q.push(n)
            }

            // eslint-disable-next-line no-unused-expressions
            !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e
        }(window, document, [].slice))
    }, [user])

    const stripePromise = loadStripe("pk_test_51L1PumBxZvnqnYiLWYRg80uqXcBCi6bYkwqJ4YDRlTyeOvyGQqgsjsrwr5RvvoJrKyYOTog4Q4ZHqPoJxvlvanPt00QoTIkUMh")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSubServicesListen())
        dispatch(getCurrentUserListen())
        dispatch(getAllCountriesListen())
    }, [])

    return <Elements stripe={stripePromise}>
        <Router/>
    </Elements>
}

export default App

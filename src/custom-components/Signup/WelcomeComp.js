import {CardText, CardTitle, Col} from "reactstrap"
import computer from "../../assets/images/custom_images/computer.png"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setScreenIndex} from "../../custom-views/Signup/actions"

const WelcomeComp = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const routeToLogin = () => {
        history.push("/login")
    }

    const changeScreens = () => {
        dispatch(setScreenIndex(1))
    }


    return <div className='auth-inner m-0 d-center'>
        <Col
            className='d-flex align-items-center shadow-lg bg-transparent signup-inner radius-20 auth-bg px-2 p-5'
            lg='4' sm='2'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                <CardTitle tag='h2' className='fw-bold mb-1 text-center f-Londrina'>
                    <h1 className="text-dark">WELCOME FELLOW USER</h1>
                </CardTitle>
                <CardText className='mb-2 text-center f-courgette'><h4 className="text-dark">Let's get you
                    started up</h4></CardText>
                <div>
                    <p className="f-courgette text-center text-primary">Every great thing starts from one simple
                        step...</p>
                </div>
                <div className="d-center">
                    <img src={computer} width="70%"/>
                </div>
                <div className="d-center mt-2">
                    <button
                        onClick={changeScreens}
                        className="btn btn-danger p-1">
                        CLICK HERE TO START THE JOURNEY !
                    </button>
                </div>
                <div
                    onClick={routeToLogin}
                    className="d-flex justify-content-center pointer mt-2">
                    <p className="text-dark font-bold clickable">
                        Back to login
                    </p>
                </div>
            </Col>
        </Col>
    </div>
}

export default WelcomeComp
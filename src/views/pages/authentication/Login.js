// ** React Imports
// eslint-disable-next-line no-unused-vars
import {useContext, Fragment, useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import "../../../assets/css/login.css"

// ** Image imports
// eslint-disable-next-line no-unused-vars
import source from "../../../assets/images/custom_images/water.jpg"

// ** Custom Hooks
// import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import {useDispatch, useSelector} from 'react-redux'
// import {toast, Slide} from 'react-toastify'
import {useForm, Controller} from 'react-hook-form'
import {Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, Music} from 'react-feather'

// ** Actions
// import {handleLogin} from '@store/authentication'

// ** Context
import {AbilityContext} from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
// eslint-disable-next-line no-unused-vars
import {getHomeRouteForLoggedInUser} from '@utils'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Form,
    Input,
    Label,
    Alert,
    Button,
    CardText,
    CardTitle,
    UncontrolledTooltip,
    Spinner, Modal, ModalHeader, ModalBody
} from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import {LoginListenAction} from "../../../custom-views/Signup/actions"
import {getStreet} from "../../../utility/configCalling/actions"
import OtpSend from "../../../custom-components/Signup/OtpSend"

const ToastContent = ({name, role}) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Coffee size={12}/>}/>
                <h6 className='toast-title fw-bold'>Welcome, {name}</h6>
            </div>
        </div>
        <div className='toastify-body'>
            <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
        </div>
    </Fragment>
)

const defaultValues = {
    password: '',
    loginEmail: ''
}

const Login = () => {

    const {signupLoad} = useSelector(state => state.signUpReducer)
    const [show, setShow] = useState(false)

    // ** Hooks
    const dispatch = useDispatch()
    const history = useHistory()
    // const ability = useContext(AbilityContext)
    const {
        // eslint-disable-next-line no-unused-vars
        control,
        // setError,
        // eslint-disable-next-line no-unused-vars
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        formState: {errors}
    } = useForm({defaultValues})

    useEffect(() => {
        dispatch(getStreet(1))
    }, [])

    // eslint-disable-next-line no-unused-vars
    const onSubmit = data => {
        if (Object.values(data).every(field => field.length > 0)) {
            dispatch(LoginListenAction(data.loginEmail, data.password, history))
            // useJwt
            //     .login({email: data.loginEmail, password: data.password})
            //     .then(res => {
            //         const data = {
            //             ...res.data.userData,
            //             accessToken: res.data.accessToken,
            //             refreshToken: res.data.refreshToken
            //         }
            //         dispatch(handleLogin(data))
            //         ability.update(res.data.userData.ability)
            //         history.push(getHomeRouteForLoggedInUser(data.role))
            //         toast.success(
            //             <ToastContent name={data.fullName || data.username || 'Udara j'} role={data.role || 'admin'}/>,
            //             {icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000}
            //         )
            //     })
            //     .catch(err => console.log(err))
        }
        // else {
        //     for (const key in data) {
        //         if (data[key].length === 0) {
        //             setError(key, {
        //                 type: 'manual'
        //             })
        //         }
        //     }
        // }
    }

    const routeToSignup = () => {
        history.push("/signup")
    }

    return (
        <div className='auth-wrapper auth-cover login-back p-0 m-0'>
            <div className='auth-inner m-0 d-center p-0'>
                <div
                    className='d-flex align-items-center justify-content-center shadow-lg radius-20 auth-bg px-2 p-1 col-lg-4 col-10 login-back-inner'>
                    <Col className='px-xl-2' sm='12' md='6' lg='12'>
                        <CardTitle tag='h2' className='fw-bold mb-1 text-center text-dark f-Londrina'>
                            <h1 className="f-Staatliches font-large-2 text-black-c">WELCOME TO THE <span className="text-danger">TALENT ZEA</span></h1>
                        </CardTitle>
                        <CardText className='mb-2 text-center f-Londrina text-black-c text-medium'>Creativity awaits...</CardText>
                        <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-1 mt-5'>
                                <Label className='f-shippori' for='login-email'>
                                    <h6 className="p-0 text-black-c">Email</h6>
                                </Label>
                                <Controller
                                    id='loginEmail'
                                    name='loginEmail'
                                    control={control}
                                    render={({field}) => (
                                        <Input
                                            autoFocus
                                            type='email'
                                            placeholder='john@example.com'
                                            invalid={errors.loginEmail && true}
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                            <div className='mb-2'>
                                <div className='d-flex justify-content-between'>
                                    <Label className='f-shippori' for='login-password'>
                                        <h6 className="mt-1 text-black-c">Password</h6>
                                    </Label>
                                </div>
                                <Controller
                                    id='password'
                                    name='password'
                                    control={control}
                                    render={({field}) => (
                                        <InputPasswordToggle className='input-group-merge'
                                                             invalid={errors.password && true} {...field} />
                                    )}
                                />
                            </div>
                            <div className="text-right f-Londrina mt-2 mb-1 pointer">
                                <h5
                                    onClick={() => history.push("/forgot-password")}
                                    className="text-white">forgot password ?</h5>
                            </div>
                            {
                                signupLoad && <Col className="d-center mt-2">
                                    <Spinner color="dark"/>
                                </Col>
                            }
                            <Button type='submit' color='primary' block className="p-1 mt-2 mb-3 f-Staatliches" style={{fontSize:"20px"}}>
                                Sign in
                            </Button>
                            <div className="text-center mt-2 mb-1 f-Londrina">
                                <h4 className="clickable text-light">New to the talentZea ?
                                    <span className="text-danger p-0 pointer"
                                          onClick={routeToSignup}> signup here.</span>
                                </h4>
                            </div>
                        </Form>
                        <div className="text-center mt-2 mb-1 f-Londrina">
                            <h4 className="clickable text-light" onClick={() => history.push("/pages/profile")}>Back to
                                homepage</h4>
                        </div>
                    </Col>
                </div>
            </div>
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
                <ModalHeader className='bg-primary' toggle={() => setShow(!show)}/>
                <ModalBody className='px-sm-5 mx-50 pb-4 mt-2'>
                    <OtpSend widthLG={12}/>
                </ModalBody>
            </Modal>
            {/*//////////////////////*/}
            {/*Modal ended*/}
            {/*//////////////////////*/}
        </div>
    )
}

export default Login

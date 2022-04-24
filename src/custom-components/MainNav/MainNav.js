import {Button, Collapse, DropdownItem, Nav, Navbar, NavItem, NavLink} from "reactstrap"
import {AlignJustify, Briefcase, Home, Info, Key, LogIn, LogOut, Phone, Power, Rss} from "react-feather"
import {useEffect, useState} from "react"
import {Link, useHistory} from "react-router-dom"
import logo from "../../assets/custom_images/logo.png"
import UserDropdown from "../../@core/layouts/components/navbar/UserDropdown"
import Avatar from "../../@core/components/avatar"
import {isUserLoggedIn} from '@utils'
import {useDispatch} from "react-redux"
// import {handleLogout} from '@store/authentication'
import {signoutListen} from "../../custom-views/Signup/actions"

const MainNav = ({index}) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const dispatch = useDispatch()

    // eslint-disable-next-line no-unused-vars
    const [userData, setUserData] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if (isUserLoggedIn() !== null) {
            setUserData(JSON.parse(localStorage.getItem('userData')))
        }
    }, [])

    const HandlesignoutUser = () => {
        dispatch(signoutListen(history))
    }

    // eslint-disable-next-line no-unused-vars
    const linkActive = (indexNumber) => {
        return index === indexNumber
    }

    return <Navbar container={false}
                   className='d-flex justify-content-between bg-transparent justify-content-md-between w-100 z-index-1000'
                   expand='md' light>
        <div className="brand-name ml-2 ml-lg-0">
            <img width="100px" className="object-fit" src={logo}/>
        </div>
        <Button color='dark' className='btn-icon navbar-toggler mr-2' onClick={toggle}>
            <AlignJustify size={21}/>
        </Button>
        <Collapse isOpen={isOpen} navbar>
            <div className='profile-tabs d-flex justify-content-between w-100 flex-wrap mt-1 mt-md-0'>
                <div className="ml-2 mt-0 p-0 ml-lg-0 brand-nav-img clickable"
                     onClick={() => history.push("/")}
                >
                    <img width="120px" className="object-fit" src={logo}/>
                </div>
                <div className="d-flex m-0 p-0">
                    <Nav className='mb-0' pills>
                        <NavItem className="ml-5">
                            <NavLink
                                onClick={() => history.push("/home")}
                                className='fw-bold' active={linkActive(1)}>
                                <span className='d-none d-md-block text-light clickable text-large f-Staatliches'>Home</span>
                                <Home className='d-block d-md-none' size={14}/>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                onClick={() => history.push("/contact")}
                                className='fw-bold' active={linkActive(3)}>
                                <span className='d-none d-md-block text-light text-large clickable f-Staatliches'>Contact</span>
                                <Phone className='d-block d-md-none' size={14}/>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                // onClick={() => history.push("/home#service")}
                                className='fw-bold' active={linkActive(4)}>
                            <span className='d-none d-md-block clickable'>
                                <a href="http://localhost:3000/home#service"
                                   className="text-decoration-none text-light text-large f-Staatliches">Service</a>
                            </span>

                                <Phone className='d-block d-md-none' size={14}/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <div className="d-flex align-items-center m-0 p-0">
                                <div className="mr-2">
                                    {
                                        isUserLoggedIn() && <button
                                            className="w-100 clickable cursor-pointer text-mid-large f-Staatliches btn btn-gradient-danger"
                                            onClick={() => HandlesignoutUser()}>
                                            Logout
                                        </button>
                                    }
                                    {
                                        !isUserLoggedIn() &&
                                        <button
                                            className="w-100 clickable btn btn-gradient-success text-mid-large cursor-pointer f-Staatliches"
                                            onClick={() => history.push("/login")}>
                                            Login
                                        </button>
                                    }
                                </div>
                                <div className="clickable mr-2">
                                    {
                                        isUserLoggedIn() && <Avatar
                                            onClick={() => history.push("/pages/profile")}
                                            img={"https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png"}
                                            imgHeight='40' imgWidth='40' status='online'/>
                                    }
                                </div>
                            </div>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </Collapse>
    </Navbar>
}

export default MainNav
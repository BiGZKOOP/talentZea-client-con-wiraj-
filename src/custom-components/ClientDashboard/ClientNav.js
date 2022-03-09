import {Button, Collapse, Nav, Navbar, NavItem, NavLink} from "reactstrap"
import {AlignJustify, Edit, Image, Info, Rss, Users} from "react-feather"
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {handleScreenIndex} from "../../custom-views/ClientProfile/actions"

const ClientNav = () => {

    const {screenIndex} = useSelector(state => state.clientProfileReducer)

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const dispatch = useDispatch()

    // eslint-disable-next-line no-unused-vars
    const linkActive = (indexNumber) => {
        return screenIndex === indexNumber
    }

    const handleScreen = (index) => {
        dispatch(handleScreenIndex(index))
    }


    return <Navbar container={false} className='justify-content-end justify-content-md-between w-100' expand='md' light>
        <Button color='dark' className='btn-icon navbar-toggler' onClick={toggle}>
            <AlignJustify size={21}/>
        </Button>
        <Collapse isOpen={isOpen} navbar>
            <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                <Nav className='mb-0' pills>
                    <NavItem>
                        <NavLink
                            onClick={() => {
                                handleScreen(1)
                            }}
                            className='fw-bold' active={linkActive(1)}>
                            <span className='d-none d-md-block'>Dashboard</span>
                            <Info className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => {
                                handleScreen(2)
                            }}
                            className='fw-bold' active={linkActive(2)}>
                            <span className='d-none d-md-block'>Order History</span>
                            <Info className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => {
                                handleScreen(3)
                            }}
                            className='fw-bold' active={linkActive(3)}>
                            <span className='d-none d-md-block'>Profile Update</span>
                            <Rss className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Collapse>
    </Navbar>
}

export default ClientNav
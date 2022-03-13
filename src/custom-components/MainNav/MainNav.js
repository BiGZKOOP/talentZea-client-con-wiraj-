import {Button, Collapse, Nav, Navbar, NavItem, NavLink} from "reactstrap"
import {AlignJustify, Info, Rss} from "react-feather"
import {useState} from "react"
import {useHistory} from "react-router-dom"

const MainNav = ({index}) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const history = useHistory()

    // eslint-disable-next-line no-unused-vars
    const linkActive = (indexNumber) => {
        return index === indexNumber
    }

    return <Navbar container={false}
                   className='d-flex justify-content-between justify-content-md-between w-100 bg-transparent'
                   expand='md' light>
        <div className="brand-name">
            <h1>TalentZEA</h1>
        </div>
        <Button color='dark' className='btn-icon navbar-toggler' onClick={toggle}>
            <AlignJustify size={21}/>
        </Button>
        <Collapse isOpen={isOpen} navbar>
            <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
                <Nav className='mb-0' pills>
                    <NavItem>
                        <NavLink
                            onClick={() => history.push("/home")}
                            className='fw-bold' active={linkActive(1)}>
                            <span className='d-none d-md-block'>Home</span>
                            <Info className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => history.push("/our-works")}
                            className='fw-bold' active={linkActive(2)}>
                            <span className='d-none d-md-block'>Our Works</span>
                            <Info className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => history.push("/contact")}
                            className='fw-bold' active={linkActive(3)}>
                            <span className='d-none d-md-block'>Contact</span>
                            <Rss className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Collapse>
    </Navbar>
}

export default MainNav
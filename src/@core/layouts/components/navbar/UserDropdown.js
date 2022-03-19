// ** React Imports
import {Link, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import {isUserLoggedIn} from '@utils'

// ** Store & Actions
import {useDispatch, useSelector} from 'react-redux'
import {handleLogout} from '@store/authentication'

// ** Third Party Components
import {User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power, Key} from 'react-feather'

// ** Reactstrap Imports
import {UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import {signoutListen} from "../../../../custom-views/Signup/actions"

const UserDropdown = () => {
    // ** Store Vars
    const dispatch = useDispatch()

    // ** State
    const {user} = useSelector(state => state.loginReducer)
    const [userData, setUserData] = useState(null)

    //** ComponentDidMount
    useEffect(() => {
        if (isUserLoggedIn() !== null) {
            setUserData(JSON.parse(localStorage.getItem('userData')))
        }
    }, [])

    const history = useHistory()

    const HandlesignoutUser = () => {
        dispatch(signoutListen(history))
    }

    console.log(user)

    //** Vars
    const userAvatar = (userData && userData.avatar) || defaultAvatar

    return (
        <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
            <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
                <div className='user-nav d-sm-flex d-none'>
                    <span className='user-name fw-bold'>{(user && user?.name) || 'Anonymous'}</span>
                    <span className='user-status'>customer</span>
                </div>
                <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online'/>
            </DropdownToggle>
            <DropdownMenu end className="pb-0">
                <DropdownItem tag={Link} to='/pages/profile'>
                    <User size={14} className='me-75'/>
                    <span className='align-middle'>Profile</span>
                </DropdownItem>
                <DropdownItem tag={Link} to='/apps/email'>
                    <Mail size={14} className='me-75'/>
                    <span className='align-middle'>Inbox</span>
                </DropdownItem>
                {
                    isUserLoggedIn() && <DropdownItem className="btn btn-danger w-100" onClick={() => HandlesignoutUser()}>
                        <Power size={14} className='me-75'/>
                        <span className='align-middle'>Logout</span>
                    </DropdownItem>
                }
                {
                    !isUserLoggedIn() && <DropdownItem className="btn btn-danger" tag={Link} to='/login'
                                                     onClick={() => dispatch(handleLogout())}>
                        <Key size={14} className='me-75'/>
                        <span className='align-middle'>Login</span>
                    </DropdownItem>
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default UserDropdown

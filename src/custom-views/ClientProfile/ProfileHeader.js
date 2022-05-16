// ** Reactstrap Imports
import {Card, CardImg} from 'reactstrap'
import ClientNav from "../../custom-components/ClientDashboard/ClientNav"
import {useDispatch, useSelector} from "react-redux"
import {profileImageUpdateListen} from "./actions"
import {fallback} from "./consts"
import {useEffect} from "react"
import {getAllOrdersListen} from "../ClientOrders/actions"
import "../../assets/css/dashboard.css"

const ProfileHeader = ({index}) => {

    //Selectors
    const {user} = useSelector(state => state.loginReducer)

    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()

    const uploadProfileImage = (file) => {
        dispatch(profileImageUpdateListen({
            id: user._id,
            user,
            image: file
        }, dispatch))
    }
    
    const handleFallBack = () => {
        
        if (user?.image) return user?.image
        else return fallback
    }

    useEffect(() => {
        dispatch(getAllOrdersListen(user._id))
    }, [])

    return (
        <Card className='profile-header mb-2'>
            <label>
                <CardImg height={"400px"} className="object-fit" src={"https://wallpaperaccess.com/full/967674.jpg"}
                         alt='User Profile Image' top/>
            </label>
            <input hidden type="file" id="coverImg"/>
            <div className='position-relative'>
                <div className='profile-img-container d-flex align-items-center'>
                    <div className='profile-img object-fit border-white pointer'>
                        <label for="profImg" className="pointer">
                            <img className='rounded img-fluid object-fit' width="200px" height="200px"
                                 src={handleFallBack()}
                                 alt='Card image'/>
                        </label>
                        <input onChange={e => uploadProfileImage(e.target.files[0])} hidden type="file" multiple id="profImg"/>
                    </div>
                    <div className='profile-title ms-3'>
                        <h2 className='text-white'>{user?.name ? user.name : "Anonymous"}</h2>
                        <p className='text-white'>Customer</p>
                    </div>
                </div>
            </div>
            <div className='profile-header-nav'>
                <ClientNav index={index}/>
            </div>
        </Card>
    )
}

export default ProfileHeader

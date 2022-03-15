// ** Reactstrap Imports
import {Card, CardImg} from 'reactstrap'
import ClientNav from "../../custom-components/ClientDashboard/ClientNav"

const ProfileHeader = ({index}) => {

    return (
        <Card className='profile-header mb-2'>
            <label for="coverImg">
                <CardImg height={"400px"} className="object-fit" src={"https://wallpaperaccess.com/full/967674.jpg"}
                         alt='User Profile Image' top/>
            </label>
            <input hidden type="file" id="coverImg"/>
            <div className='position-relative'>
                <div className='profile-img-container d-flex align-items-center'>
                    <div className='profile-img object-fit border-white pointer'>
                        <label for="profImg" className="pointer">
                            <img className='rounded img-fluid object-fit' width="200px" height="200px"
                                 src={"https://cdn.vox-cdn.com/thumbor/48ExsWf9xBecr-aK18m01PRLVio=/95x601:1280x1460/1400x933/filters:focal(538x858:742x1062):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png"}
                                 alt='Card image'/>
                        </label>
                        <input hidden type="file" id="profImg"/>
                    </div>
                    <div className='profile-title ms-3'>
                        <h2 className='text-white'>Janith malli</h2>
                        <p className='text-white'>Software enginner</p>
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

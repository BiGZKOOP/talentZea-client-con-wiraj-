// ** React Imports
import {Fragment} from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import {Row, Col, Button, Card, Input, Label, Form} from 'reactstrap'

// ** Demo Components
import ProfileHeader from './ProfileHeader'

// ** Styles
import '@styles/react/pages/page-profile.scss'
import 'react-phone-input-2/lib/style.css'
import '../../assets/css/signup.css'
import ClientDashboard from "../../custom-components/ClientDashboard/ClientDashboard"
import {useSelector} from "react-redux"
import ClientOrders from "../../custom-components/ClientDashboard/ClientOrders"
import ClientProfile from "../../custom-components/ClientDashboard/ClientProfile"
import AudioBtn from "../../custom-components/audioControl/AudioBtn"
import MainNav from "../../custom-components/MainNav/MainNav"
import Footer from "../../@core/layouts/components/footer"

const Profile = () => {

    const {screenIndex} = useSelector(state => state.clientProfileReducer)

    const handleScreen = () => {
        switch (screenIndex) {
            case 1:
                return <ClientDashboard/>
            case 2:
                return <ClientOrders/>
            case 3:
                return <ClientProfile/>
        }
    }

    return (
        <Fragment>
            <div className="p-1 mb-lg-0 w-100 position-sticky main-service-back">
                <MainNav index={2}/>
            </div>
            <div id='user-profile'>
                <Row>
                    <Col sm='12'>
                        <ProfileHeader index={2}/>
                    </Col>
                </Row>
                <section id='profile-info'>
                    <Row className="p-lg-2">
                        {handleScreen()}
                    </Row>
                </section>
            </div>
            <AudioBtn/>
            <Footer/>
        </Fragment>
    )
}

export default Profile

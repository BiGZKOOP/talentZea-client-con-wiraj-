import {Fragment} from "react"
import Breadcrumbs from '@components/breadcrumbs'
import {Col, Row} from "reactstrap"
import ProfileHeader from "../../views/pages/profile/ProfileHeader"

const ClientOrders = () => {
    return <Fragment>
        <Breadcrumbs breadCrumbTitle='Profile' breadCrumbParent='dashboard' breadCrumbActive='Profile'/>
            <div id='user-profile'>
                <Row>
                    <Col sm='12'>
                        <ProfileHeader index={3}/>
                    </Col>
                </Row>
                <section id='profile-info'>
                </section>
            </div>
    </Fragment>
}

export default ClientOrders
// ** Icons Import
import {Facebook, Heart, Instagram, Mail, Phone} from 'react-feather'
import {Card} from "reactstrap"
import {useHistory} from "react-router-dom"

const Footer = () => {

    const history = useHistory()

    const navToSocial = (url) => {
        console.log(url)
        window.location.href = url
    }

    return (
        <Card className="m-0 main-service-back container-fluid text-light p-1 d-center bg-semi-dark">
            <p className="f-Staatliches">Connect with us</p>
            <div className="d-flex mb-1">
                <Facebook
                    onClick={() => navToSocial("https://www.facebook.com/TalentZea")}
                    className="mr-1 scalable cursor-pointer"/>
                <Instagram
                    onClick={() => navToSocial("https://www.instagram.com/talent_zea/")}
                    className="mr-1 scalable cursor-pointer"/>
                <Mail
                    onClick={() => history.push("/contact")}
                    className="mr-1 scalable cursor-pointer"/>
                <Phone
                    onClick={() => history.push("/contact")}
                    className="mr-1 scalable cursor-pointer"/>
            </div>
            <p className='clearfix mb-0 word-break-all'>
      <span className='float-md-start d-block d-md-inline-block f-Londrina text-medium'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
          <span className="text-purple font-bold text-large f-courgette">Talent Zea</span>
          , All rights Reserved
      </span>
            </p>
        </Card>
    )
}
export default Footer

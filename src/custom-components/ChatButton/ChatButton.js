import {Card} from "reactstrap"
import { MessageSquare} from "react-feather"
import {fireAlertCustom} from "../../utility/custom-util"
import {Auth} from "aws-amplify"
import {useEffect, useState} from "react"


const ChatButton = () => {
    
    const [logged, setLogged] = useState(false)

    useEffect(async () => {
        if (await Auth.currentAuthenticatedUser()) setLogged(true)
    }, [])

    const alertFire = () => {
        fireAlertCustom("Oops !", "Please sign in to chat with us", "warning")
    }

    return <Card hidden={logged} onClick={alertFire} className="chat-btn d-center clickable">
        <MessageSquare size={30} className="text-light font-bold"/>
    </Card>
}

export default ChatButton
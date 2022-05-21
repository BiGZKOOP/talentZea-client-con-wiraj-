import {Card} from "reactstrap"
import {useHistory} from "react-router-dom"

const MainServiceTabs = ({topic, id}) => {

    const history = useHistory()

    return <Card
        onClick={() => {
            history.push(`/service/${id}`)
        }}
        className="mr-2 p-1 scalable cursor-pointer">
        <p className="m-0 p-0">{topic}</p>
    </Card>

}

export default MainServiceTabs
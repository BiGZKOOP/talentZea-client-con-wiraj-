import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import {Clipboard} from "react-feather"
import moment from "moment"

const SourceFileCard = ({data}) => {

    const getTheDownloadFile = () => {
        window.open(data.sourceFile, "_blank")
    }

    return <Card className="mr-2 p-0 w-sm-100" style={{width: "31%"}}>
        <CardHeader className="bg-gradient-primary text-light m-0 text-small lead font-bold">
            <div className="d-flex align-items-center">
                <Clipboard className="mr-1"/>
                Main source
                files
            </div>
            <div>{moment(data?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</div>
        </CardHeader>
        <CardBody>
            <div className="mt-2">
                <p>{data.description}</p>
            </div>
        </CardBody>
        <CardFooter>
            <div className="w-100 d-flex justify-content-end">
                <button
                    onClick={getTheDownloadFile}
                    className="btn btn-foursquare">Get the file</button>
            </div>
        </CardFooter>
    </Card>
}

export default SourceFileCard
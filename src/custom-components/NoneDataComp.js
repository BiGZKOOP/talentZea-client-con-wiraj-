import {useHistory} from "react-router-dom"

const NoneDataComp = () => {

    const history = useHistory()

    return <div className="full-page d-center flex-column">
        <div className="animate__animated animate__bounce">
            <h1 className="f-Londrina font-large-5 text-danger">OOPS !</h1>
        </div>
        <div>
            <h1 className="f-Londrina text-center">Hmm...Looks like requested data are <span className="text-danger">missing !</span></h1>
        </div>
        <div>
            <button
                onClick={() => history.goBack()}
                className="btn btn-outline-warning mt-2 font-large-1">Go back !</button>
        </div>
    </div>
}

export default NoneDataComp
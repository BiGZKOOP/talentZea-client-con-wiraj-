import {useHistory} from "react-router-dom"

const NoneDataComp = () => {

    const history = useHistory()

    return <div className="full-page d-center flex-column none-data-back">
        <div className="d-center flex-column shadow-lg-custom p-5 radius-10 none-data-back-inner">
            <div className="">
                <h1 className="f-Staatliches font-large-5 text-light text-shadow-sm">OOPS !</h1>
            </div>
            <div>
                <h1 className="f-Londrina text-center text-light text-shadow-sm">Hmm...Looks like an <span className="text-warning">error</span> occurred go back !</h1>
            </div>
            <div>
                <button
                    onClick={() => history.goBack()}
                    className="btn btn-gradient-primary mt-2 font-large-1">Go back !</button>
            </div>
        </div>
    </div>
}

export default NoneDataComp
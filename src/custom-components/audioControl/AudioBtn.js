import "../../assets/css/audio.css"
import {Card} from "reactstrap"
import {Music, VolumeX} from "react-feather"
import {useDispatch, useSelector} from "react-redux"
import {audioHandle, audioModelLoad} from "./action"

const AudioBtn = () => {

    const {welcomeAudio, playAudio} = useSelector(state => state.audioReducer)
    const dispatch = useDispatch()

    const playAudioHandle = async () => {
        dispatch(audioHandle(!playAudio))
        dispatch(audioModelLoad())
        if (playAudio) await welcomeAudio.pause()
        else await welcomeAudio.play()
        welcomeAudio.volume = 0.2
    }

    return <Card onClick={playAudioHandle} className="audio-btn d-center clickable">
        {playAudio && <VolumeX />}
        {!playAudio && <Music />}
    </Card>
}

export default AudioBtn
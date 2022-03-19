import axios from "axios"

const instance = axios.create({
    baseURL: "https://talent-zea-cloud.herokuapp.com/"
})

export default instance

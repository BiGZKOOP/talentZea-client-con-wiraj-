// ** Router Import
import Router from './router/Router'
import './assets/css/theme.css'
import './assets/css/animations.css'
import Amplify from "aws-amplify"
import awsconfig from "./aws-exports"

Amplify.configure(awsconfig)

const App = () => <Router/>

export default App

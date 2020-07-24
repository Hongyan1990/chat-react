import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import App from '../components/App'


export default withRouter(connect(state=>({isAuth: state.userInfo.isAuth}))(App))
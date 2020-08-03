import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import cookie from "../util/cookie";
import {getUserInfoById} from "../actions";

class Authority extends React.Component {
  componentDidMount() {
    const defaultRoute = ['/login', '/register'];
    const pathName = this.props.location.pathname;
    if(defaultRoute.indexOf(pathName)>-1) {
      return null;
    }
    const userId = cookie.getCookie('userToken');
    if(!userId) {
      this.props.history.push('/login')
    } else {
      this.props.getUserInfoById(userId);
    }
  }
  render () {
    return null
  }
}

export default withRouter(connect(state=>({isAuth: state.userInfo.isAuth}), {getUserInfoById})(Authority))
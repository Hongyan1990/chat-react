import * as React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
// import axios from 'axios';
import {connect} from "react-redux";
import cookie from "../util/cookie";

class Authority extends React.Component {
  componentDidMount() {
    // console.log(this.props.location)
    const defaultRoute = ['/login', '/register'];
    const pathName = this.props.location.pathname;
    if(defaultRoute.indexOf(pathName)>-1) {
      return null;
    }
    const userId = cookie.getCookie('userToken');
    if(userId) {
      fetch(`/api/user?id=${userId}`)
        .then((res) => {
          console.log(res)
          if(res.code !== 0) {
            this.props.history.push('/login')
          }
        })
        .catch(err => {
          this.props.history.push('/login')
        })
    } else {
      this.props.history.push('/login')
    }

  }
  render () {
    return null
  }
}

export default withRouter(connect(state=>({isAuth: state.userInfo.isAuth}))(Authority))
import {connect} from "react-redux";

import {login} from "../actions";
import Login from "../components/Login";

function mapStateToProps(state) {
  return {
    name: state.userInfo.name,
    role: state.userInfo.role,
    errMsg: state.userInfo.errMsg,
    redirectPath: state.userInfo.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (userInfo) => dispatch(login(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
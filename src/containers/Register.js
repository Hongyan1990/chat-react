import {connect} from "react-redux";

import {register} from "../actions";
import Register from "../components/Register";

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
    registerUser: (userInfo) => dispatch(register(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
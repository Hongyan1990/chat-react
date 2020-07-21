import {connect} from "react-redux";

import {register} from "../actions";
import Register from "../components/Register";

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (userInfo) => dispatch(register(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
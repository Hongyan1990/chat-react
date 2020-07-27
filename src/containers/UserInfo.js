import * as React from 'react';
import {connect} from "react-redux";
import Boss from '../components/UserInfo/Boss';
import Bull from '../components/UserInfo/Bull';


class UserInfo extends React.Component {
  render() {
    const {role} = this.props;
    return (
      <div>
        {role === 1 ? <Boss/> : <Bull/> }
      </div>
    )
  }
}


export default connect(state => ({role: state.userInfo.role}))(UserInfo);
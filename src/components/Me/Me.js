import * as React from 'react';
import {connect} from "react-redux";
import {Result} from "antd-mobile";

class Me extends React.Component {
  render() {
    const {name, role, avatar} = this.props;
    return (
      <div>
        <Result
          img={avatar?<img src={require(`../../static/${avatar}.png`)} style={{width: 50}} />: null}
          title={name}
        />
      </div>
    )
  }
}

export default connect(state => ({
  name: state.userInfo.name,
  role: state.userInfo.role,
  avatar: state.userInfo.avatar
}))(Me)

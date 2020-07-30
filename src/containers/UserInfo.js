import * as React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Button} from "antd-mobile";

import {updateUserInfo} from "../actions";
import cookie from "../util/cookie";
import Boss from '../components/UserInfo/Boss';
import Bull from '../components/UserInfo/Bull';


class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: 'abigail'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  handleClick(e) {
    this.setState({avatar: e.text})
  }

  handleChange(key, v) {
    this.setState({[key]: v})
  }

  saveInfo() {
    const id = cookie.getCookie('userToken');
    let jsonData = {};
    if(id) {
      jsonData['id'] = id;
      jsonData['avatar'] = this.state.avatar;
      jsonData = {...this.state, 'publisher_id': id}
      this.props.updateUserInfo(jsonData)
    }
  }

  render() {
    const {id} = this.props.match.params;
    const {redirectPath} = this.props;
    const {avatar} = this.state;
    const imgUrl = require( `../static/${avatar}.png`)
    console.log(this.props)
    return (
      <div>
        {redirectPath ? <Redirect to={redirectPath} /> : null}
        <p>
          <img src={imgUrl} alt="" width={30}/>
          <span style={{fontSize: 12}}>这是你选中的新头像哦</span>
        </p>
        {id === "1" ? <Boss onClick={this.handleClick} onChange={this.handleChange} /> : <Bull  onClick={this.handleClick} onChange={this.handleChange}/> }
        <Button type="primary" onClick={this.saveInfo}>提 交</Button>
      </div>
    )
  }
}


export default connect(state => ({role: state.userInfo.role, redirectPath: state.userInfo.redirectPath}), {updateUserInfo})(UserInfo);
import * as React from 'react';
import {Button, WingBlank, WhiteSpace, List, InputItem} from "antd-mobile";
import {Redirect} from 'react-router-dom'
import logoUrl from '../../static/job.png'
import './index.css'

class Login extends React.Component {
  state = {};
  handleClick() {
    console.log(this.props);
    this.props.history.push('/register')
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  handleLogin() {
    this.props.loginUser(this.state)
  }

  render() {
    return (
      <div>
        <div className="logo-wrap">
          <img src={logoUrl} alt=""/>
        </div>
        {this.props.redirectPath ? <Redirect to={this.props.redirectPath}/> : null}
        <WingBlank>
          {this.props.errMsg ? <p className="err-tip">{this.props.errMsg}</p>: null}
          <WhiteSpace/>
          <List>
            <InputItem name="user" onChange={v => this.handleChange('name', v)}>用户名</InputItem>
            <InputItem name="pwd" type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={() => this.handleLogin()}>登 录</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={() => this.handleClick()}>注 册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
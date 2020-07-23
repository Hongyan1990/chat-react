import * as React from 'react';
import {Button, WingBlank, WhiteSpace, List, InputItem, Radio} from "antd-mobile";

import logoUrl from '../../static/job.png'
import './index.css'

class Register extends React.Component {
  state = {
    role: 0
  };
  handleClick() {
    console.log(this.state)
    this.props.registerUser(this.state)
  }

  onChange(v) {
    this.setState({role: v})
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    const RadioItem = Radio.RadioItem;
    const data = [
      { value: 0, label: '牛人' },
      { value: 1, label: 'Boss' },
    ];
    const {role} = this.state;
    return (
      <div>
        <div className="logo-wrap">
          <img src={logoUrl} alt=""/>
        </div>

        <WingBlank>
          {this.props.errMsg ? <p className="err-tip">{this.props.errMsg}</p>: null}
          <WhiteSpace/>
          <List>
            <InputItem name="user" onChange={v => this.handleChange('name', v)}>用户名</InputItem>
            <InputItem name="pwd" type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
            <InputItem name="pwd2" type="password" onChange={v => this.handleChange('pwd2', v)}>确认密码</InputItem>
          </List>
          <WhiteSpace/>
          <List>
            {data.map(i => (
              <RadioItem key={i.value} checked={role === i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={() => this.handleClick()}>注 册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register
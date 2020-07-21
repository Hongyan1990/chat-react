import * as React from 'react';
import {Button, WingBlank, WhiteSpace} from "antd-mobile";

import logoUrl from '../../static/job.png'
import './index.css'

class Login extends React.Component {

  handleClick() {
    console.log(this.props);
    this.props.history.push('/register')
  }

  render() {
    return (
      <div>
        <div className="logo-wrap">
          <img src={logoUrl} alt=""/>
        </div>

        <WingBlank>
          <WhiteSpace/>
          <Button type="primary">登 录</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={() => this.handleClick()}>注 册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
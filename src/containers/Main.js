import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {NavBar} from "antd-mobile";

import TabLink from "../components/TabLink/TabLink";
import Me from "../components/Me/Me";

function Boss() {
  return <h2>Boss</h2>
}
function Genius() {
  return <h2>Genius</h2>
}
function Message() {
  return <h2>Msg</h2>
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: (document.documentElement.clientHeight - 95),
      selectedTab: 'Job'
    }
  }

  render() {
    const {role} = this.props;
    const navList = [
      {
        path: '/list/boss',
        name: '牛人',
        icon: 'job',
        title: '牛人列表',
        hide: role===0,
        component: Boss
      },
      {
        path: '/list/genius',
        name: 'boss',
        icon: 'job',
        title: 'Boss列表',
        hide: role===1,
        component: Genius
      },
      {
        path: '/list/msg',
        name: '消息',
        icon: 'msg',
        title: '消息',
        component: Message
      },
      {
        path: '/list/me',
        name: '我',
        icon: 'me',
        title: '我的信息',
        component: Me
      },
    ];

    return (
      <div>
        <Redirect to={role===0 ? '/list/genius': '/list/boss'} />
        <NavBar className="fixd-header" mode="dark" leftContent="NavBar" />
        <div style={{height: this.state.height+'px', marginTop: '45px'}}>
          <Switch>
            {
              navList.map(v => (
                <Route path={v.path} key={v.path} exact={true} component={v.component} />
              ))
            }
          </Switch>
        </div>
        <TabLink navList={navList} />
      </div>
    )
  }
}

export default connect(state=>({role: state.userInfo.role}))(Main)
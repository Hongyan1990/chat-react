import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {NavBar} from "antd-mobile";

import TabLink from "../components/TabLink/TabLink";
import Me from "../components/Me/Me";
import Boss from "../containers/Boss";
import Genius from "../containers/Genius";

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
    const {pathname} = this.props.location;
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
    const currentPageInfo = navList.find(v => pathname === v.path);
    return role !== null ? (
      <div>
        <Redirect to={role===0 ? '/list/genius': '/list/boss'} />
        <NavBar className="fixd-header" mode="dark" leftContent={currentPageInfo?currentPageInfo.title: ''} />
        <div style={{ marginTop: '45px', marginBottom: '55px'}}>
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
    ) : (<Redirect to='/login' />)
  }
}

export default connect(state=>({role: state.userInfo.role}))(Main)
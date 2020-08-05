import * as React from 'react';
import * as moment from 'moment';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {Result, WhiteSpace, List, Button, Modal} from "antd-mobile";
import cookie from '../../util/cookie';

import {getJobsById, logoutSubmit} from "../../actions";

class Me extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getJobsById(this.props.id);

  }

  logout() {
    console.log(123)
    const alert = Modal.alert;
    alert('注销', '确认要退出登录吗？', [
      {text: '取消', onPress: () => console.log('cancel')},
      {text: '确认', onPress: () => {
        cookie.setCookie('userToken', null, -1);
        this.props.logoutSubmit();
      }}
    ])

  }

  render() {
    const {name, role, avatar, jobs, redirectPath} = this.props;
    const Item = List.Item;
    const Brief = Item.Brief;
    return name ? (
      <div>
        <Result
          img={avatar?<img src={require(`../../static/${avatar}.png`)} style={{width: 50}} />: null}
          title={name}
          message={`我是${role===1?'Boss': '牛人'}`}
        />
        <List renderHeader={() => '我的发布'}>
          {
            jobs.map(v => (
              <Item key={v.id}>
                {v.title}
                <Brief>
                  薪资：{v.salary}
                  <br/>
                  工作地点：{v.work_place}
                  <br/>
                  发布时间：{moment(v.created_at).format('YYYY-MM-DD HH:mm:ss')}
                </Brief>
              </Item>
            ))
          }
        </List>
        <WhiteSpace/>
        <Button onClick={() => this.logout()}>退出</Button>
      </div>
    ): <Redirect to={redirectPath} />
  }
}

export default connect(state => ({
  id: state.userInfo.id,
  name: state.userInfo.name,
  role: state.userInfo.role,
  avatar: state.userInfo.avatar,
  jobs: state.list,
  redirectPath: state.userInfo.redirectPath
}), {getJobsById, logoutSubmit})(Me)

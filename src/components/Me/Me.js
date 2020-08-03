import * as React from 'react';
import * as moment from 'moment';
import {connect} from "react-redux";
import {Result, WhiteSpace, List, Button} from "antd-mobile";

import {getJobsById} from "../../actions";

class Me extends React.Component {
  componentDidMount() {
    this.props.getJobsById(this.props.id);
  }

  render() {
    const {name, role, avatar, jobs} = this.props;
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
      <div>
        <Result
          img={avatar?<img src={require(`../../static/${avatar}.png`)} style={{width: 50}} />: null}
          title={name}
          message={`我是${role===1?'Boss': '牛人'}`}
        />
        <List renderHeader={() => '我的发布'}>
          {
            jobs.map(v => (
              <Item>
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
        <Button>退出</Button>
      </div>
    )
  }
}

export default connect(state => ({
  id: state.userInfo.id,
  name: state.userInfo.name,
  role: state.userInfo.role,
  avatar: state.userInfo.avatar,
  jobs: state.list
}), {getJobsById})(Me)

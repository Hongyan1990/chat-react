import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {TabBar} from "antd-mobile";

class TabLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const navList = this.props.navList.filter(v => !v.hide);
    const {pathname} = this.props.location;
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {
            navList.map(v => (
              <TabBar.Item
                title={v.name}
                key={v.path}
                icon={{uri: require(`../../static/tabbar/${v.icon}.svg`)}}
                selectedIcon={{uri: require(`../../static/tabbar/${v.icon}-active.svg`)}}
                selected={v.path === pathname}
                onPress={() => {
                  this.props.history.push(v.path);
                }}
              />
            ))
          }
        </TabBar>
      </div>
    )
  }
}

export default withRouter(TabLink)

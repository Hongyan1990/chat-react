import React from 'react';
import * as moment from 'moment';
import {WhiteSpace, WingBlank, Card, List} from "antd-mobile";

function Jobs(props) {
  const jobs = props.jobs;
  const Item = List.Item;
  const Header = Card.Header;
  const Body = Card.Body;
  const Footer = Card.Footer;
  return (
    <div>
      <WingBlank>
        <List>
          {
            jobs.map(v => (
              <Item key={v.id}>
                <Card>
                  <Header
                    title={v.title}
                    thumb={require(`../../static/${v.avatar}.png`)}
                    extra={<span>{v.salary}</span>}
                  />
                  <Body>
                    <div>
                      {v.description}
                    </div>
                  </Body>
                  <Footer content={v.work_place} extra={moment(v.created_at).format('YYYY-MM-DD HH:mm:ss')} />
                </Card>
                <WhiteSpace />
              </Item>
            ))
          }
        </List>
      </WingBlank>
    </div>
  )
}
export default Jobs;

import * as React from 'react';

import {Grid, WhiteSpace, List, InputItem, TextareaItem  } from 'antd-mobile';

export default function Bull(props) {
  const imgList = [
    'abigail', 'alexa', 'alfred', 'andy', 'anna',
    'arthur', 'audrey', 'cat', 'chloe', 'claire', 'cola', 'dog',
    'edward', 'panda', 'pig'
  ];
  const {onClick, onChange} = props;
  const data = imgList.map(v => ({
    icon: require(`../../static/${v}.png`),
    text: v,
  }));

  return (
    <div>
      <Grid
        data={data}
        activeStyle={false}
        columnNum={5}
        onClick={(e) => onClick(e)}
      />
      <WhiteSpace />
      <List>
        <InputItem name="title" onChange={v => onChange('title', v)}>应聘岗位</InputItem>
        <InputItem name="salary" onChange={v => onChange('salary', v)}>薪酬</InputItem>
        <InputItem name="work_place" onChange={v => onChange('work_place', v)}>工作地点</InputItem>
        <TextareaItem
          title="自我描述"
          name="description"
          rows={3}
          autoHeight
          onChange={v => onChange('description', v)}
        />
      </List>
      <WhiteSpace/>

    </div>
  )
}
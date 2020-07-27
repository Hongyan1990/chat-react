import * as React from 'react';

import {Grid} from 'antd-mobile';

export default function Boss() {
  const imgList = [
    'abigail', 'alexa', 'alfred', 'andy', 'anna',
    'arthur', 'audrey', 'cat', 'chloe', 'claire', 'cola', 'dog',
    'edward', 'panda', 'pig'
  ];

  const data = imgList.map(v => ({
    icon: `../../static/${v}.png`
  }));

  return (
    <div>
      <Grid data={data} activeStyle={false} />
    </div>
  )
}
import axios from 'axios';

import cookie from '../util/cookie';

const request = axios.create({baseURL: '/api'});

request.interceptors.request.use(
  config => {
    let csrfToken = cookie.getCookie('csrfToken');
    if (csrfToken) {
      config.headers['x-csrf-token'] = csrfToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

const handleRequest = (req) => {
  return new Promise((resolve, reject) => {
    req.then(res => {
      if(res.data.code === 0) {
        resolve(res.data.data)
      } else {
        reject(res.data.msg)
      }
    }).catch(err => {
        reject('服务出错了')
    })
  })
};

export function registerModel(data) {
  return handleRequest(request.post('/register', data))
}

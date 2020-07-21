import { Toast } from 'antd-mobile';

export function mockRegister(userInfo) {
  return new Promise((resolve, reject) => {
    Toast.loading('Loading...', 0)
    setTimeout(() => {
      Toast.hide();
      resolve({code: 0, userName: userInfo.user})
    }, 2000)
  })
}
import request from './request'
import queryString from 'query-string'

interface IUserInfo {
  nickname: string
  token: string
}

// 登录
export const login = (data: object) => {
  return request<IUserInfo>({
    url: 'cq/auth?jwt=',
    method: 'post',
    data: queryString.stringify(data)
  })
}

// 获取登录二维码
// export const getLoginQrcode = () => {
//   return request({
//     url: 'cq/auth/code',
//     method: 'get',
//     responseType: 'blob'
//   })
// }

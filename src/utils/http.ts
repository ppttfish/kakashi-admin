import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://imooc-admin.lgdsunday.club/prod-api/',
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截器
// instance.interceptors.request.use((config) => {})

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { code, errmsg } = response.data

    if (code === 1) {
      return Promise.resolve(response.data)
    } else {
      // 请求成功 业务失败提示
      ElMessage.error(errmsg)
      return Promise.reject(new Error(errmsg))
    }
  },
  // 请求失败提示
  (error) => {
    console.log('error', error)
    return Promise.reject(new Error(error))
  }
)

export default instance

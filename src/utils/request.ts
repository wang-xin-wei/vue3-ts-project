import axios, { AxiosRequestConfig } from 'axios'
// import { store } from '@/store/index'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // let token = store.state.token
  // config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  // 处理请求错误
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 在接口响应之后做些什么 比如code码判断等
  return response
}, function (error) {
  // 处理响应错误
  return Promise.reject(error)
})

export default <T = any> (config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data as T
  })
}

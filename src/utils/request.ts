import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { store } from '@/store'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前 在headers上添加 Authorization
  const token = store.state.userInfo?.token
  if (token && token !== '') {
    // 需要先判断一下config和config.headers 不然会报错： `对象可能为未定义`
    if (config && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
}, function (error) {
  // 处理请求错误
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 在接口响应之后做些什么 比如code码判断等
  if (response.data.code !== 200) {
    ElMessage({
      showClose: true,
      type: 'error',
      message: response.data.msg || '请求失败，请重试'
    })
    // 返回异常
    return Promise.reject(response.data)
  }
  return response
}, function (error) {
  // 处理响应错误
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data as T
  })
}

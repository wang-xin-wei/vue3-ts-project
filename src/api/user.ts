/**
 * 用户相关请求
*/
import request from '@/utils/request'
import type { userInfoIfc } from './types/common'

export const userLogin = (data:any) => {
  return request<{
    status: boolean
    msg: string
    data: userInfoIfc
  }>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}

export const userInfo = (params:any) => {
  return request<{
    status: boolean
    msg: string
    data: object
  }>({
    method: 'GET',
    url: '/admin',
    params: {
      id: params
    }
  })
}

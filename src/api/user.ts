/**
 * 用户相关请求
*/
import request from '@/utils/request'
import type { userInfoIfc } from './types/common'

export const userLogin = (data:any) => {
  return request<userInfoIfc>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}

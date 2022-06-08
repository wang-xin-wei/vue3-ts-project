import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: '200',
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === '123456') {
        return {
          code: 200,
          msg: '登录成功',
          data: {
            id: '151355353',
            username: 'admin',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            nickname: 'Mobai',
            role: ['admin'],
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsIm'
          }
        }
      } else {
        return {
          code: 201,
          msg: '用户名或密码错误，请重新登录！',
          data: []
        }
      }
    }
  },
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: {
          id: Mock.mock('@id()'),
          username: 'admin',
          nickname: 'Mobai',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          sex: '1',
          email: Mock.mock('@email()'),
          mobile: '15542567889',
          site: Mock.mock('@county(true)'),
          role: ['admin'],
          describe: '超级管理员'
        }
      }
    }
  },
  {
    url: '/api/logout',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '退出登录成功！',
        data: []
      }
    }
  }
] as MockMethod[]

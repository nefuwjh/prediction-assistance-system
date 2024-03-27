// 封装所有和用户相关的接口函数
import request from '@/utils/http'

/**
 * @description: 登录接口
 * @data  account 账号 password 密码
 * @return {*}
 */
 export const loginAPI = (data: object): any =>
 request({
   method: 'post',
   url: '/login',
   data
 })
 
// export const loginAPI = ({ account, password }) => {
//   return request({
//     url: '/login',
//     method: 'POST',
//     data: {
//       account,
//       password
//     }
//   })
// }
 
 
// export const getLikeListAPI = ({ limit = 4 }) => {
//   return request({
//     url: '/goods/relevant',
//     params: {
//       limit
//     }
//   })
// }
export interface IAccount {
  name: string
  password: string
}
// 登录结果的数据对象里面的类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}
// 数据类型
export interface IDataType<T = any> {
  code: number
  data: T
}

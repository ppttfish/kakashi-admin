export const KEY = '396539962ecb699b4a693b1bc2e67538'
export const IV = '00000000000000008'

export const testPassword = {
  rule: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30}/,
  // a: /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{6,20}$/,   没有大写字母
  // b: /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,16}/,   未通过测试
  msg: '密码请输入8位以上大小写字母和数字的组合！'
}

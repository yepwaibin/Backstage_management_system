export const LoginAccountRules = {
  name: [
    {
      required: true,
      message: '用户名必填',
      trigger: 'blur'
    },
    {
      pattern: /\w{5,10}$/,
      message: '用户名必须是5-10个字母、数字下划线组合',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必填',
      trigger: 'blur'
    },
    {
      pattern: /\w{5,10}$/,
      message: '密码必须是5-10个字母、数字或下划线组合',
      trigger: 'blur'
    }
  ]
}

export const phoneRules = {
  phoneNumber: [
    {
      required: true,
      message: '手机号必填',
      trigger: 'blur'
    },
    {
      pattern: /\d{11}$/,
      message: '手机号必须为11位数字',
      trigger: 'blur'
    }
  ],
  verificationCode: [
    {
      required: true,
      message: '验证码必填',
      trigger: 'blur'
    },
    {
      pattern: /\w{4}$/,
      message: '密码必须是4个位字符',
      trigger: 'blur'
    }
  ]
}

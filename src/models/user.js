
/**
 * 登录
 */
function initState() {
  return {
    // 国际码
    scanCodeState: false,    //扫码登录的状态
    areaCode: '86',
    phone: '',     //手机号
    email: '',      //邮箱号
    password: '',    //密码
    code: '',     //动态验证码
    google: '',    //谷歌验证码
    checkItem: 'email',   //默认手机
    loginState: true,    //登录方式  true 密码登录，false验证码登录
    confirmState: false,  //安全确认方式  fale 默认谷歌，true 验证码
    // 是记住登录状态
    isRember: false,
    accountErrorText: '',   //账户错误提示

    passErrorText: '',     //密码错误提示
    codeErrorText: '',    //动态验证码
    googleErrorText: '',   //谷歌验证码错诶提示
    rigisterCodeCountdownTime: '',      //倒计时截至时间
    rigisterCodeIsCountdown: false,      //是否在倒计时
    //确认方式
    phoneFlag: 0,
    emailFlag: 0,
    googleFlag: 0,
    userId: ''
  }
}

export default {
  namespace: 'userLogin',
  state: { ...initState() },
  effects: {

  },

  reducers: {
    setState(state, action) {

      return { ...state, ...action.payload };
    },
    init(state, action) {
      return { ...initState() }
    },
    // 手机初始化
    initPhone(state, action) {
      return {
        ...state, ...{
          scanCodeState: false,    //扫码登录的状态
          // 国际码
          areaCode: '86',
          phone: '',     //手机号
          email: '',      //邮箱号
          password: '',    //密码
          code: '',     //动态验证码
          loginState: true,    //登录方式  true 密码登录，false验证码登录
          confirmState: false,  //安全确认方式 
          // 是记住登录状态
          isRember: false,
          accountErrorText: '', //账户错误提示
          passErrorText: '',     //密码错误提示
          codeErrorText: '',    //动态验证码
          googleErrorText: '',   //谷歌验证码错诶提示
          rigisterCodeCountdownTime: '',      //倒计时截至时间
          rigisterCodeIsCountdown: false,      //是否在倒计时
          //确认方式
          phoneFlag: 0,
          emailFlag: 0,
          googleFlag: 0,
          userId: ''
        }
      };
    },

  },
};

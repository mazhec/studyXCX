const TOKEN = 'token'
App({

  globalData: {
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {

    const token = wx.getStorageSync(TOKEN)

    if (token && token.length !== 0) {
      this.check_token(token)
    } else {
      // 登录操作
      this.login()
    }


  },

  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token
        } else {
          console.log('token无效')
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  login() {
    wx.login({
      success: (res) => {
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            // 1.取出token
            const token = res.data.token

            // 2.保存token到globalData中
            this.globalData.token = token

            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})
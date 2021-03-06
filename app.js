// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                console.log(res)

                this.globalData.userInfo = res.userInfo

                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        },
        fail: res => {
          console.log(res)
        }
      }),
      // 首先获取地理位置信息
      wx.getLocation({
        type: 'gcj02',
        success: res => {
          wx.setStorageSync('latitude', res.latitude)
          wx.setStorageSync('longitude', res.longitude)
        }
      })
  },
  onShow() {
    console.log('show')
  },

  onHide() {
    console.log('hide')
  },
  globalData: {
    userInfo: null
  }
})
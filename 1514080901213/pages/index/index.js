//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  jump_scroll: function () {
    wx.navigateTo({
      url: '../scroll/scroll',
    })
  },
  jump_one: function () {
    wx.navigateTo({
      url: '../one/one',
    })
  },
  jump_two: function () {
    wx.navigateTo({
      url: '../two/two',
    })
  },
  jump_three: function () {
    wx.navigateTo({
      url: '../three/three',
    })
  },
  jump_four: function () {
    wx.navigateTo({
      url: '../four/four',
    })
  },
  jump_form: function () {
    wx.navigateTo({
      url: '../form/form',
    })
  },
  jump_five: function () {
    wx.navigateTo({
      url: '../five/five',
    })
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  }


  
})


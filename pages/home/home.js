// pages/home/home.js

// const app = getApp()
// const name = app.globalData.name
// const age = app.globalData.age
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '吴轮回',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   * http://152.136.185.210:7878/api/m5/recommend
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: (res) => {
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉操作被触发')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (obj) {
    console.log(obj)
    console.log('页面触底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // -----------1.监听wxml中相关的一些事件-----------
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleViewClick() {
    console.log(123)
  },
  // -----------.其他事件-----------
  // 监听页面滚动
  onPageScroll(obj) {
    console.log(obj)
  },

})
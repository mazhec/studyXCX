// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好轮回王',
    firstname: '楚',
    lastname: '魔王',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['大话西游', '肖申克的救赎', '变形金刚', '盗梦空间'],
    num: [
      [1, 2, 3, 4],
      [11, 22, 33, 44],
      [111, 222, 333, 444]
    ],
    letters: ['a', 'b', 'c']
  },

  handleChangeColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handleIsShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },
  numToFixed(num) {
    return num.toFixed(2)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    setInterval(() => {
      const now_time = new Date().toLocaleString()
      this.setData({
        nowTime: now_time
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
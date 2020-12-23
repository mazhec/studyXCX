// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },

  handleBtnClick() {
    console.log('按钮发送点击')
  },

  handleTouchStart(e) {
    // console.log(e.touches[0].pageX)
  },

  handleTouchMove(e) {
    console.log(e)
  },
  handleTouchEnd(e) {
    // console.log('鼠标离开')
  },
  handleTouchTap(e) {
    // console.log('鼠标点击后马上离开')
  },
  handleLongPress() {
    // console.log('长按超过350毫秒')
  },

  hangleEventClick(e) {
    console.log(e)
  },

  hangleEventEnd(e) {
    console.log('hangleEventEnd', e)
  },

  hangleInner(e) {
    // console.log(e)
  },

  handleOuter(e) {
    console.log(e)
  },

  handleItemClick(e) {
    // console.log(e.currentTarget.dataset)
    const dataset = e.currentTarget.dataset
    const index = dataset.index
    const item = dataset.item
    console.log(item, index)
  },

  // 事件冒泡和事件捕获

  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },

  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },

  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
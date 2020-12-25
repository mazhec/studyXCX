// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleShowToast() {
    wx.showToast({
      title: '义薄云天',
      icon: 'loading',
      duration: 2000,
      image: '/assets/profile/app.png',
      mask: true,
      success: function() {
        console.log('showToast调用成功')
      },
      fail: function() {
        console.log('showToast调用失败')
      },
      complete: function() {
        console.log('showToast被调用')
      }
    })
  },

  handleShowModal() {
    wx.showModal({
      title: '义薄云天',
      content: '敦厚纯善',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击了确定')
        } else if (res.cancel) {
          console.log('用户点击了取消')
        }
      }
    })
  },

  handleShowLoading() {
    wx.showLoading({
      title: '正在加载',
      mask: true,
      success: function() {
        setTimeout(function() {
          wx.hideLoading()
        }, 2000)
      }
    })
  },

  handleActionSheet() {
    wx.showActionSheet({
      alertText: '123',
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onShareAppMessage: function(options) {
    return {
      title: '义薄云天楚魔王',
      path: '/pages/about/about',
      imageUrl: '/assets/profile/message.png'
    }
  }
})
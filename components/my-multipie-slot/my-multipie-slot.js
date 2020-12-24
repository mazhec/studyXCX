// components/my-multipie-slot/my-multipie-slot.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 1.监听页面所在的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize() {
      console.log('监听组件页面尺寸改变')
    }
  },
  lifetimes: {
    created() {
      console.log('监听组件被创建出来时')
    },
    attached() {
      console.log('监听组件被添加到页面中')
    },
    ready() {
      console.log('监听组件被渲染出来')
    },
    moved() {
      console.log('组件被移动到节点树另一个位置')
    },
    detached() {
      console.log('组件被移除掉')
    }
  }
})

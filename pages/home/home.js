Page({
  data: {
    name: 'XiaoMaZai',
    age: 120,
    students: [{
        id: 1,
        name: '姬大德',
        age: 20
      },
      {
        id: 2,
        name: '曹德',
        age: 22
      },
      {
        id: 3,
        name: '曹龙',
        age: 24
      }
    ],
    counter: 0
  },
  handleBtnClick() {
    // console.log('-----------')
    // this.data.counter += 1

    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClick2() {
    // console.log('-----------')
    // this.data.counter += 1

    this.setData({
      counter: this.data.counter - 1
    })
  }
})
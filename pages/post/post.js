Page({
  data:{
    hidden: -1,
    editbox : false,
    inputvalue:'',
    data:[],
    changeData:'',
    hiddenChangeBox:true
  },
  onpostTap :function(event){
    var that = this;
    var num = event.currentTarget.dataset.num;
    console.log(event)
    var arr = this.data.data;
    arr[num].state = !arr[num].state;
    that.setData({
      data:arr
    })
  },
  edit :function(event){
    this.setData({
      editbox: !this.data.editbox,
      inputvalue : ''
    })
  },

  bindTextAreaBlur: function (e) {
    var data = e.detail.value;
    var json = {};
    json.state = false;
    json.data = data;
    var arr = this.data.data;
    arr.push(json);
    this.setData({
      inputvalue: e.detail.value,
      data: arr
    })
  },

  // 删除任务函数
  determine :function(event){
    var arr = this.data.data;
    var newArr = [];
    arr.forEach((item,index)=>{
      if(!item.state){
        newArr.push(item)
      }
    })
    this.setData({
      editbox: false,
      data:newArr
    })
  },

  // 保存任务函数
  cancel :function(event){
    this.setData({
      editbox: false,
      inputvalue: ''
    })
    
  },
  // 更改数据
  changeValue: function(event){
    console.log(event)
    var index = event.currentTarget.dataset.num;
    console.log(index)
    var data = this.data.data[index].data;
    console.log(data)
    this.setData({
      changeData : data,
      hiddenChangeBox : false,
      currentIndex: index
    })
  },
  changeValueBlur:function(e){
    var data = e.detail.value;
    this.setData({
      newData : data
    })
  },
  updateData:function(){
    var arr = this.data.data;
    arr[this.data.currentIndex].data = this.data.newData;
    this.setData({
      data: arr,
      hiddenChangeBox : true
    })
  }, 
})

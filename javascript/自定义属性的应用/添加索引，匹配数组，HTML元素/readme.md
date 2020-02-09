1. 想建立匹配对应关系， 就用索引值
2. for (var i=0; i<aBtn.length; i++) {  
      aBtn[i].index = i  //添加索引值
      aBtn[i].onclick = function () {
        // alert(i) //3 
        // alert(arr[this.index])
        this.value = arr[this.index]
      }  
    }
  1. 点击事件在for循环走完之后才执行，i= 3 所以在onclik 事件执行的时候aBtn[i] = aBtn[3] != this
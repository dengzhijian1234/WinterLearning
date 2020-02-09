 1.     //思路一 ： 全部清空当前添加
        for(var i=0;i<arrImg.length; i++) {
           aLi[i].className = ''
         }
         this.className = 'active'

        // 思路二： 清空上一个。当前添加
        oldLi.className = ''
        oldLi = this
        this.className = 'active'
      }
    }
function doMove(obj,attr,dir,target,endFn) {
  dir = parseInt(getStyle(obj,attr))<target?dir:-dir
  clearInterval(obj.timer)
  obj.timer = setInterval(function(){ // 把开关设置为自定义属性
    var speed = parseInt(getStyle(obj,attr)) + dir
    if(speed>=target && dir>0){ //注意判断正负 > 和< 不可以当参数
      speed = target
    }
    if(speed<=target && dir<0){
      speed = target
    }
    obj.style[attr] = speed + 'px'
    if(speed ==target){
      clearInterval(obj.timer)
      // if(endFn){
      //   endFn()
      // }
      endFn&&endFn()
    }
  },30)
}
function getStyle(obj,attr) {
  return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]
}
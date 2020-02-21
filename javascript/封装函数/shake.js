function shake(obj, attr, endFn ) {
  var num = 0
  var arr = [] // 20 -20 18 -18
  for (var i = 20; i > 0; i -= 2) {
    arr.push(i, -i)
  }
  arr.push(0)
  
  var pos = parseInt(getStyle(obj, attr))
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    obj.style[attr] = pos + arr[num] + 'px'
    num++
    if (num == arr.length) {
      clearInterval(obj.timer)
      endFn&&endFn()
    }
  }, 30)
}
function getStyle(obj,attr) {
  return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]
}
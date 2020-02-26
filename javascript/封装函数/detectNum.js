function detectNum(str) {
  var n = 0
  for(var i=0;i<str.length;i++) {
    n = str.charCodeAt(i)
    if(n<48 || n>57){
      return false
    }
  }
  return true
}
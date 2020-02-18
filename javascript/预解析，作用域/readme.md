预解析： 
  1. var function 参数 (参数相当于再fn中 var )
  2. 逐条解读代码：
      表达式
  3. 进入 function 再次预解析
    如果函数中的 a 是全局中拿的，则可以改变全局的 a 的值，
    如果函数中的a是自己的参数 或者自己里面 var 的 (参数也相当于var) 作用域只在函数中
1. var a = 1
    function fn() {
      alert(a) // undefind
      var a = 2 // 作用在fn 中
    }
    fn()
    alert(a) // 1

    步骤
    1. a = undefined function fn() {
      alert(a)
      var a = 2
    }
    2. a = 1 (全局) (1) fn 预解析 a = undefined (2) alert(a) // undefined (3) a = 2 局部fn
    3. alert(a) //全局的 a 



2. var b = 1
    function fn1() {
      alert(b) // 1
      b = 2
    }
    fn1()
    alert(b) // 2

    步骤
    1. b = undefined function fn1() {...} 
    2. b = 1(全局)  (1) fn1 预解析 没找到 b 返回父级(全局)找 b = 1 (2) alert(b) //1 (2) b = 2 (函数可以改变父级的值)
    3. alert(b) // 2  b在函数中被改变


3. var a = 1
    function fn(a) {
      alert(a) // undefined
      a = 2
    }
    fn()
    alert(a) // 1

    步骤
    1. a = undefined fn(a)
    2. a = 1(全局) (1) fn 预解析 参数a 相当于 var a= undefined (2)  alert(a) // undefined (3) a = 2 (fn中)
    3. alert(a) // 1 (全局中的 a)  [函数中的a是自己var 的 所以作用域为函数中]


4. var b = 1
    function fn1(b) {
      alert(b) // 1
      b = 2
    }
    fn1(b)
    alert(b) // 1

    步骤
    1. b = undefined fn1(b)
    2. b = 1(全局) (1) fn1 预解析 参数b 相当于 var b=1 (2)  alert(b) // 1 (3) b = 2 (fn1中)
    3. alert(b) // 1 (全局中的 b)  [函数中的b是实参 相当于 var 的 所以作用域为函数中]

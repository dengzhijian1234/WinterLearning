
const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  computed: {
    totalPrice () {
      let totalPrice = 0
      // for (let i =0; i< this.books.length; i++) {
      //   totalPrice += this.books[i].count * this.books[i].price
      // }
      // for (let i in this.books) {
      //   totalPrice += this.books[i].count * this.books[i].price
      // }
      // for (let item of this.books) {
      //   totalPrice += item.count * item.price
      // }
      // return totalPrice
      return this.books.reduce(function(preValue,book) {
        return preValue + book.count*book.price
      },0)
    }
  },
  methods: {
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2)
    // }
    decrement (index) {
      this.books[index].count--
    },
    increment (index) {
      this.books[index].count++
    },
    removeClick (index) {
      this.books.splice(index,1)
    }
  },
  // 过滤器
  filters: {
    showPrice (price) {
      // toFixed 保留几位小数
      return '￥' + price.toFixed(2)
    }
  }
})
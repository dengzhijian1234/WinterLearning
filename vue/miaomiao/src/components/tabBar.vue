<template>
  <div id="tabBar">
    <ul>
      <li>
        <img src="../assets/dianying2.png" alt="">
        <p>电影</p>
      </li>
      <li>
        <img src="../assets/dianying2.png" alt="">
        <p>影院</p>
      </li>
      <li>
        <img src="../assets/dianying2.png" alt="">
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #tabBar{
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: 2px #ebe8e3 solid;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  #tabBar ul {
    display: flex;
    text-align: center;
    height: 50px;
    align-items: center;
  }
  #tabBar ul li.active {
    color: #f03d37;
  }
  #tabBar ul li{
    list-style: none;
    flex: 1;
    height: 40px;
  }
  #tabBar ul img{
    width: 20px;
  }
  #tabBar ul p{
    font-size: 12px;
    line-height: 18px;
  }
</style>
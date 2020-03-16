<template>
  <div id="app">
    <v-header></v-header>
    <v-tabBar></v-tabBar>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header'
import tabBar from '@/components/tabBar'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-tabBar': tabBar
  }
  
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
}
</style>

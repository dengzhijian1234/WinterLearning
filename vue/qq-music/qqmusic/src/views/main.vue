<template>
  <div class="main">
    <main-header 
    :title="title"
    @nav-click="toPath"
    ></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader'
export default {
  data () {
    return {
      title: 'QQ音乐'
    }
  },
  components: {
    MainHeader
  },
  methods: {
    toPath (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>

</style>
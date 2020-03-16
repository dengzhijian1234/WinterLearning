<template>
  <div class="recommend">
    <my-swiper :swiper-list="swiperList" :swiper-option="swiperOption"></my-swiper>
    <song-sheet-list :hot-song="hotSong" />
  </div>
</template>

<script>
import MySwiper from '@/components/recommend/MySwiper'
import SongSheetList from '@/components/recommend/SongSheetList'
export default {
  data () {
      return {
        swiperList: [],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: true
        },
        hotSong: []
      }
    },
  methods: {
    
    async fetchSwiperList() {
      const res = await this.$http.get('/banner');
      this.swiperList = res.data.data.map(item => ({img: item.pic_info.url}))
      console.log(this.swiperList)
    },
    async fetchHotSong () {
      const res = await this.$http.get('songList/hot')
      this.hotSong = res.data.data.list.map(item => ({
        id: item.dissid,
        img: item.imgurl,
        title: item.creator.name,
        info: item.dissname
      }))
      console.log(this.hotSong)
    }
  },
  created () {
    this.fetchSwiperList()
    this.fetchHotSong()
  },
  components: {
    MySwiper,
    SongSheetList
  }
}
</script>

<style>

</style>
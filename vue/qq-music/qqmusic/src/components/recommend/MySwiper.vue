<template>
  <div class="my-swiper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.img" class="w100">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    swiperList: {
      type: Array,
      required: true
    },
    swiperOption: {
      type: Object,
      required: true
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    
  }
}
</script>
  
<style>


</style>
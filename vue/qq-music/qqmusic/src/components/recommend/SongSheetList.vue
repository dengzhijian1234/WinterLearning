<template>
  <div class="song-sheet-list">
    <ul class="pt-3 px-4">
      <li
      v-for="item in hotSong" :key="item.id"
      class="d-flex pb-3"
      >
      <img :src="item.img" width="60">
      <div class="right d-flex flex-wrap pl-3 ai-center">
        <span class="title w100">{{item.title}}</span>
        <span class="info text-gray2">{{item.info}}</span>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hotSong: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "../../../node_modules/swiper/dist/css/swiper.min.css";
import swp from "swiper";
export default {
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100px!important;
}
.swiper-wrapper img {
  width: 375px;
  height: 100px;
}
</style>
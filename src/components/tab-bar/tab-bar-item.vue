<template>
  <div class="tabbar-item" @click="tiao">
    <div v-if="!num">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="activeimg"></slot>
    </div>
    <div>
        <slot name="tit"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type:String,
    }
  },
    data(){
        return {
            bool:false
        }
    },
    methods: {
      tiao(){
        this.$router.push(this.path);
      }
    },
    computed: {
      num(){
        return this.$route.path.indexOf(this.path)!=-1
      }
    },
};
</script>

<style>
.tabbar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color:#666;
}
.tabbar-item img{
    width: 25px;
    height: 25px;
}
</style>
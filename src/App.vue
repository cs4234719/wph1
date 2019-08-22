<template>
  <div id="app">
    <heads></heads>
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/idx" head='首页'>
        <img src="./assets/img/tabbar/home.png" alt slot="img" />
        <img src="./assets/img/tabbar/home-1.png" alt slot="activeimg" />
        <div slot="tit">首页</div>
      </tabbaritem>
      <tabbaritem path="/sort" head='分类'>
        <img src="./assets/img/tabbar/align-left.png" alt slot="img" />
        <img src="./assets/img/tabbar/alignleft.png" alt slot="activeimg" />
        <div slot="tit">分类</div>
      </tabbaritem>
      <tabbaritem path="/shoppingcar" head='购物车'>
        <img src="./assets/img/tabbar/shoppingcart.png" alt slot="img" />
        <img src="./assets/img/tabbar/shopping-car.png" alt slot="activeimg" />
        <div slot="tit">购物车</div>
      </tabbaritem>
      <tabbaritem path="/my" head='我的'>
        <img src="./assets/img/tabbar/account.png" alt slot="img" />
        <img src="./assets/img/tabbar/user.png" alt  slot="activeimg"/>
        <div slot="tit">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import "./assets/css/public.css";
import tabbar from "./components/tab-bar/tab-bar";
import tabbaritem from "./components/tab-bar/tab-bar-item";
import heads from './components/head/head';
export default {
  data(){
    return {
      
    }
  },
  components: {
    tabbar,
    tabbaritem,
    heads
  }
};
</script>
<style>
</style>

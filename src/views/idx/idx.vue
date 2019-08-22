<template>
  <div>
    <div class="div1">
      <input type="text" placeholder="搜索单品" />
    </div>
    <span class="sp1">ALL分类</span>
    <div class="div2">
      <ul class="slide-box">
        <li class="slide-item">推荐</li>
        <li class="slide-item">人气</li>
        <li class="slide-item">女神</li>
        <li class="slide-item">新品</li>
        <li class="slide-item">球鞋</li>
        <li class="slide-item">T恤</li>
        <li class="slide-item">卫衣</li>
        <li class="slide-item">球鞋</li>
        <li class="slide-item">新品</li>
        <li class="slide-item">人气</li>
        <li class="slide-item">女神</li>
      </ul>
    </div>
    <swiper>
      <swiperitem>
        <img src="../../assets/img/swiper/swiper.jpg" alt />
      </swiperitem>
      <swiperitem>
        <img src="../../assets/img/swiper/swiper1.jpg" alt />
      </swiperitem>
      <swiperitem>
        <img src="../../assets/img/swiper/swiper2.jpg" alt />
      </swiperitem>
      <swiperitem>
        <img src="../../assets/img/swiper/swiper3.jpg" alt />
      </swiperitem>
    </swiper>
    <idxbot>
        <ul>
          <li>正品保障</li>
          <li>逐件检查</li>
          <li>多重鉴别</li>
        </ul>
    </idxbot>
    <idxfl>
      <div v-for="(item,index) in two" :key="index">
        <img :src="item.src" alt slot="img">
        <p slot="name">{{item.name}}</p>
      </div>
    </idxfl>
    <idxlist>
      <idxlistitem v-for="(item,index) in sp" :key="index">
        <img :src="item.src" alt slot="img" />
        <p slot="name">{{item.p}}</p>
        <span slot="price">{{item.price}}</span>
        <span slot="pl">{{item.title}}</span>
      </idxlistitem>
    </idxlist>
  </div>
</template>

<script>
import swp from "swiper";
import swiper from "../../components/swiper/swiper";
import swiperitem from "../../components/swiper/swiperitem";
import idxlist from "./idx-list";
import idxlistitem from "./idx-list-item";
import { request } from "../../request";
import idxbot from "./idx-bot";
import idxfl from "./idxfl"
export default {
  data() {
    return {
      sp: [],
      two:[]
    };
  },
  created() {
    request(
      {
        url: "groupshopping"
      },
      res => {
        this.sp = res.array;
        console.log(this.sp);
      },
      err => {
        console.log(err);
      }
    );
    request(
      {
        url: "list1"
      },
      res => {
        this.two = res.data;
        console.log(this.two);
      },
      err => {
        console.log(err);
      }
    );
  },
  mounted() {
    new swp(".swiper-container", {
      loop: true,
      autoplay: true
    });
  },
  components: {
    swiper,
    swiperitem,
    idxlist,
    idxlistitem,
    idxbot,
    idxfl
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 200px;
}
.swiper-wrapper img {
  width: 375px;
}
input {
  background: #eee;
  outline: none;
  width: 80%;
  border: none;
  margin: 6px 10px 10px 10px;
}
.div1 {
  background: #eee;
  border: 1px solid #999;
  width: 80%;
  height: 25px;
  border: none;
  float: left;
  margin-top: 30px;
  margin-left: 10px;
}
.die:after {
  clear: both;
  display: block;
  content: "";
}
.sp1 {
  font-size: 12px;
  color: yellowgreen;
  margin-top: 33px;
  display: inline-block;
  height: 25px;
}

.div2 ul li {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
}
.slide-box {
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.slide-box::-webkit-scrollbar {
  background-color: transparent;
}

.slide-box {
  -ms-overflow-style: none;
}

.slide-box {
  overflow: -moz-scrollbars-none;
}

.slide-item {
  width: 20%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
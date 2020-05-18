<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home" color="blue">
        <img slot="tabbar-icon" src="./assets/img/home.svg"/>
        <img slot="tabbar-icon-active" src="./assets/img/home(1).svg"/>
        <div slot="tabbar-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" color="white">
        <img slot="tabbar-icon" src="./assets/img/category.svg"/>
        <img slot="tabbar-icon-active" src="./assets/img/category(1).svg"/>
        <div slot="tabbar-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart" color="red">
        <img slot="tabbar-icon" src="./assets/img/cart_empty.svg"/>
        <img slot="tabbar-icon-active" src="./assets/img/cart_empty(1).svg"/>
        <div slot="tabbar-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" color="black">
        <img slot="tabbar-icon" src="./assets/img/profile.svg"/>
        <img slot="tabbar-icon-active" src="./assets/img/profile(1).svg"/>
        <div slot="tabbar-text">我的</div>
      </TabbarItem>

    </Tabbar>
  </div>

</template>
<script>
  import Tabbar from "./components/tabbar/Tabbar";
  import TabbarItem from "./components/tabbar/TabbarItem";
  export  default {
    name:"App",
    components:{
      Tabbar,TabbarItem
    }
  }
</script>
<style>
  @import "./assets/css/base.css";

</style>

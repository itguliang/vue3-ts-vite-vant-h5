<template>
  <div class="tab-view">
    <router-view />
  </div>
  <Tabbar v-model="active">
    <TabbarItem icon="home-o" to="/home">首页</TabbarItem>
    <TabbarItem icon="flower-o">学习</TabbarItem>
    <TabbarItem icon="contact" to="/user">我的</TabbarItem>
  </Tabbar>
</template>
<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue';
const active = ref(0);
</script>
<style>
.tab-view {
  /* background: #f5f5f5; */
  position: fixed;
  top: 0;
  bottom: 50px;
  width: 100%;
}
</style>
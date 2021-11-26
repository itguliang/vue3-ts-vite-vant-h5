<template>
  <router-view />
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
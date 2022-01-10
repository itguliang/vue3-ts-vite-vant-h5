<template>
  <Swipe :loop="true" class="my-swipe">
    <SwipeItem>1</SwipeItem>
    <SwipeItem>2</SwipeItem>
    <SwipeItem>3</SwipeItem>
    <SwipeItem>4</SwipeItem>
  </Swipe>
  <div>这是home信息-{{ store.state.home.info }}</div>
  <div>这是user信息-{{ store.state.user.name }}</div>
  <Button type="primary" @click="updateName">axios 调用接口信息</Button>
  <div>{{ store.state.user.detail }}</div>

</template>

<script setup lang="ts">
import { Swipe, SwipeItem, Button } from 'vant';
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

const updateName = () => {
  store.dispatch('user/GetUserInfo')
}

onMounted(() => {
  console.log("is onMounted");
  console.log(store.state.user);
});
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
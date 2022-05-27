<template>
  <Row  align='center' gutter="16">
    <Col span="8">
      <VanImage
        width="6rem"
        height="6rem"
        fit="contain"
        round
        :src="store.state.user.detail?.avatar_url"
      />
    </Col>
    <Col span="16">{{ store.state.user.detail?.name }}</Col>
  </Row>

  <div>{{ store.state.user.detail }}</div>
</template>

<script setup lang="ts">
import {
  Swipe,
  SwipeItem,
  Button,
  Image as VanImage,
  Grid,
  GridItem,
  List,
  Col,
  Row,
} from "vant";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

const getInfo = () => {
  store.dispatch("user/GetUserInfo");
};

onMounted(() => {
  console.log("is onMounted");
  store.dispatch("user/GetUserInfo");
});
</script>

<style>
</style>
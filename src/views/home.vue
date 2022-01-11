<template>
  <Swipe :loop="true" class="my-swipe">
    <SwipeItem>
      <div class="banner">
        <VanImage :src="banner1" />
      </div>
    </SwipeItem>
    <SwipeItem>
      <div class="banner">
        <VanImage :src="banner2" />
      </div>
    </SwipeItem>
    <SwipeItem>
      <div class="banner">
        <VanImage :src="banner3" />
      </div>
    </SwipeItem>
  </Swipe>

  <Grid :border="false">
    <GridItem icon="fire-o" text="Vue" />
    <GridItem icon="fire-o" text="React" />
    <GridItem icon="fire-o" text="Angular" />
    <GridItem icon="fire-o" text="Nodejs" />
    <GridItem icon="fire-o" text="ES6" />
    <GridItem icon="fire-o" text="Typescript" />
    <GridItem icon="fire-o" text="Webpack" />
    <GridItem icon="fire-o" text="更多" />
  </Grid>

  <CellGroup inset>
    <Cell title="单元格" value="内容" />
    <Cell title="单元格" value="内容" label="描述信息" />
  </CellGroup>
  <div>这是home信息-{{ store.state.home.info }}</div>
  <div>这是user信息-{{ store.state.user.name }}</div>
  <Button type="primary" @click="updateName">axios 调用接口信息</Button>
  <div>{{ store.state.user.detail }}</div>

</template>

<script setup lang="ts">
import { Swipe, SwipeItem, Button, Cell, CellGroup, Image as VanImage, Grid, GridItem } from 'vant';
import { useStore } from "vuex";
import { onMounted } from "vue";

import banner1  from "@/assets/banner1.png";
import banner2  from "@/assets/banner2.png";
import banner3  from "@/assets/banner3.png";

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
.banner{
  margin: 16px 16px 0 16px;
  border-radius: 10px;
  overflow: hidden;
}
.my-swipe {
  margin: 0 0 16px 0;
}
</style>
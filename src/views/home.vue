<template>
  <Swipe :loop="true" class="my-swipe" :autoplay="3000" indicator-color="white">
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
    <GridItem icon="fire-o" text="导航1" />
    <GridItem icon="fire-o" text="导航2" />
    <GridItem icon="fire-o" text="导航3" />
    <GridItem icon="fire-o" text="导航4" />
    <GridItem icon="fire-o" text="导航5" />
    <GridItem icon="fire-o" text="导航6" />
    <GridItem icon="fire-o" text="导航7" />
    <GridItem icon="fire-o" text="更多" />
  </Grid>
</template>

<script setup lang="ts">
import {
  Swipe,
  SwipeItem,
  Image as VanImage,
  Grid,
  GridItem,
  List,
} from "vant";
import { useStore } from "vuex";
import { onMounted } from "vue";

import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";

const store = useStore();

onMounted(() => {
  console.log("is onMounted");
});
</script>

<style>
.banner {
  margin: 16px 16px 0 16px;
  border-radius: 10px;
  overflow: hidden;
}
.my-swipe {
  margin: 0 0 16px 0;
}
</style>
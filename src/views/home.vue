<template>
  <div>这是home.vue-{{store.state.user.now}}</div>
  <Button type="primary">axios 调用接口信息</Button>
</template>

<script setup lang="ts">
import { Button } from 'vant';
import { useStore } from 'vuex'
// import { getUserInfo } from '@/api/user'
const store = useStore()
console.log(store.state.user)
</script>


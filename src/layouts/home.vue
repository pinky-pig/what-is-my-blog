<script setup lang="ts">
import side from '~/layouts/side.vue'
</script>

<template>
  <div class="screen-full-point-bg" />

  <Header />
  <main class="layout">
    <!-- <side class="side" /> -->
    <RouterView class="content" />
  </main>
</template>

<style lang="less" scoped>
.layout{
  @apply text-center text-gray-700 dark:text-gray-200;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  gap: 0px 24px;
  padding: 10px 0;
  margin: 140px auto 20px;
}
.side{
  width: 250px;
  display: none;
}
.content{
  width: 750px;
}
@media (min-width: 1080px) {
  .side{
    display: block;
  }
  .layout{
    margin-top: 80px;
    height: calc(100vh - 80px);
  }
}
.screen-full-point-bg{
  @apply w-screen h-screen fixed top-0 left-0 -z-1;
  background-image: var(--bg-point);
  background-repeat: repeat;
}
</style>

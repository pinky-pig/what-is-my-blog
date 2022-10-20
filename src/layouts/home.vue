<script setup lang="ts">
</script>

<template>
  <div class="screen-full-point-bg" />

  <Header />
  <main class="layout">
    <Side class="side" />
    <RouterView class="content" />
  </main>
</template>

<style lang="less" scoped>
.layout{
  @apply text-gray-700 dark:text-gray-200 flex justify-center ;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  gap: 0px 24px;
  padding: 40px 20px;
  margin: 140px auto 0px;
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

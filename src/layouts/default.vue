<template>
  <div class="screen-full-point-bg" />

  <div class="w-full h-full flex flex-col min-h-screen;">
    <Header />
    <main class=" flex-1 p-4 text-center text-gray-700 dark:text-gray-200 mt-140px lg:mt-80px">
      <RouterView />
    </main>
  </div>
</template>

<style lang="less" scoped>
.screen-full-point-bg{
  @apply w-screen h-screen fixed top-0 left-0 -z-1;
  background-image: var(--bg-point);
  background-repeat: repeat;
}
</style>

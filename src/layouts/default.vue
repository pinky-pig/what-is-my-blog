<template>
  <div class="layout-wrapper">
    <Header></Header>
    <main class=" flex-1 p-4 text-center text-gray-700 dark:text-gray-200 mt-140px md:mt-80px">
      <RouterView />
    </main>
  </div>
</template>
<style lang="less" scoped>

.layout-wrapper{
  @apply w-full h-full flex flex-col min-h-screen;
  word-spacing: 0.12rem;
  background-image: var(--bg-point);
  background-repeat: repeat;
}
</style>

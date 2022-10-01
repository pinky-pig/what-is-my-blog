<template>
  <div class="layout-wrapper">
    <Header></Header>
    <main class=" flex-1 px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <RouterView />
    </main>
  </div>
</template>
<style lang="less" scoped>

.layout-wrapper{
  @apply w-screen h-screen flex flex-col;
  word-spacing: 0.12rem;
  background-image: var(--bg-point);
  background-repeat: repeat;
}
</style>

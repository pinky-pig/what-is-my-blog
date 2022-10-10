<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="header-container fixed top-0 z-40 w-full h-140px flex flex-row flex-wrap items-center justify-center p-4 gap-4 md:h-80px md:justify-between md:px-12">
    <!-- logo -->

    <div class="w-screen flex justify-center items-center md:w-10">
      <router-link to="/">
        <img src="/logo.svg" class="w-10 h-10 select-none outline-none" alt="">
      </router-link>
    </div>

    <!-- button -->
    <div class=" flex flex-row gap-2 ">

      <router-link to="/project" class="div-contrary" title="Project">
        <div class="cursor-pointer bg-gray-700 dark:bg-gray-200" i-carbon:workspace />
      </router-link>

      <div class="div-contrary">
        <a href="https://pinky-pig.github.io/blog/" target="_blank" title="Blog">
          <div class="cursor-pointer bg-gray-700 dark:bg-gray-200" i-carbon-blog />
        </a>
      </div>

      <div class="div-contrary">
        <a href="https://github.com/pinky-pig/what-is-my-blog.git" target="_blank" title="GitHub">
          <div class="cursor-pointer bg-gray-700 dark:bg-gray-200" i-carbon-logo-github />
        </a>
      </div>

      <div class=" div-contrary" @click="toggleDark()" title="切换黑暗模式">
        <div class="cursor-pointer" i="carbon-sun dark:carbon-moon" />
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
  .header-container{
    backdrop-filter: saturate(50%) blur(8px);
    // background: var(--background);
    -webkit-backdrop-filter: saturate(50%) blur(8px);
  }
</style>

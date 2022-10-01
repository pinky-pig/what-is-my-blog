<template>
  <header class="z-40 h-80px flex flex-row flex-wrap items-center justify-center p-4 gap-4 md:justify-between">
    <!-- logo -->

    <div class="w-screen flex justify-center items-center md:w-10">
      <router-link to="/">
        <img src="/logo.svg" class="w-10 h-10 select-none outline-none" alt="">
      </router-link>
    </div>

    <!-- button -->
    <div class=" flex flex-row gap-2 ">

      <router-link to="/blog" class="text-contrary">
        <div class="cursor-pointer">Blog</div>
      </router-link>

      <router-link to="/blog" class="text-contrary">
        <div class="cursor-pointer">Project</div>
      </router-link>

      <div class="div-contrary">
        <div class="cursor-pointer" i-carbon-logo-github />
      </div>

      <div @click="toggleDark()" class=" div-contrary">
        <div class="cursor-pointer" i="carbon-sun dark:carbon-moon" />
      </div>

    </div>

  </header>
</template>
<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<script setup lang="ts">
const list = [
  {
    title: 'Icons Basic Edit',
    subtitle: 'To learn svg',
    address: 'https://github.com/pinky-pig/icons-basic-edit.git',
    imgUrl: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20221002104728.png',
    preview: 'https://pinky-pig.github.io/icons-basic-edit/',
  },
  {
    title: 'What Is My Blog',
    subtitle: 'To notes and share',
    address: 'https://github.com/pinky-pig/what-is-my-blog.git',
    imgUrl: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20221002110434.png',
    preview: 'https://pinky-pig.github.io/what-is-my-blog/',
  },
]
</script>

<template>
  <ul>
    <router-link to="/post/code-formatter" class="item block font-normal mb-6 mt-2 no-underline cursor-pointer">
      <div class=" flex flex-col items-start">
        <!-- title -->
        <div class="title text-lg leading-1.2em">
          Git - Formatter Code
        </div>
        <!-- time -->
        <div class="opacity-50 text-sm">
          2022/10/09
        </div>
      </div>
    </router-link>
  </ul>
</template>

<style lang="less" scoped>
a{
  background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))!important;
}
</style>

<script setup lang="ts">
import CustomCard from '~/components/CustomCard.vue'
</script>

<template>
  <CustomCard class="wrapper">
    <router-link v-for="(item, index) in 10" :key="index" :to="`/post/${index}`" class="list">
      第100期 - 无忧孩童
    </router-link>
  </CustomCard>
</template>

<style lang="less" scoped>
.wrapper{
  @apply overflow-y-auto overflow-x-hidden;
}
.list{
  font-size: .9rem;
  margin: 1px;
  padding: 0.3rem 0.7rem;
  color: inherit;
  text-decoration: none;
  display: block;
}
.list:hover{
  color: #a67c52 ;
}
</style>

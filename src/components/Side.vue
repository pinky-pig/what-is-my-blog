<script setup lang="ts">
import CustomCard from '~/components/CustomCard.vue'
import { fetchArticle } from '~/views/article'
const num = fetchArticle()

const route = useRoute()
</script>

<template>
  <CustomCard>
    <div class="wrapper">
      <router-link
        v-for="(item, index) in num.length"
        :key="index"
        :to="`/post/${index}`"
        class="list"
        :class="route.params.no === (`${index}`) ? 'activated' : ''"
      >
        第100期 - 无忧孩童
      </router-link>
    </div>
  </CustomCard>
</template>

<style lang="less" scoped>
.wrapper{
  @apply overflow-y-auto overflow-x-hidden;
}
.list{
  font-size: 1rem;
  margin: 1px;
  padding: 0.3rem 0.2rem;
  color: inherit;
  text-decoration: none;
  display: block;
}
.list:hover{
  color: #a67c52 ;
}
.activated{
  font-weight: 600;
  color: #a67c52 ;

}
</style>

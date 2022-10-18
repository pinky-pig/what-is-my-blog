<script setup lang="ts">
import CustomCard from '~/components/CustomCard.vue'
</script>

<template>
  <div class="wrapper ">
    <Side class="side" />
    <CustomCard>
      project
    </CustomCard>
  </div>
</template>

<style lang="less" scoped>
.wrapper{
  @apply flex flex-row mx-auto;
  height: calc(100vh - 140px);
  gap: 0 24px;
  max-width: 1024px;
}
.side{
  width: 300px;
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
</style>

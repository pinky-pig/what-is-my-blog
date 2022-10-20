<script setup lang="ts">
import '../article/index'
const router = useRouter()
router.push({ path: '/post/0' })
</script>

<template>
  <CustomCard>
    post
  </CustomCard>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: false
  id: 1234
  string: '1234'
</route>


<script setup lang="ts">
import '../article/index'
const router = useRouter()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
watchEffect(() => {
  if (isLargeScreen.value) {
    router.push({ path: '/post/0' })
  }
})

</script>

<template>
  <CustomCard>
    Post
  </CustomCard>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: false
  id: 1234
  string: '1234'
</route>


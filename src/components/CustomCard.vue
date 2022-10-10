<template>
  <div class="custom-card ">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.custom-card{
  @apply bg-white relative mx-auto w-full h-full;
  max-width: 65ch;
  border-radius: 0.5rem;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 2px solid rgb(30 41 59);
  background-repeat: repeat;

}
.custom-card::after{
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background-repeat: repeat;
  top: 0.6em;
  left: 0.6em;
  transition: top .25s,left .25s;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath d='m0 0 4 4Zm4 0L0 4Z' stroke-width='.5' stroke='%23000'/%3E%3C/svg%3E");
  transition: top .25s,left .25s;
  content: "";
}

.custom-card:hover:after {
  top:0.3rem;
  left: 0.3rem;
}
</style>

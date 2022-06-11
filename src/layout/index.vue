<script setup lang="ts">
import Aside from './components/aside.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

</script>
<template>
  <div class="h-screen">
    <Aside />
    <div class="h-full">
      <Header />
      <Main />
    </div>
  </div>
</template>

<style scoped></style>

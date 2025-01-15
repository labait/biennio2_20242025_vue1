<script setup>
import { ref } from 'vue';

defineProps({
  work: Object
});

</script>

<template>
  <div class="gallery-item">
    <h3 class="text-xl font-medium mb-2"> {{ work.title }} </h3>
    <p class="mb-2"> {{ work.description }} </p>
    <img class="img-fluid" :src="work.img" alt="work.title" />
  </div>
</template>

<style lang="scss" scoped>
  .gallery-item {
    border: 1px solid red;
    img {
      filter: grayscale(100%);
    }
  }
</style>
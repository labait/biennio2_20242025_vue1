<script setup>
import { ref } from 'vue';

defineProps({
  item: Object
});

</script>

<template>
  <div class="gallery-item">
    <h3 class="text-xl font-medium mb-2"> {{ item.title }} </h3>
    <p class="mb-2"> {{ item.description }} </p>
    <img class="img-fluid" :src="item.img" alt="item.title" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  work: Object
});

</script>

<template>
  <div class="gallery-item">
    <RouterLink :to="{ name: 'work', params: { id: work.id } }">
      <h3 class="text-xl font-medium mb-2"> {{ work.fields.title }} </h3>
      <p class="mb-2" v-html="work.fields.description"> </p>
      <img class="image img-fluid" :src="work.fields.image[0].url" alt="work.title" />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>

</style>
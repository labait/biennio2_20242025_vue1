<script setup>
import GalleryItem from './GalleryItem.vue';

defineProps({
  works: {
    type: Array,
    default: []
  }
});

</script>


<template>
  <div class="gallery mb-8">
    <div v-if="works.length > 0">
     <div class="grid sm:grid-cols-1 md:grid-cols-3  gap-8">
      <GalleryItem v-for="work in works" :key="work.id" :work="work" />
    </div>
    </div>
    <div v-else>
      <p> No works to display. </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .gallery {
    margin-top: 80px;
    border: 1px solid red;
  }
</style>
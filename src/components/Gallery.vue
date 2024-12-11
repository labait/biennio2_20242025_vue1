<script setup>
import GalleryItem from './GalleryItem.vue';

defineProps({
  items: Array
});

</script>


<template>
  <div class="gallery">
    <div v-if="items.length > 0">
     <div class="grid sm:grid-cols-1 md:grid-cols-3  gap-8">
      <GalleryItem v-for="item in items" :key="item.id" :item="item" />
    </div>
    </div>
    <div v-else>
      <p> No items to display. </p>
    </div>
  </div>
</template>

<style scoped>
  .gallery {
    margin-top: 80px;
    border: 1px solid red;
  }
</style>
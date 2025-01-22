<script setup>
import Gallery from '../components/Gallery.vue';
import { inject } from 'vue';

const data = inject('data');
</script>
  
<template>
  <div class="page-title">Works</div>

  <Gallery :works="data.works" />
</template>

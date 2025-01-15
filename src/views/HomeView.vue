
<script setup>
import Intro from '../components/Intro.vue';
import Gallery from '../components/Gallery.vue';
import About from '../components/About.vue';

defineProps({
  works: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <Intro class="section"/>
  <a @click="handleClick">button</a>
  <Gallery :works="works" class="section"/>
  <About class="section"/>
</template>
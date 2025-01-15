
<script setup>
import Intro from '../components/Intro.vue';
import Gallery from '../components/Gallery.vue';
import About from '../components/About.vue';
</script>

<template>
  home
  <Intro class="section"/>
  <a @click="handleClick">button</a>
  <Gallery :items="items" class="section"/>
  <About class="section"/>
</template>
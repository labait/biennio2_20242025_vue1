
<script setup>
import Intro from '../components/Intro.vue';
import Gallery from '../components/Gallery.vue';
import About from '../components/About.vue';
import { onMounted, inject, provide } from 'vue';

const data = inject('data');


</script>

<template>
  <Intro class="section"/>
  <a @click="handleClick">button</a>
  <Gallery class="section" :works="data.works.filter(work => work.inHome)" />
  <About class="section"/>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Intro from './components/Intro.vue';
import Gallery from './components/Gallery.vue';

import data from '../public/data.json';

const items = ref([]);

onMounted(() => {
  console.log("gallery component mounted");
  items.value = data;
});


const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 


const handleClick = () => {
  //items.value.shift();
  items.value = shuffle(items.value);
  console.log("button clicked");
}



</script>



<template>
  <div class="container">
    <Navbar />
    <Intro />
    <a class="button" @click="handleClick">button</a>
    <Gallery :items="items" />
  </div>
</template>

<style scoped>
.container {

}
</style>

<script setup>

import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Intro from './components/Intro.vue';
import Gallery from './components/Gallery.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';
import Links from './components/Links.vue';
import data from '../public/data.json';

const loading = ref(true);
const items = ref([]);


const loadData = async () => {
  const url = '/data.json';
  const response = await fetch(url);
  const data = await response.json();
  items.value = data;
  setTimeout(() => {
    loading.value = false;
  }, 500);
}

onMounted(() => {
  console.log("gallery component mounted");
  loadData();
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
  <div v-if="loading">
    <div class="loading-container">
      
        <h1>Loading...</h1>
    </div>
  </div>
  <div v-else class="container">
    <Navbar class="section"/>
    <Intro class="section"/>
    <a @click="handleClick">button</a>
    <Gallery :items="items" class="section"/>
    <About class="section"/>
    <Links class="section"/>
    <Footer class="section"/>
  </div>
</template>

<style scoped>
.container {

}

.section {
  @apply mb-8;
}
.loading-container {
  @apply flex justify-center items-center h-screen;
}
</style>

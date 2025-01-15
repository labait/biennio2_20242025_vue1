<script setup>

import { ref, onMounted } from 'vue';
import Links from './components/Links.vue';
import Footer from './components/Footer.vue';

const loading = ref(true);
const items = ref([]);

import { useRouter, RouterLink } from 'vue-router'
const router = useRouter();

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
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'works' }">Works</RouterLink>
    </nav>
    <div>
      <RouterView/>
    </div>
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

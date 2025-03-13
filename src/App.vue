<script setup>

import { ref, onMounted, provide } from 'vue';
import Links from './components/Links.vue';
import Footer from './components/Footer.vue';

const loading = ref(true);
const data = ref({});
provide('data', data);

import { useRouter, RouterLink } from 'vue-router'
const router = useRouter();

const loadData = async () => {
  /*
  const url = '/data.json';
  data.value = json;
  */
 
  const url = 'http://localhost:8888/projects/laba/wordpress_biennio2_20242025/wp-json/wp/v2/posts?_embed';
  const response = await fetch(url);
  const json = await response.json();

  data.value = {
    "about": "i'm john doe...",
    "works": json.map((item) => {
      return {
        id: item.id,
        title: item.title.rendered,
        description: item.content.rendered,
        img: item._embedded["wp:featuredmedia"][0].source_url,
        inHome: item.sticky,
        item: item,
      };
    })
  }
  console.log(data.value);

  setTimeout(() => {
    loading.value = false;
  }, 500);
}


const loadDataFromNotion = async () => {
  console.log("getData")
  const notion_api_key = ''
  const response = await fetch('https://api.notion.com/v1/databases/1ad59d9ee22580738c5dc1f299976bbd/query', {
    headers: {
      'Authorization': `Bearer ${notion_api_key}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log("data", data)
}


const loadDataFromAirtable = async () => {
  console.log("getData")
  const api_key = ''
  const response = await fetch('https://api.airtable.com/v0/appsLUJzrevbA7w1m/tbldyS6VYuqDAhxqi', {
    headers: {
      'Authorization': `Bearer ${api_key}`,
    }
  })
  const data = await response.json()
  console.log("data", data)
}




onMounted(() => {
  console.log("gallery component mounted");
  loadData();
  loadDataFromNotion();
});



const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 


const handleClick = () => {
  //works.value.shift();
  data.value.works = shuffle(data.value.works);
  console.log("button clicked");
}
</script>



<template>
  <div v-if="loading">
    <div class="loading-container">
      
        <h1>Loading...</h1>
    </div>
  </div>


  <div v-else class="container px-4">
    <nav class="mb-8">
      <template v-for="route in router.options.routes.filter((r) => r.inMenu)" :key="route.name">
        <RouterLink :to="route.path" :class="{ 'active': $route.path === route.path }">{{ route.name }}</RouterLink>
      </template>
    </nav>
    <div class="mb-8">
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

nav {
  @apply mt-4;
  a {
    @apply text-xl mr-4;
    &.active {
      color: var(--primary);
    }
  }
}
</style>

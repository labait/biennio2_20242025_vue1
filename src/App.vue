<script setup>
import Navbar from './components/Navbar.vue';
import Intro from './components/Intro.vue';
import Gallery from './components/Gallery.vue';

const items = [

  {
    id: 1,
    title: 'Project 1',
    description: 'A comprehensive project that explores advanced CSS techniques and responsive design principles.',
    img: 'https://via.placeholder.com/640x640'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'An innovative web application that leverages modern JavaScript frameworks for dynamic user experiences.',
    img: 'https://via.placeholder.com/640x640'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A detailed case study on the implementation of RESTful APIs and backend services.',
    img: 'https://via.placeholder.com/640x640'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A creative portfolio showcasing the integration of multimedia elements and interactive features.',
    img: 'https://via.placeholder.com/640x640'
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'A creative portfolio showcasing the integration of multimedia elements and interactive features.',
    img: 'https://via.placeholder.com/640x640'
  },
]

</script>


<!-- reference https://michieldegraaf.com/ -->
<template>
  <div class="container">
    <Navbar />
    <Intro />
    <Gallery :items="items" />
  </div>
</template>

<style scoped>
.container {

}
</style>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const work = ref({});
const data = inject('data');

onMounted(() => {
  work.value = data.value.records.find(work => work.id == route.params.id);
  console.log("work", work.value)
});

</script>


<template >
  <div v-if="work?.fields">
    <pre v-if="false">
      {{ work }}
    </pre>
    <div class="page-title">
      {{ work.fields.title }}
    </div>
    <p class="description mb-4">
      {{ work.fields.description }}
    </p>
    <img class="image img-fluid mb-4" :src="work.fields.image[0].url" alt="work.title" />

    <RouterLink :to="{ name: 'home' }">Back to home</RouterLink>
  </div>
</template>

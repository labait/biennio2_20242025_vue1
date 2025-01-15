<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const work = ref({});

const props = defineProps({
  works: {
    type: Array,
    required: true
  }
});

onMounted(() => {
  work.value = props.works.find(work => work.id == route.params.id);
});

</script>


<template v-if="work">
<pre v-if="false">
  {{ work }}
</pre>
<h1 class="text-2xl font-bold mb-2">
  {{ work.title }}
</h1>
<p class="description mb-4">
  {{ work.description }}
</p>
<img class="img-fluid mb-4" :src="work.img" alt="work.title" />

<RouterLink :to="{ name: 'home' }">Back to home</RouterLink>
</template>

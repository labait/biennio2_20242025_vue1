<script setup>
import { inject } from 'vue';

const data = inject('data');
</script>

<template>
  <div class="page-title">
   About
  </div>
  <div class="content">
    {{ data.about }}
  </div>
</template>
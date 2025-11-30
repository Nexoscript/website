<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    default: 'text-lg',
  },
})
</script>

<template>
  <a :href="url" :class="css">{{ name }}</a>
</template>

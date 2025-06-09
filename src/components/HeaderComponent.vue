<script setup lang="ts">
import LinkComponent from './LinkComponent.vue'
</script>

<template>
  <header class="p-8 w-full h-30">
    <div class="w-full h-24 flex justify-between items-center bg-gray-600 rounded-lg text-white">
      <div class="px-8 flex items-center gap-2">
        <img src="/logo.png" alt="Logo" class="w-18 h-18" />
        <p class="text-3xl font-semibold">Nexoscript</p>
      </div>
      <div class="px-8 flex items-center gap-6">
        <LinkComponent
          url="#about"
          name="About"
          css="text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-gray-100"
        />
        <LinkComponent
          url="#team"
          name="Team"
          css="text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-gray-100"
        />
        <LinkComponent
          url="#projects"
          name="Projects"
          css="text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-gray-100"
        />
        <LinkComponent
          url="#contact"
          name="Contact"
          css="text-2xl text-gray-300 transition-colors duration-300 ease-in-out hover:text-gray-100"
        />
        <!-- Search Bar -->
      </div>
    </div>
  </header>
</template>

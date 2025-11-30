<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import WhatIsSection from '@/sections/WhatIsSection.vue'
import AboutUsSection from '@/sections/AboutUsSection.vue'
import OurTeamSection from '@/sections/OurTeamSection.vue'
import OurGoalsSection from '@/sections/OurGoalsSection.vue'
import OurProjectsSection from '@/sections/OurProjectsSection.vue'
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col gap-2 bg-gray-700">
    <HeaderComponent />
    <WhatIsSection />
    <AboutUsSection />
    <OurTeamSection />
    <OurGoalsSection />
    <OurProjectsSection />
    <FooterComponent />
  </div>
</template>

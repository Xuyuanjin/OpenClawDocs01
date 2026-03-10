<template>
  <aside class="sidenav" :class="{ open }">
    <div class="sidenav-header">
      <div class="sidenav-title">Navigation</div>
      <button class="sidenav-close" type="button" aria-label="Close navigation" @click="$emit('close')">Close</button>
    </div>
    <div class="sidenav-body">
      <template v-for="section in nav" :key="section.section">
        <div class="sidenav-section">{{ section.section }}</div>
        <router-link
          v-for="item in section.items"
          :key="item.slug"
          class="sidenav-link"
          :class="{ active: isActive(item.slug) }"
          :to="`/${lang}/${item.slug}`"
        >
          {{ item.title }}
        </router-link>
      </template>
    </div>
  </aside>
  <div class="sidenav-backdrop" :class="{ open }" @click="$emit('close')"></div>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  nav: {
    type: Array,
    default: () => []
  },
  lang: {
    type: String,
    default: 'zh'
  },
  open: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()

const isActive = (slug) => route.params.slug === slug
</script>

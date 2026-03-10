<template>
  <div class="app">
    <TopBar :lang="lang" :slug="slug" @toggle-nav="isNavOpen = !isNavOpen" />
    <div class="shell" :class="{ 'nav-collapsed': !isNavOpen }">
      <SideNav :nav="nav" :lang="lang" :open="isNavOpen" @close="isNavOpen = false" />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import TopBar from './components/TopBar.vue'
import SideNav from './components/SideNav.vue'
import { getNav, getDefaultSlug, setPreferredLang } from './content'

const route = useRoute()
const isNavOpen = ref(true)

const lang = computed(() => route.params.lang || 'zh')
const slug = computed(() => route.params.slug || getDefaultSlug(lang.value))
const nav = computed(() => getNav(lang.value))

watch(
  () => lang.value,
  (value) => {
    setPreferredLang(value)
  }
)
</script>

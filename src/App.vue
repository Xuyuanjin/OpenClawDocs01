<template>
  <div class="app">
    <TopBar :lang="lang" :slug="slug" @toggle-nav="toggleNav" />
    <div class="shell" :class="{ 'nav-collapsed': isNavCollapsed }">
      <SideNav :nav="nav" :lang="lang" :open="isNavOpen" @close="closeNav" />
      <main class="content">
        <router-view />
      </main>
    </div>
    <footer class="site-footer">&#29256;&#26435;&#25152;&#26377; &copy; {{ currentYear }} LnDev</footer>
    <button
      v-show="showBackToTop"
      class="back-to-top"
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <span class="back-to-top-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import TopBar from './components/TopBar.vue'
import SideNav from './components/SideNav.vue'
import { getNav, getDefaultSlug, setPreferredLang } from './content'

const route = useRoute()
const mobileBreakpoint = 900
const initialIsMobile = typeof window !== 'undefined' && window.innerWidth <= mobileBreakpoint
const isMobile = ref(initialIsMobile)
const isNavOpen = ref(!initialIsMobile)
const showBackToTop = ref(false)
const currentYear = new Date().getFullYear()

const lang = computed(() => route.params.lang || 'zh')
const slug = computed(() => route.params.slug || getDefaultSlug(lang.value))
const nav = computed(() => getNav(lang.value))
const isNavCollapsed = computed(() => !isNavOpen.value)

const syncViewport = () => {
  const mobile = window.innerWidth <= mobileBreakpoint
  const viewportModeChanged = mobile !== isMobile.value
  isMobile.value = mobile

  if (viewportModeChanged) {
    isNavOpen.value = !mobile
  }
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 240
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

const closeNav = () => {
  if (!isMobile.value) return
  isNavOpen.value = false
}

watch(
  () => lang.value,
  (value) => {
    setPreferredLang(value)
  }
)

watch(
  () => route.fullPath,
  () => {
    closeNav()
    handleScroll()
  }
)

onMounted(() => {
  syncViewport()
  handleScroll()
  window.addEventListener('resize', syncViewport)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncViewport)
  window.removeEventListener('scroll', handleScroll)
})
</script>





<template>
  <header class="topbar">
    <button class="icon-button" type="button" aria-label="Toggle navigation" @click="$emit('toggle-nav')">
      <span class="icon-line"></span>
      <span class="icon-line"></span>
      <span class="icon-line"></span>
    </button>
    <button class="brand" type="button" aria-label="Go to home" @click="goHome">
      <img class="brand-logo" src="/openclaw-color.svg" alt="OpenClaw" />
      <div class="brand-text">
        <div class="brand-title">OpenClaw</div>
        <div class="brand-subtitle">Docs</div>
      </div>
    </button>
    <div class="topbar-actions">
      <button class="lang-toggle" type="button" @click="switchLang">
        <span>{{ currentLabel }}</span>
        <span class="divider"></span>
        <span>{{ nextLabel }}</span>
      </button>
      <a class="chip" href="https://www.1024777.xyz/" target="_blank" rel="noreferrer">
        {{ blogLabel }}
      </a>
      <a class="chip" href="https://docs.openclaw.ai" target="_blank" rel="noreferrer">
        Official
      </a>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDefaultSlug, hasSlug } from '../content'

const route = useRoute()
const router = useRouter()

const lang = computed(() => route.params.lang || 'zh')
const slug = computed(() => route.params.slug)

const currentLabel = computed(() => (lang.value === 'zh' ? '\u4e2d\u6587' : 'EN'))
const nextLabel = computed(() => (lang.value === 'zh' ? 'EN' : '\u4e2d\u6587'))
const blogLabel = computed(() => (lang.value === 'zh' ? '\u535a\u5ba2' : 'Blog'))

const switchLang = () => {
  const targetLang = lang.value === 'zh' ? 'en' : 'zh'
  const targetSlug = slug.value && hasSlug(targetLang, slug.value) ? slug.value : getDefaultSlug(targetLang)
  router.push(`/${targetLang}/${targetSlug}`)
}

const goHome = () => {
  const targetLang = lang.value === 'zh' ? 'zh' : 'en'
  router.push(`/${targetLang}/${getDefaultSlug(targetLang)}`)
}
</script>

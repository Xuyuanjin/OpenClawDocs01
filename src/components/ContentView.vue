<template>
  <article ref="docRef" class="doc">
    <div v-if="fallback" class="callout">
      <strong>Translation pending.</strong> Showing fallback content from {{ usedLang.toUpperCase() }}.
    </div>
    <div v-if="missing" class="callout danger">
      <strong>Content not found.</strong> Please pick another page from the sidebar.
    </div>
    <div v-html="html"></div>
  </article>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import linkAttributes from 'markdown-it-link-attributes'
import { loadMarkdown } from '../content'

const route = useRoute()

const html = ref('')
const fallback = ref(false)
const missing = ref(false)
const usedLang = ref('')
const docRef = ref(null)
let listenerBound = false

const lang = computed(() => route.params.lang || 'zh')
const slug = computed(() => route.params.slug || '')
const copyLabel = computed(() => (lang.value === 'zh' ? '\u590d\u5236' : 'Copy'))
const copiedLabel = computed(() => (lang.value === 'zh' ? '\u5df2\u590d\u5236' : 'Copied'))
const copyErrorLabel = computed(() => (lang.value === 'zh' ? '\u590d\u5236\u5931\u8d25' : 'Error'))

const slugify = (value) =>
  encodeURIComponent(
    value
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-\u4e00-\u9fa5]+/g, '')
      .replace(/\-\-+/g, '-')
  )

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
  .use(anchor, { level: [2, 3, 4], slugify })
  .use(linkAttributes, {
    matcher: (href) => /^https?:\/\//.test(href || ''),
    attrs: {
      target: '_blank',
      rel: 'noreferrer'
    }
  })

const extractTitle = (raw) => {
  if (!raw) return 'OpenClaw Docs'
  const line = raw.split('\n').find((row) => row.startsWith('# '))
  return line ? line.replace(/^#\s+/, '').trim() : 'OpenClaw Docs'
}

const enhanceCopyButtons = () => {
  const root = docRef.value
  if (!root) return

  root.querySelectorAll('pre').forEach((pre) => {
    if (pre.dataset.copyEnhanced === 'true') return
    const code = pre.querySelector('code')
    const raw = (code ? code.textContent : pre.textContent) || ''
    const lines = raw.replace(/\n$/, '').split('\n')

    const wrapper = document.createElement('div')
    wrapper.className = 'code-lines'

    lines.forEach((line) => {
      const row = document.createElement('div')
      row.className = 'code-line'

      const codeEl = document.createElement('code')
      codeEl.className = 'code-text'
      codeEl.textContent = line.length ? line : ' '

      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'copy-btn'
      button.dataset.copy = line
      button.textContent = copyLabel.value

      row.appendChild(codeEl)
      row.appendChild(button)
      wrapper.appendChild(row)
    })

    pre.innerHTML = ''
    pre.appendChild(wrapper)
    pre.dataset.copyEnhanced = 'true'
  })

  root.querySelectorAll('table').forEach((table) => {
    if (table.dataset.copyEnhanced === 'true') return
    table.querySelectorAll('tbody tr').forEach((row) => {
      const codeEl = row.querySelector('code')
      if (!codeEl || codeEl.parentElement.querySelector('.copy-btn')) return
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'copy-btn inline'
      button.dataset.copy = codeEl.textContent || ''
      button.textContent = copyLabel.value
      codeEl.after(button)
    })
    table.dataset.copyEnhanced = 'true'
  })
}

const bindCopyListener = () => {
  if (listenerBound || !docRef.value) return
  docRef.value.addEventListener('click', async (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    if (!target.classList.contains('copy-btn')) return
    const content = target.dataset.copy || ''

    try {
      await navigator.clipboard.writeText(content)
      const previous = target.textContent
      target.textContent = copiedLabel.value
      window.setTimeout(() => {
        target.textContent = previous || copyLabel.value
      }, 1200)
    } catch (error) {
      target.textContent = copyErrorLabel.value
      window.setTimeout(() => {
        target.textContent = copyLabel.value
      }, 1200)
    }
  })
  listenerBound = true
}

const load = async () => {
  missing.value = false
  const result = await loadMarkdown(lang.value, slug.value)

  if (!result.raw) {
    html.value = ''
    missing.value = true
    fallback.value = false
    usedLang.value = lang.value
    document.title = 'OpenClaw Docs'
    return
  }

  fallback.value = result.fallback
  usedLang.value = result.usedLang
  html.value = md.render(result.raw)
  document.title = `${extractTitle(result.raw)} · OpenClaw`

  await nextTick()
  enhanceCopyButtons()
  bindCopyListener()
}

watch([lang, slug], load, { immediate: true })

onMounted(load)
</script>

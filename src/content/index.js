import navZh from './nav.zh.json'
import navEn from './nav.en.json'

const navByLang = {
  zh: navZh,
  en: navEn
}

const mdModules = import.meta.glob('./**/*.md', { query: '?raw', import: 'default' })

const flattenNav = (nav) => nav.flatMap((section) => section.items || [])

export const getNav = (lang) => navByLang[lang] || navByLang.zh

export const getDefaultSlug = (lang) => {
  const items = flattenNav(getNav(lang))
  return items.length ? items[0].slug : 'overview'
}

export const hasSlug = (lang, slug) => {
  const items = flattenNav(getNav(lang))
  return items.some((item) => item.slug === slug)
}

export const getPreferredLang = () => {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem('openclaw-lang')
  if (stored === 'zh' || stored === 'en') return stored
  return navigator.language.startsWith('zh') ? 'zh' : 'en'
}

export const setPreferredLang = (lang) => {
  if (typeof window === 'undefined') return
  if (lang !== 'zh' && lang !== 'en') return
  window.localStorage.setItem('openclaw-lang', lang)
}

export const loadMarkdown = async (lang, slug) => {
  const fileName = `${slug}.md`
  const primaryKey = `./${lang}/${fileName}`
  const fallbackLang = lang === 'zh' ? 'en' : 'zh'
  const fallbackKey = `./${fallbackLang}/${fileName}`

  if (mdModules[primaryKey]) {
    const raw = await mdModules[primaryKey]()
    return { raw, usedLang: lang, fallback: false }
  }

  if (mdModules[fallbackKey]) {
    const raw = await mdModules[fallbackKey]()
    return { raw, usedLang: fallbackLang, fallback: true }
  }

  return { raw: null, usedLang: lang, fallback: false }
}

export const getAllSlugs = (lang) => flattenNav(getNav(lang)).map((item) => item.slug)

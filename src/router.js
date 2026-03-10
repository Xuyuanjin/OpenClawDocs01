import { createRouter, createWebHistory } from 'vue-router'
import ContentView from './components/ContentView.vue'
import { getDefaultSlug, getPreferredLang } from './content'

const routes = [
  {
    path: '/',
    redirect: () => {
      const lang = getPreferredLang()
      return `/${lang}/${getDefaultSlug(lang)}`
    }
  },
  {
    path: '/:lang(zh|en)',
    redirect: (to) => `/${to.params.lang}/${getDefaultSlug(to.params.lang)}`
  },
  {
    path: '/:lang(zh|en)/:slug',
    name: 'doc',
    component: ContentView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => {
      const lang = getPreferredLang()
      return `/${lang}/${getDefaultSlug(lang)}`
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0, left: 0 })
})

export default router

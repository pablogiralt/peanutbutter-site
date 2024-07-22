import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42f78854 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _9747e4a8 = () => interopDefault(import('../pages/en.vue' /* webpackChunkName: "pages/en" */))
const _742431d4 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))
const _4d7bb245 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "" */))
const _a9ac1684 = () => interopDefault(import('../pages/resources/_uid.vue' /* webpackChunkName: "pages/resources/_uid" */))
const _010deb9f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4a95b9c6 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _39191296 = () => interopDefault(import('../pages/_lang/_uid.vue' /* webpackChunkName: "pages/_lang/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _42f78854,
    name: "prismic-preview"
  }, {
    path: "/en",
    component: _9747e4a8,
    name: "en"
  }, {
    path: "/:uid",
    component: _742431d4,
    name: "uid"
  }, {
    path: "*",
    component: _4d7bb245,
    name: "custom"
  }, {
    path: "/404",
    component: _4d7bb245,
    name: "404"
  }, {
    path: "/resources/:uid?",
    component: _a9ac1684,
    name: "resources-uid"
  }, {
    path: "/",
    component: _010deb9f,
    name: "index"
  }, {
    path: "/:lang",
    component: _4a95b9c6,
    name: "lang"
  }, {
    path: "/:lang/:uid",
    component: _39191296,
    name: "lang-uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

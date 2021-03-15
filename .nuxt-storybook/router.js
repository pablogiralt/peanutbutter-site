import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f6ce156 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _8d09152c = () => interopDefault(import('../pages/en.vue' /* webpackChunkName: "pages/en" */))
const _a1eebbdc = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))
const _276d7b72 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "" */))
const _22b78321 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _037b911f = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _42abdc54 = () => interopDefault(import('../pages/_lang/_uid.vue' /* webpackChunkName: "pages/_lang/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _1f6ce156,
    name: "prismic-preview"
  }, {
    path: "/en",
    component: _8d09152c,
    name: "en"
  }, {
    path: "/:uid",
    component: _a1eebbdc,
    name: "uid"
  }, {
    path: "*",
    component: _276d7b72,
    name: "custom"
  }, {
    path: "/404",
    component: _276d7b72,
    name: "404"
  }, {
    path: "/",
    component: _22b78321,
    name: "index"
  }, {
    path: "/:lang",
    component: _037b911f,
    name: "lang"
  }, {
    path: "/:lang/:uid",
    component: _42abdc54,
    name: "lang-uid"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}

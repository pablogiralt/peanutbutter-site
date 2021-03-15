export { default as LangSwitcher } from '../../components/LangSwitcher.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navigation } from '../../components/Navigation.vue'

export const LazyLangSwitcher = import('../../components/LangSwitcher.vue' /* webpackChunkName: "components/lang-switcher" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c)

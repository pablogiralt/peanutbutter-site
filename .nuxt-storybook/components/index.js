export { default as BlogPosts } from '../../components/BlogPosts.vue'
export { default as ContactForm } from '../../components/ContactForm.vue'
export { default as LangSwitcher } from '../../components/LangSwitcher.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as SiteFooter } from '../../components/SiteFooter.vue'
export { default as SiteHeader } from '../../components/SiteHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

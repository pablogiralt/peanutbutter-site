<template>
  <header class="header">
    <nuxt-link :to="logoLink">
      <img class="logo" src="https://peanutbutter.es/wp-content/themes/peanut/library/images/logo_peanut_header.png">
    </nuxt-link>
    <navigation />
    <lang-switcher :alt-langs="altLangs" :current-lang="currentLang" />
    <span class="contact-link">contact</span>
  </header>
</template>

<script>
export default {
  props: {
    currentLang: {
      type: String,
      required: true,
      default: ''
    },
    altLangs: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  computed: {
    logoLink () {
      return this.currentLang !== 'es' ? `/${this.currentLang}` : '/'
    }
  }
}
</script>

<style>
</style>

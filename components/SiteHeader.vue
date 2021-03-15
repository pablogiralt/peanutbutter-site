<template>
  <header class="header">
    <nuxt-link :to="logoLink">
      <img class="logo" src="https://peanutbutter.es/wp-content/themes/peanut/library/images/logo_peanut_header.png">
    </nuxt-link>
    <navigation :main-menu="mainMenu" />
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
    },
    mainMenu: {
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

<style lang="scss" scoped>
  .header {
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    background-color: #000;
    border-radius: 50%;
    width: 80px;
  }
</style>

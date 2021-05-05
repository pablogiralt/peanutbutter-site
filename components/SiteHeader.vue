<template>
  <header class="header">
    <navigation :main-menu="mainMenu" />

    <nuxt-link :to="logoLink">
      <img class="logo" src="logo-peanut-butter.svg">
    </nuxt-link>

    <!-- <lang-switcher :alt-langs="altLangs" :current-lang="currentLang" /> -->

    <span class="contact-link">
      <img class="contact-link__img" src="icon-plane.svg">
    </span>
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
    background-color: $black;
    padding: rem(12px) rem(16px) rem(12px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .logo {
    height: rem(32px);
    display: block;
  }

  .contact-link {
    &__img {
      height: 27px;
      width: auto;
      display: block;
    }
  }
</style>

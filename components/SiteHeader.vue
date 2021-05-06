<template>
  <header class="header" :class="{ 'header--hidden': !showHeader }">
    <navigation :main-menu="mainMenu" />

    <nuxt-link :to="logoLink">
      <img class="logo" src="logo-peanut-butter.svg">
    </nuxt-link>

    <!-- <lang-switcher :alt-langs="altLangs" :current-lang="currentLang" /> -->

    <span class="contact-link">
      <img class="contact-link__img" src="icons/icon-plane.svg">
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
  data () {
    return {
      showHeader: true,
      lastScrollPosition: 0
    }
  },
  computed: {
    logoLink () {
      return this.currentLang !== 'es' ? `/${this.currentLang}` : '/'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }

      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
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
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    transition: top 0.2s ease-in-out;

    &--hidden {
      top: -56px;
    }
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

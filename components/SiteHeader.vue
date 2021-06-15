<template>
  <header class="header" :class="{ 'header--hidden': !showHeader }">
    <navigation :main-menu="mainMenu" />

    <nuxt-link :to="logoLink" class="header__logo">
      <img class="logo" src="logo-peanut-butter.svg">
    </nuxt-link>

    <!-- <lang-switcher :alt-langs="altLangs" :current-lang="currentLang" /> -->

    <div class="header__contact">
      <span
        class="header__contact__actions"
        :class="{'is-active' : isContactFormActive }"
        @click="toggleContactForm"
      >
        <img class="header__contact__img" src="icons/icon-plane.svg">
        <span class="header__contact__actions__close">
          <span class="bar" />
          <span class="bar" />
        </span>
        <span class="header__contact__text">Contacto</span>
      </span>
      <div :class="{'is-active' : isContactFormActive }" class="header__contact__form-wrapper">
        <ContactForm />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    ContactForm: () => import('../slices/ContactForm/index.vue')
  },
  props: {
    // currentLang: {
    //   type: String,
    //   required: true,
    //   default: ''
    // },
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
      lastScrollPosition: 0,
      isContactFormActive: false
    }
  },
  computed: {
    logoLink () {
      return this.$store.state.locale !== 'es' ? `/${this.$store.state.locale}` : '/'
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
    },
    toggleContactForm () {
      this.isContactFormActive = !this.isContactFormActive
      document.body.style.overflow = this.isContactFormActive ? 'hidden' : ''
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

    @media (min-width: $md) {
      &__nav-wrapper,
      &__logo,
      &__contact {
        flex: 1 1 33.333%;
        max-width: 33.333%;
      }

      &__contact {
        display: flex;
        justify-content: flex-end;
      }
    }

    &__contact {
      &__actions {
        cursor: pointer;
        position: relative;
        z-index: 99;
        display: inline-block;
        vertical-align: middle;
        transition: 0.2s ease all;

        &.is-active {
          z-index: 101;
        }

        &__close {
          position: absolute;
          top: 0;
          right: 0;
          flex: 0 0 27px;
          display: block;
          height: 24px;
          width: 27px;
          opacity: 0;

          .bar {
            border-radius: 666rem;
            width: 100%;
            height: 3px;
            background: $white;
            position: absolute;
            left: 0;
            top: 0;
            transition: 0.25s ease-in-out;

            &:nth-child(2) {
              top: calc(100% - 4px);
            }
          }

          .is-active & {
            opacity: 1;

            .bar {
              width: 100%;

              &:nth-child(1) {
                top: 50%;
                transform: rotate(135deg);
              }

              &:nth-child(2) {
                top: 50%;
                transform: rotate(-135deg);
              }
            }
          }
        }
      }

      &__img {
        height: 27px;
        width: auto;
        display: block;
        opacity: 1;
        transition: $transition-standard;

        .is-active & {
          opacity: 0;
        }

        @media (min-width: $md) {
          display: none;
        }
      }

      &__text {
        display: none;

        @media (min-width: $md) {
          display: block;
          @include navItem;
          color: $primary;
          opacity: 1;
          transition: $transition-standard;

          .is-active & {
            opacity: 0;
          }
        }
      }

      &__form-wrapper {
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: $primary-60;
        transition: $transition-standard;
        transform: translateX(200%);
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;

        &.is-active {
          transform: translateY(0);
        }
      }
    }
  }

  .logo {
    height: rem(32px);
    display: block;
    margin: 0 auto;
  }
</style>

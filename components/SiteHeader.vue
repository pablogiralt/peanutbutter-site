<template>
  <header class="header" :class="{ 'header--hidden': !showHeader, 'menu--active': menuOpen, 'contact-from-menu': contactOpenFromMenu }">
    <div class="header__container">
      <navigation :main-menu="mainMenu" :alt-langs="altLangs" />

      <nuxt-link :to="logoLink" class="header__logo">
        <img class="logo" src="~/static/logo-peanut-butter.svg">
      </nuxt-link>

      <div class="header__contact">
        <span
          class="header__contact__actions"
          :class="{'is-active' : contactOpen }"
          @click="toggleContactForm"
        >
          <img class="header__contact__img" src="icons/icon-plane.svg">
          <span class="header__contact__actions__close">
            <span class="bar" />
            <span class="bar" />
          </span>
          <span class="header__contact__text">{{ $t('contact.button') }}</span>
        </span>
        <div :class="{'is-active' : contactOpen }" class="header__contact__form-wrapper">
          <ContactForm />
        </div>

        <lang-switcher :alt-langs="altLangs" class="header__contact__lang" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    ContactForm: () => import('./ContactForm.vue')
  },
  props: {
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

    getDevice () {
      return this.$store.state.device
    },

    logoLink () {
      return this.$store.state.locale !== 'es' ? `/${this.$store.state.locale}` : '/'
    },

    menuOpen () {
      return this.$store.state.menuOpen && !this.contactOpen && this.getDevice === 'mobile'
    },

    contactOpen () {
      return this.$store.state.contactOpen
    },

    contactOpenFromMenu () {
      return this.$store.state.menuOpen && this.$store.state.contactOpen && this.getDevice === 'mobile'
    },

    drawersVisible () {
      return this.menuOpen || this.contactOpen
    }
  },

  watch: {
    drawersVisible (visible) {
      const mutation = visible ? 'BODY_CLASS_ADD' : 'BODY_CLASS_REMOVE'
      this.$store.commit(mutation, 'hidden')
    }
  },

  mounted () {
    this.setDevice()
    window.addEventListener('resize', () => {
      this.setDevice()
    })
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {

    setDevice () {
      const device = window.innerWidth < this.$store.state.desktopBreakpoint ? 'mobile' : 'desktop'
      this.$store.commit('SET_DEVICE', device)
    },

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
      this.$store.commit('SET_CONTACT_OPEN', !this.contactOpen)
      if (!this.$store.state.contactOpen) {
        this.$store.commit('SET_MENU_OPEN', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: $black;
    padding-top: rem(12px);
    padding-bottom: rem(12px);
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    transition: top 0.2s ease-in-out;

    &--hidden {
      top: -56px;
    }

    &.menu--active {
      transform-style: preserve-3d;
      transition: transform 0.6s ease;
      bottom: 0;
    }

    &.contact-from-menu {
      bottom: 0;
      transform: translateX(0) rotateY(-180deg);
    }

    @media (min-width: $md) {
      &__nav-wrapper,
      &__logo,
      &__contact {
        flex: 1 1 33.333%;
        max-width: 33.333%;
      }
    }

    &__container {
      @include container;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__contact {
      @media (min-width: $md) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      &__actions {
        cursor: pointer;
        position: relative;
        z-index: 99;
        display: inline-block;
        vertical-align: middle;
        transition: 0.2s ease all;

        .contact-from-menu & {
          transform: rotateY(-180deg);
        }

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
        opacity: 0;
        background-color: $primary-60;
        transition: $transition-drawer, opacity 0.3s ease;
        transform: translateX(200%);
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;

        &.is-active {
          transform: translateY(0);
          opacity: 1;
        }

        .menu--active & {
          opacity: 0;
          transform: rotateY(180deg);
          backface-visibility: hidden;
          transition: none;

          &.is-active {
            opacity: 1;
          }
        }
      }

      &__lang {
        display: none;

        @media (min-width: $md) {
          display: flex;
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

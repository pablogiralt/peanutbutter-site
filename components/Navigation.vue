<template>
  <div class="header__nav-wrapper">
    <a
      href="#"
      class="menu-toggle"
      :class="{ 'is-active' : isMenuActive }"
      @click="toggleMenu"
    >
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
    </a>

    <nav :class="{ 'is-active' : isMenuActive }" class="main-nav">
      <ul class="main-nav__list">
        <li v-for="(item, i) in mainMenu" :key="`menu-item-${i}`" class="main-nav__list__item">
          <prismic-link :field="item.link" class="main-nav__list__item__link">
            {{ item.label }}
          </prismic-link>
        </li>

        <li class="main-nav__list__item main-nav__list__item--contact" @click="openContact">
          <span class="main-nav__list__item__link">
            {{ $t('contact.button') }}
          </span>
        </li>

        <li class="main-nav__list__item main-nav__list__item--lang">
          <lang-switcher :alt-langs="altLangs" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
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

  data: () => ({}),

  computed: {
    isMenuActive () {
      return this.$store.state.menuOpen
    }
  },

  methods: {
    toggleMenu () {
      // this.isMenuActive = !this.isMenuActive
      this.$store.commit('SET_MENU_OPEN', !this.isMenuActive)
    },

    openContact () {
      this.$store.commit('SET_CONTACT_OPEN', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-toggle {
    flex: 0 0 27px;
    display: block;
    height: 24px;
    width: 27px;
    text-decoration: none;
    position: relative;
    z-index: 99;
    transition: 0.2s ease all;

    &.is-active {
      z-index: 101;
    }

    @media (min-width: $md) {
      display: none;
    }

    &:hover {
      .bar {
        &:nth-child(2) {
          width: 100%;
        }
      }
    }

    .bar {
      display: block;
      border-radius: 666rem;
      width: 100%;
      height: 3px;
      background: $white;
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.25s ease-in-out;

      &:nth-child(2) {
        top: calc(50% - 2px);
        width: 80%;
      }

      &:nth-child(3) {
        top: calc(100% - 4px);
      }
    }

    &.is-active {
      .bar {
        width: 100%;

        &:nth-child(1) {
          top: 50%;
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          top: 50%;
          transform: rotate(-135deg);
        }
      }
    }
  }

  .main-nav {
    $mainNav: &;

    @media (max-width: #{$md - 1}) {
      position: fixed;
      z-index: 100;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: $black;
      transition: $transition-drawer;
      transform: translateX(-100%);
      display: flex;
      justify-content: center;
      align-content: center;

      &.is-active {
        transform: translateY(0);

        #{$mainNav} {
          &__list {
            &__item {
              opacity: 1;
              transform: translate3d(0, 0, 0);

              @for $i from 1 to 6 {
                &:nth-child(#{$i}) {
                  transition: opacity 1s  $i * 0.25s, transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98) $i * 0.25s;
                }
              }
            }
          }
        }
      }
    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: $md) {
        flex-direction: row;
        justify-content: flex-start;
      }

      &__item {
        @media (max-width: #{$md - 1}) {
          flex: none;
          padding: 0;
          text-align: center;
          opacity: 0;
          transform: translate3d(0, 50%, 0);
        }

        @media (min-width: $md) {
          display: flex;
          align-items: baseline;

          &:not(:first-child) {
            margin-left: rem(32px);
          }

          &--contact {
            display: none;
          }
        }

        &__link {
          @include navItem;
          padding: rem(24px);
          display: block;

          @media (min-width: $md) {
            padding: 0;
          }

          &.nuxt-link-active {
            color: $primary;
          }
        }

        &--lang {
          @media (min-width: $md) {
            display: none;
          }
        }
      }
    }
  }
</style>

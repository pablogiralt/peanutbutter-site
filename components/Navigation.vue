<template>
  <div>
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
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    mainMenu: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data: () => ({
    isMenuActive: false
  }),
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
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
    z-index: 1001;

    @media (min-width: $md) {
      display: none;
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
        top: calc(100% - 3px);
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
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $black;
    transition: $transition-standard;
    transform: translateX(-100%);
    display: flex;
    justify-content: center;
    align-content: center;

    &.is-active {
      transform: translateY(0);
    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;

      &__item {
        flex: 1 1 100%;
        padding: 0;
        text-align: center;

        &__link {
          @include navItem;
          padding: rem(24px);
          display: block;
        }
      }
    }
  }
</style>

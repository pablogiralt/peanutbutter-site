<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li v-for="(item, i) in mainMenu" :key="`menu-item-${i}`" class="main-nav__item">
        <prismic-link :field="item.link" class="main-nav__link">
          {{ item.label }}
        </prismic-link>
      </li>
    </ul>
  </nav>
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
  .main-nav {
    &__list {
      list-style: none;
      padding: 0;
      display: flex;
    }

    &__item {
      padding: 0 12px;
    }
  }
</style>

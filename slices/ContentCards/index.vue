<template>
  <pb-section
    v-bind="theme.wrapper"
    class-main="content-cards"
    :class-attr="''"
  >
    <div class="content-cards__item" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-image class="content-cards__image" :field="item.image" />
      <prismic-rich-text :field="item.title" />
      <prismic-rich-text :field="item.subtitle" />
      <prismic-rich-text :field="item.description" />
    </div>
  </pb-section>
</template>

<script>
import { PbSection } from '../components'
import { commonProps } from '../utils'

export default {
  components: {
    PbSection
  },
  props: {
    ...commonProps,
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-cards {
    display: flex;
    padding: 0 50px;

    &__item {
      padding: 0 30px;
    }

    &__image {
      height: 300px;
    }
  }
</style>

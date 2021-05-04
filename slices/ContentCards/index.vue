<template>
  <pb-section
    v-bind="theme.wrapper"
    class-main="content-cards"
    :class-attr="''"
  >
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="content-cards__item">
      <prismic-image class="content-cards__image" :field="item.image" />
      <prismic-rich-text
        :field="item.title"
        class="content-cards__title"
      />
      <prismic-rich-text
        :field="item.subtitle"
        class="content-cards__subtitle"
      />
      <prismic-rich-text
        :field="item.description"
        class="content-cards__description"
      />
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
    background-color: $primary-10;
    display: flex;
    flex-wrap: wrap;
    padding: rem(24px) rem(52px) rem(80px);

    &__item {
      margin-bottom: rem(48px);

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__image {
      height: 264px;
      width: auto;
      margin: 0 auto;
      display: block;
    }

    &__title {
      @include bannerTitle;
      color: $primary;
      margin-bottom: rem(8px);
    }

    &__subtitle {
      @include bannerSubtitle2;
      color: $black;
      margin: 0 0 rem(24px);
    }
  }
</style>

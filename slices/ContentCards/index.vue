<template>
  <pb-section
    v-bind="theme.wrapper"
    class-main="content-cards"
    :class-attr="''"
  >
    <div class="content-cards__container">
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

    padding: rem(24px) 0 rem(80px);

    @media (min-width: $md) {

      padding: rem(80px) 0;
    }

    &__container {
      @include container($container-medium);

      @media (min-width: $md) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

    &__item {
      margin: 0 auto rem(48px);
      max-width: 70%;

      &:last-child {
        margin-bottom: 0;
      }

      @media (min-width: $md) {
        margin: 0 auto;
        flex: 1 1 33.333%;
        max-width: rem(264px);
      }
    }

    &__image {
      height: rem(264px);
      width: auto;
      margin: 0 auto rem(16px);
      display: block;
    }

    &__title {
      ::v-deep p {
        @include bannerTitle2;
        color: $primary;
        margin: 0 0 rem(8px);
      }
    }

    &__subtitle {
      ::v-deep p {
        @include bannerSubtitle2;
        color: $black;
        margin: 0 0 rem(24px);
      }
    }
  }
</style>

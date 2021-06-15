<template>
  <section class="logos">
    <div class="logos__container">
      <div class="logos__text">
        <prismic-rich-text :field="slice.primary.title" class="logos__title" />
        <prismic-rich-text :field="slice.primary.description" class="logos__description" />
      </div>

      <ul class="logos__list">
        <li v-for="(item, index) in slice.items" :key="index" class="logos__list__item">
          <img :src="item.logo.url" :alt="item.logo.url" class="logos__list__item__image">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
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
  .logos {
    background: $primary-10;

    &__container {
      @include container($container-medium);
      padding-top: rem(40px);
      padding-bottom: rem(40px);

      @media (min-width: $md) {
        padding-top: rem(56px);
        padding-bottom: rem(56px);
        text-align: center;
      }
    }

    &__text {
      max-width: rem(266px);
      margin: 0 auto;

      @media (min-width: $md) {
        max-width: rem(744px);
      }
    }

    &__title {
      /deep/ h2 {
        @include bannerTitle;
        margin: 0 0 rem(24px);
      }
    }

    &__subtitle {
      /deep/ p {
        @include bannerSubtitle;
        color: $primary;
        margin: 0 0 rem(24px);
      }
    }

    &__description {
      margin: 0 0 rem(24px);
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
        flex: 1 1 50%;
        max-width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: $md) {
          flex: 1 1 33.333%;
          max-width: 33.333%;
        }
      }
    }
  }
</style>

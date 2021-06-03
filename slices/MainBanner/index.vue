<template>
  <pb-section
    v-bind="theme.wrapper"
    class-main="main-banner"
    :class="{ 'main-banner--only-text' : slice.items.length < 1 }"
    :class-attr="'main-banner--'+ slice.primary.imageSide + ' main-banner--img-'+ slice.primary.imageSize + ' main-banner__bg--'+ slice.primary.backgroundColor"
  >

    <component
      :is="slice.primary.link && slice.items && slice.items.length <= 1 ? 'prismic-link' : 'div'"
      :field="slice.primary.link"
      class="main-banner__inner"
    >
      <div v-if="slice.items.length > 0 && slice.items.length == 1" class="main-banner__col main-banner__image-wrapper">
        <prismic-image :field="slice.items[0].image" class=" main-banner__image" />
        <prismic-rich-text v-if="slice.items[0].caption" :field="slice.items[0].caption" class="main-banner__caption" />
      </div>
      <ImageCarousel v-else-if="slice.items.length > 1" class="main-banner__col main-banner__col--image" :items="slice.items" />

      <div class="main-banner__col main-banner__text">
        <div class="main-banner__col main-banner__text__inner">
          <prismic-rich-text
            v-if="slice.primary.title"
            :field="slice.primary.title"
            class="main-banner__title"
          />
          <prismic-rich-text
            v-if="slice.primary.subtitle"
            :field="slice.primary.subtitle"
            class="main-banner__subtitle"
          />
          <prismic-rich-text
            v-if="slice.primary.description"
            :field="slice.primary.description"
            class="main-banner__description"
          />
          <span
            v-if="slice.primary.buttonText"
            class="main-banner__link"
          >
            {{ slice.primary.buttonText }}
          </span>
        </div>
      </div>
    </component>

  </pb-section>
</template>

<script>
import { PbSection } from '../components'
import { commonProps } from '../utils'

export default {
  components: {
    PbSection,
    ImageCarousel: () => import('../components/ImageCarousel/ImageCarousel.vue')
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
  .main-banner {
    $mainBanner: &;

    position: relative;
    padding: 0 0 rem(48px);
    overflow: hidden;

    &.main-banner--img-large {
      padding: 0;
    }

    @media (min-width: $md) {
      padding: rem(103px) 0 rem(64px);

      &.main-banner--img-large {
        padding: 0;
      }
    }

    &__bg {
      &--grey {
        background-color: $very-light-grey;
      }
    }

    &__inner {
      color: $black;
      text-decoration: none;

      @media (min-width: $md) {
        @include container;
        display: flex;
        align-content: center;

        #{$mainBanner}--img-large & {
          max-width: 100%;
          padding: 0;
        }

        #{$mainBanner}--right & {
          flex-direction: row-reverse;
        }
      }
    }

    &__image-wrapper {
      position: relative;
      margin: rem(16px) 0;

      @media (min-width: $md) {
        flex: 1 1 60%;
        max-width: 60%;
        margin: 0;
      }

      img {
        //max-height: 256px;
        max-height: 35vh;
        width: auto;
        margin: 0 auto;
        display: block;

        @media (min-width: $md) {
          max-height: 70vh;
          margin: 0;
          width: 100%;
        }
      }
    }

    &__caption {
      color: $white;
      font-weight: 700;
      z-index: 1;
      position: absolute;
      bottom: 16px;
      padding: 0 rem(16px);
      width: 100%;
      left: 76px;

      /deep/ p {
        margin: 0;
      }
    }

    .image-carousel {
      @media (min-width: $md) {
        flex: 1 1 60%;
        max-width: 60%;
      }
    }

    &__text {
      max-width: rem(266px);
      margin: 0 auto;

      @media (min-width: $md) {
        flex: 1 1 40%;
        max-width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        #{$mainBanner}--only-text & {
          flex: 1 1 100%;
          max-width: 100%;
          justify-content: flex-start;
        }
      }

      &__inner {
        @media (min-width: $xs) {
          max-width: rem(360px);
          align-self: center;

          #{$mainBanner}--only-text & {
            max-width: 90%
          }
        }
      }
    }

    &__title {
      /deep/ h1 {
        @include bannerTitle;
        margin: 0 0 rem(8px);
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

    &__link {
      @include linkItem($black);
    }

    // &__inner {
    //   color: #000;
    //   text-decoration: none;
    //   display: flex;
    //   align-items: center;
    // }

    // &__col {
    //   width: 50%;
    // }

    // &__subtitle {
    //   color: $primary;
    // }

    // &--right {
    //   .main-banner__col--image {
    //      order: 1
    //   }
    // }

    // &--img-large {
    //   .main-banner__col--image {
    //     width: 70%;
    //   }
    // }
  }
</style>

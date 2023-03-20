<template>
  <pb-section
    v-if="slice.items.length"
    v-bind="theme.wrapper"
    class-main="testimonials"
    :class-attr="'main-banner--'+ slice.primary.imageSide"
  >
    <div class="testimonials__container">
      <VueSlickCarousel :arrows="false" :dots="true">
        <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
          <div class="testimonial">
            <prismic-image class="testimonial__image" :field="item.image" />

            <prismic-rich-text class="testimonial__text" :field="item.testimonial" />

            <div class="testimonial__info">
              <span class="testimonial__info__name">{{ item.name }}</span>
              <span class="testimonial__info__role">{{ item.role }}</span>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </pb-section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { PbSection } from '../components'
import { commonProps } from '../utils'

export default {
  components: {
    PbSection,
    VueSlickCarousel
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
  .testimonials {
    position: relative;
    background-color: $primary-60;
    padding: rem(40px) rem(52px);

    @media (min-width: $md) {
      padding: rem(56px) 0 rem(24px);
    }

    ::v-deep .slick-dots {
      margin: 0;
    }

    &__container {
      @media (min-width: $md) {
        max-width: rem(744px);
        margin: 0 auto;
      }
    }
  }

  .testimonial {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: rem(32px);

    @media (min-width: $md) {
      margin-bottom: rem(48px);
    }

    &__image {
      width: rem(192px);
      margin-bottom: rem(24px);

      @media (min-width: $md) {
        margin-bottom: rem(16px);
      }
    }

    &__text {
      @include testimonialText;
      text-align: center;
      margin-bottom: rem(24px);

      ::v-deep p {
        margin: 0;
      }

      @media (min-width: $md) {
        margin-bottom: rem(40px);
      }
    }

    &__info {
      text-align: center;

      &--desktop {
        display: none;
      }

      &__name,
      &__role {
        @include bannerSubtitle2;
        display: block;
      }

      &__role {
        color: $white;
      }
    }
  }
</style>

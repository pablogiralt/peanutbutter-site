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
            <div class="testimonial__image-wrapper">
              <prismic-image class="testimonial__image" :field="item.image" />

              <div class="testimonial__info testimonial__info--desktop">
                <span class="testimonial__info__name">{{ item.name }}</span>
                <span class="testimonial__info__role">{{ item.role }}</span>
              </div>
            </div>

            <prismic-rich-text class="testimonial__text" :field="item.testimonial" />

            <div class="testimonial__info testimonial__info--mobile">
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
      padding: rem(96px) 0 rem(104px);

      /deep/ .slick-slider,
      /deep/ .slick-list {
        position: static;
      }
    }

    /deep/ .slick-dots {
      margin: 0;

      @media (min-width: $md) {
        position: absolute;
        left: 50%;
        bottom: rem(24px);
        transform: translateX(-50%);
      }
    }

    &__container {
      @media (min-width: $md) {
        @include container;
      }
    }
  }

  .testimonial {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: rem(32px);

    @media (min-width: $md) {
      margin: 0;
    }

    &__image-wrapper {
      @media (min-width: $md) {
        order: 2;
        padding-left: rem(50px);
      }
    }

    &__image {
      height: rem(88px);
      width: auto;
      margin-bottom: rem(24px);

      @media (min-width: $md) {
        height: rem(220px);
      }
    }

    &__text {
      @include testimonialText;
      text-align: center;
      margin-bottom: rem(24px);

      /deep/ p {
        margin: 0;
      }

      @media (min-width: $md) {
        order: 1;
        text-align: left;
        max-width: 50%;
        font-size: rem(40px);
        font-weight: normal;
        line-height: 1;
      }
    }

    &__info {
      text-align: center;

      &--desktop {
        display: none;
      }

      @media (min-width: $md) {
        text-align: left;

        &--mobile {
          display: none;
        }

        &--desktop {
          display: block;
        }
      }

      &__name,
      &__role {
        @include bannerSubtitle2;
        display: block;

        @media (min-width: $md) {
          font-size: rem(24px);
          line-height: 1;
        }
      }

      &__role {
        color: $white;

        @media (min-width: $md) {
          font-weight: 400;
          margin-top: rem(12px);
        }
      }
    }
  }
</style>

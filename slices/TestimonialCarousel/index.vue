<template>
  <pb-section
    v-if="slice.items.length"
    v-bind="theme.wrapper"
    class-main="testimonials"
    :class-attr="'main-banner--'+ slice.primary.imageSide"
  >
    <VueSlickCarousel :arrows="true" :dots="true">
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
    background-color: $primary-60;
    padding: rem(40px) rem(52px) rem(80px);
  }

  .testimonial {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: rem(32px);

    &__image {
      height: rem(88px);
      width: auto;
      margin-bottom: rem(24px);
    }

    &__text {
      @include testimonialText;
      text-align: center;
    }

    &__info {
      text-align: center;

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

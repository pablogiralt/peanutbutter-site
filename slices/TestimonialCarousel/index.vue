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
          <prismic-rich-text class="testimonial__col" :field="item.testimonial" />
          <div class="testimonial__col">
            <prismic-image class="testimonial__image" :field="item.image" />
            <span>{{ item.name }}</span>
            <span>{{ item.role }}</span>
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
    padding: 4em;
  }

  .testimonial {
    display: flex;

    &__image {
      width: 400px;
    }
  }
</style>

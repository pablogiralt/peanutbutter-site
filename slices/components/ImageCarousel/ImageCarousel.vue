<template>
  <div class="image-carousel">
    <VueSlickCarousel :arrows="true" :dots="true">
      <div class="image-carousel__item" v-for="(item, i) in items" :key="`slice-item-${i}`">
        <prismic-image class="image-carousel__image" :field="item.image" />
        <prismic-rich-text v-if="item.caption" :field="item.caption" class="main-banner__caption" />
        <div class="image-carousel__overlay"></div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    items: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  computed: {
    items2 () {
      return 'aaaaa'
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-carousel {
    &__item {
      position: relative;
    }
    &__image {
      width: 100%;
    }
    &__overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>

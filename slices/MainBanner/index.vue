<template>
  <pb-section
    v-bind="theme.wrapper"
    class-main="main-banner"
    :class-attr="'main-banner--'+ slice.primary.imageSide + ' main-banner--img-'+ slice.primary.imageSize"
  >
    <component
      :is="slice.primary.link && slice.items && slice.items.length <= 1 ? 'prismic-link' : 'div'"
      :field="slice.primary.link"
      class="main-banner__inner"
    >
      <div v-if="slice.items.length == 1" class="main-banner__col main-banner__col--image">
        <prismic-image :field="slice.items[0].image" class=" main-banner__image"/>
        <prismic-rich-text v-if="slice.items[0].caption" :field="slice.items[0].caption" class="main-banner__caption" />
      </div>
      <ImageCarousel v-else class="main-banner__col main-banner__col--image" :items="slice.items" />

      <div class="main-banner__col main-banner__text">
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
          class="main-banner__button"
        >
          {{ slice.primary.buttonText }}
        </span>
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
  @import "./scss/_variables.scss";

  .main-banner {
    position: relative;
    padding: 4em;

    &__inner {
      color: #000;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    &__col {
      width: 50%;
    }

    &__subtitle {
      color: $primary;
    }

    &--right {
      .main-banner__col--image {
         order: 1
      }
    }

    &--img-large {
      .main-banner__col--image {
        width: 70%;
      }
    }
  }
</style>

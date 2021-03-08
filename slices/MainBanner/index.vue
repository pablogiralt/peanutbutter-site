<template>
  <pb-section
    v-bind="theme.wrapper"
    class-main="main-banner"
    :class-attr="'main-banner--'+ slice.primary.imageSide"
  >
    <component
      :is="slice.primary.link ? 'prismic-link' : 'div'"
      :field="slice.primary.link"
      class="main-banner__inner"
    >
      <prismic-image
        v-if="slice.primary.image"
        :field="slice.primary.image"
        class="main-banner__col main-banner__image"
      />

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
import {
  PbSection
} from '../components'
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
      .main-banner__image {
         order: 1
      }
    }
  }
</style>

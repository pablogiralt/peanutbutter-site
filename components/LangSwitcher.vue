<template>
  <ul class="lang-switcher">
    <li v-for="(lang, langCode) in langs" :key="lang.shortCode" class="lang-switcher__item">
      <nuxt-link
        class="lang-switcher__item__link"
        v-if="lang.shortCode !== currentLang"
        :to="$prismic.linkResolver(altLang(langCode))"
      >
        <span>
          {{ lang.shortCode }}
        </span>
      </nuxt-link>
      <span v-else class="lang-switcher__item__link disable">{{ lang.shortCode }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LangSwitcher',
  props: {
    // currentLang: {
    //   type: String,
    //   required: true,
    //   default: ''
    // },
    altLangs: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      langs: {
        'es-es': {
          shortCode: 'es'
        },
        'en-us': {
          shortCode: 'en'
        }
      }
    }
  },
  methods: {
    altLang (langCode) {
      return this.altLangs.filter(lang => lang.lang === langCode)[0] || {}
    }
  },
  computed: {
    currentLang () {
      return this.$store.state.locale
    }
  }
}
</script>

<style lang="scss">
  .lang-switcher {
    display: flex;
    align-items: baseline;
    list-style: none;
    padding: 0;
    margin-top: rem(24px);
    border-top: 1px solid $white;

    @media (min-width: $md) {
      margin: 0 0 0 rem(32px);
      border: 0;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-child) {
        &::after {
          content: '|';
          color: $white;
          font-size: rem(24px);
          font-weight: 400;
          line-height: 1.33;
          padding: rem(24px) rem(12px);

          @media (min-width: $md) {
            padding-top: 0;
            padding-bottom: 0;
          }
        }
      }

      &__link {
        @include navItem;
        font-weight: 700;
        display: block;
        text-transform: uppercase;
        padding: rem(24px) 0;

        @media (min-width: $md) {
          padding: 0;
        }

        &.disable {
          color: $grey-60;
          font-weight: 400;
        }
      }

      a {
        text-decoration: none;
      }
    }
  }
</style>

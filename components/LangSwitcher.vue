<template>
  <ul class="lang-switcher">
    <li v-for="(lang, langCode) in langs" :key="lang.shortCode" class="lang-switcher__item">
      <nuxt-link
        class="lang-switcher__item__link"
        v-if="lang.shortCode !== currentLang"
        :to="$prismic.linkResolver(altLang(langCode))"
      >
        <span>{{ lang.shortCode }}</span>
      </nuxt-link>
      <span v-else>{{ lang.shortCode }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LangSwitcher',
  props: {
    currentLang: {
      type: String,
      required: true,
      default: ''
    },
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
  }
}
</script>

<style lang="scss">
  .lang-switcher {
    display: flex;
    list-style: none;
    padding: 0;

    &__item {
      &:not(:last-child) {
        &::after {
          content: '|'
        }
      }

      &__link {
        @include navItem;
        padding: rem(24px);
        display: block;
      }
    }
  }
</style>

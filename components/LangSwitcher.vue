<template>
  <ul class="lang-switcher">
    <li v-for="(lang, langCode) in langs" :key="lang.shortCode" class="lang-switcher__item">
      <nuxt-link
        v-if="lang.shortCode !== currentLang"
        :to="$prismic.linkResolver(altLang(langCode, lang.shortCode))"
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
    altLang (langCode, shortCode) {
      const altLang = this.altLangs.filter(lang => lang.lang === langCode)[0] || {}
      altLang.shortCode = shortCode
      return altLang
    }
  }
}
</script>

<style>
  .lang-switcher {
    display: flex;
    list-style: none;
  }
  .lang-switcher__item:after {
    content: '/'
  }
  .lang-switcher__item:last-child:after {
    content: ''
  }
</style>

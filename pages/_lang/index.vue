<template>
  <div>
    <site-header :alt-langs="altLangs" :current-lang="langCode" :main-menu="mainMenu" />
    <slice-zone
      type="page"
      :uid="uid"
      :lang="lang"
    />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },
  async asyncData ({ $prismic, params, error, route }) {
    try {
      let currentLang
      if (route.params.lang) {
        currentLang = route.params.lang
      } else {
        currentLang = route.name === 'index' ? 'es' : route.name
      }
      const locales = {
        en: 'en-us',
        es: 'es-es'
      }
      const lang = { lang: locales[currentLang] }
      const uid = route.params.uid || 'homepage'

      // Query to get document content
      const pageContent = await $prismic.api.getByUID('page', uid, lang)

      // Query to get main nav
      const mainMenu = await $prismic.api.getByUID('navigation', 'main-nav', lang)

      return {
        // Document content
        // slices: result.data.body,

        // Lang switcher
        altLangs: pageContent.alternate_languages,

        // Main Menu
        mainMenu: mainMenu && mainMenu.data && mainMenu.data.menu ? mainMenu.data.menu : []
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    uid () {
      return this.$route.params.uid || 'homepage'
    },
    lang () {
      const locales = {
        en: 'en-us',
        es: 'es-es'
      }
      return locales[this.langCode]
    },
    langCode () {
      let currentLang
      if (this.$route.params.lang) {
        currentLang = this.$route.params.lang
      } else {
        currentLang = this.$route.name === 'index' || this.$route.name === 'uid' ? 'es' : this.$route.name
      }
      return currentLang
    }
  }
}
</script>

<style>
</style>

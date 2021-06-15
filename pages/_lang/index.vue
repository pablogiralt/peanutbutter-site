<template>
  <div>
    <site-header :alt-langs="altLangs" :main-menu="mainMenu" />
    <slice-zone
      class="main"
      type="page"
      :uid="uid"
      :lang="lang"
    />
    <site-footer :footer-menu="footerMenu" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },
  // middleware: 'i18n',
  async asyncData ({ $prismic, params, store, error, route }) {
    try {
      /*
      console.log(store.state.locale)
      let currentLang
      if (route.params.lang) {
        currentLang = route.params.lang
      } else {
        currentLang = route.name === 'index' ? 'es' : route.name
      }
      const prismicLocales = {
        en: 'en-us',
        es: 'es-es'
      }
      */
      const lang = { lang: store.state.prismicLocales[store.state.locale] }
      const uid = route.params.uid || 'homepage'

      // Query to get document content
      const pageContent = await $prismic.api.getByUID('page', uid, lang)

      // Query to get main nav
      const mainMenu = await $prismic.api.getByUID('navigation', 'main-nav', lang)

      // Query to get main nav
      const footerMenu = await $prismic.api.getByUID('navigation', 'footer-nav', lang)

      return {
        // Document content
        // slices: result.data.body,

        // Lang switcher
        altLangs: pageContent.alternate_languages,

        // Main Menu
        mainMenu: mainMenu && mainMenu.data && mainMenu.data.menu ? mainMenu.data.menu : [],

        // Footer Menu
        footerMenu: footerMenu && footerMenu.data && footerMenu.data.menu ? footerMenu.data.menu : []
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
      return this.$store.state.prismicLocales[this.$store.state.locale]

      /*
      const locales = {
        en: 'en-us',
        es: 'es-es'
      }
      return locales[this.langCode]
      */
    }
    /*
    langCode () {
      let currentLang
      if (this.$route.params.lang) {
        currentLang = this.$route.params.lang
      } else {
        currentLang = this.$route.name === 'index' || this.$route.name === 'uid' ? 'es' : this.$route.name
      }
      console.log('langCode', currentLang)
      return currentLang
    }
    */
  }
}
</script>

<style>
</style>

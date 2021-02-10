<template>
  <div>
    <div class="header">
      <lang-switcher :alt-langs="altLangs" :current-lang="langCode" />
      <nuxt-link :to="logoLink">
        <img class="logo" src="https://peanutbutter.es/wp-content/themes/peanut/library/images/logo_peanut_header.png">
      </nuxt-link>
      <span class="contact-link">contact</span>
    </div>

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
      // console.log(route)
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
      const result = await $prismic.api.getByUID('page', uid, lang)

      return {
        // Document content
        // slices: result.data.body,

        // Lang switcher
        altLangs: result.alternate_languages
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
    },
    logoLink () {
      return this.langCode !== 'es' ? `/${this.langCode}` : '/'
    }
  }
}
</script>

<style>
  .header {
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    background-color: #000;
    border-radius: 50%;
    width: 80px;
  }
</style>

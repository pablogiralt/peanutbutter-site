<template>
  <div>
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
  computed: {
    uid () {
      return this.$route.params.uid || 'homepage'
    },
    lang () {
      const locales = {
        en: 'en-us',
        es: 'es-es'
      }
      let currentLang
      if (this.$route.params.lang) {
        currentLang = this.$route.params.lang
      } else {
        currentLang = this.$route.name === 'index' ? 'es' : this.$route.name
      }
      return locales[currentLang]
    }
  }
}
</script>

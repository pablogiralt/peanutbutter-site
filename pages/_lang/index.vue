<template>
  <div>
    <slice-zone
      type="page"
      uid="homepage"
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
    lang () {
      const currentLang = this.$route.name === 'index' ? 'es' : this.$route.name
      const locales = {
        en: 'en-us',
        es: 'es-es'
      }
      return locales[currentLang]
    }
  }
}
</script>

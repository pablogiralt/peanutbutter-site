<template>
  <div>
    <slice-zone
      type="page"
      :uid="$route.params.uid"
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
      if (this.$route.params.lang) {
        const locales = {
          en: 'en-us',
          es: 'es-es'
        }
        return locales[this.$route.params.lang]
      } else {
        // default language does not need lang param
        return ''
      }
    }
  }
}
</script>

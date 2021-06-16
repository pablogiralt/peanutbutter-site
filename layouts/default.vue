<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'i18n',

  head () {
    return {
      // title: 'Page Title',
      bodyAttrs: {
        class: this.$store.state.bodyClasses
      },
      htmlAttrs: {
        lang: this.$store.state.locale
      }
    }
  }
}
</script>

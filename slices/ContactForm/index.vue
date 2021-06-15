<template>
  <ContactForm :title="slice.primary.title" :description="slice.primary.description" />
</template>

<script>
import ContactForm from '../../components/ContactForm'

export default {

  components: {
    ContactForm
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>

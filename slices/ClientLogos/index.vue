<template>
  <section class="logos">
    <prismic-rich-text :field="slice.primary.title" class="logos__title" />
    <prismic-rich-text :field="slice.primary.description" class="logos__description" />

    <ul class="logos__list">
      <li v-for="(item, index) in slice.items" :key="index" class="logos__list__item">
        <img :src="item.logo.url" :alt="item.logo.url" class="logos__list__item__image">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },

  mounted () {
    console.log(this.slice)
  }
}
</script>

<style scoped>
</style>

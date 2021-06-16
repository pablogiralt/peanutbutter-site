<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
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
  }
}
</script>

<style lang="scss" scoped>
.section {
  @include container($container-small);
  padding-top: rem(40px);
  padding-bottom: rem(40px);
  min-height: 75vh;

  @media (min-width: $md) {
    padding-top: rem(56px);
    padding-bottom: rem(56px);
  }
}

a {
  color: $primary;
}

.title {
  margin-bottom: 2em;
}
</style>

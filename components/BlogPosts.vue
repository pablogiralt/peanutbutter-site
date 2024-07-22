<template>
  <main>
    <article v-for="post in posts" :key="post.id">
      <header>
        <NuxtLink :to="`resources/${post.uid}`">
          {{ post.data.title }}
        </NuxtLink>
      </header>
    </article>
  </main>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {
    console.log(111, this.posts)
  },
  methods: {}
}
</script>

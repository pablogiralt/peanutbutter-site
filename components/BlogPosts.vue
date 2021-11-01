<template>
  <main>
    <article v-for="post in posts" :key="post.id">
      <header>
        <h2>{{ post.data.title }}!!!</h2>
      </header>

      {{ test2 }}
      <NuxtLink :to="`blog/${post.uid}`">
      aaaa
      </NuxtLink>
    </article>
  </main>
</template>

<script>
export default {
  // components: {
  //   ContactForm: () => import('./ContactForm.vue')
  // },
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

  computed: {
    test2 () {
      // console.log(111, this.posts)
      return 'aloha'
    }
  },

  mounted () {
    console.log(1111)
    console.log(111, this.posts)
  },

  methods: {
    test () {}
  }
}
</script>

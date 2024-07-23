<template>
  <div>
    <site-header :alt-langs="altLangs" :main-menu="mainMenu" />
    <blog-posts v-if="posts?.length" :posts="posts" />
    <slice-zone
      class="main"
      :type="customType"
      :uid="uid"
      :lang="lang"
    />
    <site-footer :footer-menu="footerMenu" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },

  async asyncData ({ $prismic, params, store, error, route, req, $gtm }) {
    try {
      const lang = { lang: store.state.prismicLocales[store.state.locale] }
      const uid = route.params.uid || 'homepage'
      const customType = route.name === 'resources-uid' ? 'post' : 'page'

      // Query to get document content
      const pageContent = await $prismic.api.getByUID(customType, uid, lang)

      // Query to get main nav
      const mainMenu = await $prismic.api.getByUID('navigation', 'main-nav', lang)

      // Query to get main nav
      const footerMenu = await $prismic.api.getByUID('navigation', 'footer-nav', lang)

      let blogPosts = []
      // IF "Fetch posts" field is checked in prismic for this page, fetch blog posts
      if (pageContent.data?.fetch_posts) {
        // Query for blog posts
        const blogPostsResponse = await $prismic.api.query(
          $prismic.predicates.at('document.type', 'post')
        )

        if (blogPostsResponse?.results?.length) {
          blogPosts = blogPostsResponse.results
        }
      }

      // Query to get settings
      const settings = await $prismic.api.getSingle('settings', lang)
      store.commit('SET_SETTINGS', settings)

      // Get host from request when SSR and from window when page loaded client-side
      const host = req ? req.headers.host.split(':')[0] : window.location.host.split(':')[0]

      $gtm.push({
        event: 'page_view',
        data: {
          page_title: pageContent?.data?.meta_title || '',
          page_location: `https://${host}${route.path}`,
          page_path: route.path
        }
      })

      return {
        // Lang switcher
        altLangs: pageContent.alternate_languages,

        // Main Menu
        mainMenu: mainMenu && mainMenu.data && mainMenu.data.menu ? mainMenu.data.menu : [],

        // Footer Menu
        footerMenu: footerMenu && footerMenu.data && footerMenu.data.menu ? footerMenu.data.menu : [],

        page: pageContent,

        posts: blogPosts,

        localhost: host === 'localhost'
      }
    } catch (e) {
      console.error(e)
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head () {
    const head = {
      title: this.page.data.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.data.meta_description
        },
        {
          hid: 'robots',
          name: 'robots',
          content: this.page.data.noindex ? 'noindex' : 'index'
        }
      ],
      bodyAttrs: {
        class: this.$store.state.bodyClasses
      },
      htmlAttrs: {
        lang: this.$store.state.locale
      },
      script: []
    }

    if (this.$store.state.settings.plausible_domain && !this.localhost) {
      head.script.push({
        defer: true,
        'data-domain': this.$store.state.settings.plausible_domain,
        'data-api': '/lucas/api/event',
        src: '/lucas/js/script.js'
      })
    }

    return head
  },

  computed: {
    uid () {
      return this.$route.params.uid || 'homepage'
    },
    lang () {
      return this.$store.state.prismicLocales[this.$store.state.locale]
    },
    customType () {
      return this.$root?._route?.name === 'resources-uid' ? 'post' : 'page'
    }
  }
}
</script>

<style>
</style>

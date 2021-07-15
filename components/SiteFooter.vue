<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer__container">

        <div class="footer__col footer__col--info">
          <a href="#" rel="noopener noreferrer" class="footer__mail-link">
            hello [at] peanutbutter.es
          </a>

          <div class="footer__social">
            <a
              v-for="(item, index) in socialMedia"
              :key="index"
              :href="item.link.url"
              class="footer__social__link"
              :target="item.link.target && item.link.target=='_blank' ? '_blank' : '_self'"
            >
              <img :src="item.icon.url" :alt="item.icon.alt || item.name || ''">
            </a>
          </div>
        </div>

        <div class="footer__col footer__col--logo">
          <nuxt-link :to="logoLink" class="footer__logo-link">
            <img class="logo" src="~/static/logo-peanut-butter-collective.svg">
          </nuxt-link>
        </div>

        <div class="footer__col footer__col--nav">
          <div class="footer__nav">
            <div class="footer__nav__title">
              {{ $t('footer.legal') }}
            </div>

            <nav class="footer__legal-nav">
              <ul class="footer__legal-nav__list">
                <li v-for="(item, i) in footerMenu" :key="`menu-item-${i}`" class="footer__legal-nav__list__item">
                  <prismic-link :field="item.link" class="footer__legal-nav__list__item__link">
                    {{ item.label }}
                  </prismic-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="footer__col footer__col--copy">
          <div class="footer__copy">
            Hypogaea SL &copy; {{ currentDate.getFullYear() }}
          </div>
        </div>
      </div>
    </footer>

    <div class="peanut">
      <img class="peanut__hands" src="~/static/peanut_hands.png">
      <img v-infocus="'in-view'" class="peanut__head" src="~/static/peanut_head.png">
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding, vnode) => {
        const f = () => {
          const rect = el.getBoundingClientRect()
          const inView = (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          )
          if (inView) {
            el.classList.add(binding.value)
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
        f()
      }
    }
  },

  props: {
    footerMenu: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      currentDate: new Date()
    }
  },

  computed: {
    socialMedia () {
      return this.$store.state.settings.social_media
    },

    logoLink () {
      return this.$store.state.locale !== 'es' ? `/${this.$store.state.locale}` : '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  position: relative;
}

.footer {
  position: relative;
  z-index: 2;
  background-color: $black;
  padding: rem(80px) rem(16px) rem(32px);

  @media (min-width: $md) {
    padding: rem(40px) 0 rem(24px);
  }

  &__container {
    max-width: rem(240px);
    margin: 0 auto;
    text-align: center;

    @media (min-width: $md) {
      @include container;
      display: flex;
      flex-wrap: wrap;
      text-align: inherit;
      justify-content: space-between;
    }

    @media (min-width: $md) and (max-width: $lg) {
      padding-left: rem(48px);
      padding-right: rem(48px);
    }
  }

  &__col {
    &--info {
      margin-bottom: rem(60px);
    }

    @media (min-width: $md) {
      &--logo,
      &--info,
      &--nav {
        flex: 1 1 33.333%;
        max-width: 33.333%;
      }

      &--logo {
        order: 1;
      }

      &--info {
        order: 2;
        text-align: center;
        padding-top: rem(24px);
        margin-bottom: 0;
      }

      &--nav {
        order: 3;
        text-align: right;
        padding-top: rem(24px);
      }

      &--copy {
        order: 4;
        flex: 1 1 100%;
        text-align: center;
      }
    }
  }

  &__mail-link {
    color: $white;
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: rem(44px);
  }

  &__social {
    text-align: center;

    &__link {
      display: inline-block;
      padding: 0 rem(10px);
      transition: $transition-standard;

      &:hover {
        opacity: 0.5;
      }

      img {
        display: block;
      }
    }
  }

  &__logo-link {
    margin: 0 auto rem(40px);
    display: block;

    @media (min-width: $md) {
      margin: 0;
      max-width: 223px;
    }
  }

  &__nav {
    &__title {
      color: $grey-60;
      font-weight: 700;
      margin: 0 0 rem(24px);

      @media (min-width: $md) {
        margin-bottom: rem(16px);
      }
    }
  }

  &__legal-nav {
    &__list {
      margin: 0 0 rem(32px);
      padding: 0;

      &__item {
        margin-bottom: rem(8px);

        &:last-child {
          margin: 0;
        }

        &__link {
          color: $grey-60;
          text-decoration: none;
          transition: $transition-standard;

          &:hover {
            color: $primary;
          }
        }
      }
    }
  }

  &__copy {
    color: $grey-60;
    font-size: rem(12px);
    line-height: 1.33;
  }
}

.peanut {
  display: none;

  @media (min-width: $md) {
    position: absolute;
    right: 10%;
    top: -12px;
    display: block;

    &__hands {
      width: 200px;
      position: relative;
      z-index: 2;
    }

    &__head {
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, 50px, 0);
      z-index: 1;
      width: 100px;

      &.in-view {
        animation: popIn 10s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
    }

    @keyframes popIn {
      0% {
        transform: translate3d(-50%, 50px, 0);
      }

      10% {
        transform: translate3d(-50%, -20px, 0);
      }

      40% {
        transform: translate3d(-50%, -40px, 0);
      }

      60% {
        transform: translate3d(-50%, 50px, 0);
      }

      100% {
        transform: translate3d(-50%, -60px, 0);
      }
    }
  }
}
</style>

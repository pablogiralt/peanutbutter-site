<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__col footer__col--info">
        <a href="#" rel="noopener noreferrer" class="footer__mail-link">
          hello [at] peanutbutter.es
        </a>

        <div class="footer__social">
          <a href="#" class="footer__social__link">
            <img src="icons/instagram.svg" alt="">
          </a>

          <a href="#" class="footer__social__link">
            <img src="icons/invision.svg" alt="">
          </a>
        </div>
      </div>

      <div class="footer__col footer__col--logo">
        <a href="#" class="footer__logo-link">
          <img class="logo" src="logo-peanut-butter-collective.svg">
        </a>
      </div>

      <div class="footer__col footer__col--nav">
        <div class="footer__nav">
          <div class="footer__nav__title">
            Legal
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
</template>

<script>
export default {
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

  mounted () {
    console.log(1111, this.footerMenu)
  }
}
</script>

<style lang="scss" scoped>
.footer {
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
</style>

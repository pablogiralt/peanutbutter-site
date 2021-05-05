<template>
  <footer class="footer">
    <div class="footer__container">

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

      <a href="#" class="footer__logo-link">
        <img class="logo" src="logo-peanut-butter.svg">
      </a>

      <div class="footer__nav">
        <div class="footer__nav__title">
          Legal
        </div>

        <nav class="footer__legal-nav">
          <ul class="footer__legal-nav__list">
            <li class="footer__legal-nav__list__item">
              <a href="#" class="footer__legal-nav__list__item__link">
                Aviso legal
              </a>
            </li>

            <li class="footer__legal-nav__list__item">
              <a href="#" class="footer__legal-nav__list__item__link">
                Términos y Condiciones
              </a>
            </li>

            <li class="footer__legal-nav__list__item">
              <a href="#" class="footer__legal-nav__list__item__link">
                Política de Privacidad
              </a>
            </li>

            <li class="footer__legal-nav__list__item">
              <a href="#" class="footer__legal-nav__list__item__link">
                Cookieless
              </a>
            </li>
          </ul>

        </nav>
      </div>

      <div class="footer__copy">
        Hypogaea SL &copy; {{ currentDate.getFullYear() }}
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $black;

  &__container {
    max-width: rem(240px);
    margin: 0 auto;
    padding: rem(80px) rem(16px) rem(32px);
    text-align: center;
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
    margin-bottom: rem(80px);

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
  }

  &__nav {
    &__title {
      color: $grey-60;
      font-weight: 700;
      margin: 0 0 rem(24px);
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

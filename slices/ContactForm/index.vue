<template>
  <div class="contact">
    <div class="contact__wrapper">
      <!-- <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.description" /> -->

      <div class="contact__title">
        ¿Hablamos?
      </div>

      <div class="contact__description">
        Si tienes una idea para una tienda nueva o ya vendas online con Shopify, podemos ayudarte a conseguir tus objetivos.
      </div>

      <form class="contact__form">
        <div class="form-group">
          <input type="text" name="name" placeholder="Nombre">
        </div>
        <div class="form-group">
          <input type="mail" name="email" placeholder="Correo electrónico">
        </div>
        <div class="form-group">
          <textarea name="message" cols="30" rows="6" placeholder="Cuéntanos tu proyecto..." />
        </div>
        <div class="form-group">
          <label class="custom-checkbox">
            <input type="checkbox" name="checkbox-legal" class="custom-checkbox__input">
            <span class="custom-checkbox__checkmark" />
            <span class="custom-checkbox__text">Acepto la <a href="#">Política de Privacidad</a></span>
          </label>
        </div>
        <button class="contact__form__button">
          <span>Enviar</span>
          <img class="contact__form__button__icon" src="icons/icon-plane.svg">
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   slice: {
  //     type: Object,
  //     required: true,
  //     default () {
  //       return {

  //       }
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: $primary-60;
  height: 100vh;

  .main & {
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }

  &__wrapper {
    max-width: rem(266px);
    margin: 0 auto;
    padding-top: rem(56px);
    padding-bottom: rem(56px);
    height: 100%;
    overflow-y: auto;

    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none !important;/* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: $xs) {
      max-width: rem(360px);
    }
  }

  &__title {
    @include bannerTitle;
    margin: 0 0 rem(24px);
  }

  &__description {
    margin: 0 0 rem(24px);
    color: $grey-60;
  }

  input:not([type="checkbox"]):not([type="submit"]),
  textarea {
    @include inputStandard;
    resize: none;
  }

  &__form {
    &__button {
      @include buttonSolid;
      display: flex;
      justify-content: center;
      align-content: center;

      &__icon {
        display: none;

        @media (min-width: $md) {
          display: inline-block;
          transition: $transition-standard;
          padding-left: rem(8px);
        }
      }
    }
  }

  .form-group {
    margin-bottom: rem(16px);

    &:last-of-type {
      margin-bottom: rem(24px);
    }
  }

  .custom-checkbox {
    $customCheckbox: &;
    position: relative;
    padding-left: rem(32px);
    cursor: pointer;

    &__input {
      position: absolute;
      left: 0;
      top: 4px;
      cursor: pointer;
      height: 1px;
      width: 1px;
      display: none;

      &:checked ~ .custom-checkbox__checkmark {
        background-color: $black;
        border-color: $black;

        &::before {
          opacity: 1;
        }
      }
    }

    &__checkmark {
      position: absolute;
      top: 2px;
      left: 0;
      display: inline-block;
      height: rem(16px);
      width: rem(16px);
      border-radius: 3px;
      background-color: $white;
      background-position: center;
      background-size: contain;
      transition: $transition-standard;

      &::before {
        content: "";
        position: absolute;
        left: 5px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid $white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: $transition-standard;
      }
    }

    &__text {
      color: $grey-60;

      a {
        color: $grey-60;
        text-decoration: underline;
      }
    }
  }
}
</style>

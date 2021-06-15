<template>
  <div class="contact">
    <div class="contact__wrapper">
      <div v-if="!status">
        <div class="contact__title">
          {{ $t('contact.title') }}
        </div>

        <div class="contact__description">
          {{ $t('contact.description') }}
        </div>
      </div>

      <form v-if="!status" class="contact__form" @submit="sendForm">
        <div class="form-group">
          <input
            v-model="name"
            type="text"
            name="name"
            :placeholder="$t('contact.placeholders.name')"
            required
          >
        </div>

        <div class="form-group">
          <input
            v-model="email"
            type="email"
            name="email"
            :placeholder="$t('contact.placeholders.email')"
            required
          >
        </div>

        <div class="form-group">
          <textarea
            v-model="message"
            name="message"
            cols="30"
            rows="6"
            :placeholder="$t('contact.placeholders.message')"
            required
          />
        </div>

        <div class="form-group">
          <label class="custom-checkbox">
            <input
              type="checkbox"
              name="legals"
              class="custom-checkbox__input"
              required
            >
            <span class="custom-checkbox__checkmark" />
            <span class="custom-checkbox__text" v-html="$t('contact.privacy_policy', { link: privacy_link })" />
          </label>
        </div>

        <button type="submit" class="contact__form__button">
          <span>{{ $t('contact.send') }}</span>
          <img class="contact__form__button__icon" src="icons/icon-plane.svg">
        </button>
      </form>

      <div v-if="status === 'success'">
        <div class="contact__title">
          {{ $t('contact.success_title') }}
        </div>

        <div class="contact__description">
          {{ $t('contact.success_description') }}
        </div>

        <div class="contact__success">
          <span>{{ $t('contact.success_icon_label') }}</span>
          <img class="contact__success__icon" src="icons/icon-plane.svg">
        </div>
      </div>

      <h1 v-if="status === 'error'">
        {{ $t('contact.error') }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',

  data: () => {
    return {
      status: null,
      name: null,
      email: null,
      message: null
    }
  },

  computed: {
    privacy_link () {
      return this.$store.state.locale === 'es' ? '/privacidad' : '/en/privacy-policy'
    }
  },

  methods: {
    sendForm (event) {
      event.preventDefault()

      fetch('https://formcarry.com/s/0DfUl3ukORF', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ name: this.name, email: this.email, message: this.message })
      })
        .then(response => response.json())
        .then((response) => {
          if (response.code === 200) {
            this.status = 'success'
          } else {
            // Formcarry error
            this.status = 'error'
          }
        })
        // network error
        .catch(() => (this.status = 'error'))
    }
  }
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
      align-self: center;
    }

    @media (min-width: $sm) {
      height: auto;
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

    .required & {
      border-color: red;
    }
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
      //display: none;

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

  &__success {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: rem(8px) rem(16px);
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    color: $white;

    &__icon {
      padding-left: rem(8px);
    }
  }
}
</style>

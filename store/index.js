export const state = () => ({
  locales: ['en', 'es'],
  locale: 'en',
  prismicLocales: {
    en: 'en-us',
    es: 'es-es'
  },
  settings: {}
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },

  SET_SETTINGS (state, settings) {
    if (settings && settings.data) {
      state.settings = settings.data
    }
  }
}

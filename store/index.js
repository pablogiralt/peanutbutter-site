export const state = () => ({
  locales: ['en', 'es'],
  locale: 'en',
  prismicLocales: {
    en: 'en-us',
    es: 'es-es'
  },
  settings: {},
  contactOpen: false,
  menuOpen: false
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
  },

  SET_CONTACT_OPEN (state, contactOpen) {
    state.contactOpen = contactOpen
  },

  SET_MENU_OPEN (state, menuOpen) {
    state.menuOpen = menuOpen
  }
}

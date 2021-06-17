export const state = () => ({
  locales: ['en', 'es'],
  locale: 'en',
  prismicLocales: {
    en: 'en-us',
    es: 'es-es'
  },
  settings: {},
  contactOpen: false,
  menuOpen: false,
  bodyClasses: [],
  desktopBreakpoint: 1024
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
  },

  BODY_CLASS_ADD (state, bodyClass) {
    if (!state.bodyClasses.includes(bodyClass)) {
      state.bodyClasses.push(bodyClass)
    }
  },

  BODY_CLASS_REMOVE (state, bodyClass) {
    if (state.bodyClasses.includes(bodyClass)) {
      state.bodyClasses = state.bodyClasses.filter(item => item !== bodyClass)
    }
  }
}

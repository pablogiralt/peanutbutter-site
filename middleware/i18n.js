export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return
  }
  let locale

  if (route.params.lang) {
    locale = route.params.lang
  } else {
    if (route.name === 'index' || route.name === 'uid' || route.name === 'resources-uid') {
      locale = defaultLocale
    } else {
      locale = route.name
    }
  }

  // if (store.state.locales.includes(locale)) {
  //   return error({ message: 'This page could not be found.', statusCode: 404 })
  // }

  // Mutate the store's locale once we understand which locale is being requested prior to each page render
  store.commit('SET_LANG', locale)
  // Set locale from the query string '?lang='**''
  app.i18n.locale = store.state.locale
}

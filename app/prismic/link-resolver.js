export default function (doc) {

  const mainLang = 'es'
  const langCode = doc.shortCode !== mainLang ? doc.shortCode : ''

  if (doc.uid === 'homepage') {
    return `/${langCode}`
  }

  if (doc.type === 'page') {
    return langCode ? `/${doc.shortCode}/${doc.uid}` : `/${doc.uid}`
  }

  return '/not-found'
}
export default function (doc) {
  const langPaths = {
    'en-us': 'en',
    'es-es': ''
  }
  const shortCode = langPaths[doc.lang]

  if (doc.uid === 'homepage') {
    return `/${shortCode}`
  }

  if (doc.type === 'page') {
    return shortCode ? `/${shortCode}/${doc.uid}` : `/${doc.uid}`
  }

  return '/not-found'
}
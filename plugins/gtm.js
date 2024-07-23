export default function ({ $gtm, route }) {
  console.log('route', route)
  $gtm.init('GTM-MCHQK28P')
  $gtm.push({ varName: 'value' })
}

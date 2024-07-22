export default function ({
  $gtm,
  route
}) {
  $gtm.init(process.env.gtmId) // pass gtm id as a varibale form different env
}

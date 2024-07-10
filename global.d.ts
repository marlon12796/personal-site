import en from './src/locales/contact/en.json'
import enAbout from './src/locales/about/en.json'

type Messages = typeof en
type About = typeof enAbout
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages, About {}
}

import en from './src/locales/contact/en.json'
import enAbout from './src/locales/about/en.json'
import enHome from './src/locales/home/en.json'

type Messages = typeof en
type About = typeof enAbout
type Home = typeof enHome
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages, About, Home {}
}

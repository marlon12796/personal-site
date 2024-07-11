import en from './src/locales/contact/en.json'
import enAbout from './src/locales/about/en.json'
import enHome from './src/locales/home/en.json'
import enLayout from './src/locales/layout/en.json'

type Messages = typeof en
type About = typeof enAbout
type Home = typeof enHome
type Layout = typeof enLayout
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages, About, Home, Layout {}
}

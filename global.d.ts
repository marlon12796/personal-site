import en from './src/locales/about/en.json'

type Messages = typeof en

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

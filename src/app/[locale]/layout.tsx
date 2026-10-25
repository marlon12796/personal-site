import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/navbar/MainNavbar'
import { type Locale, locales } from '@/i18n/config'

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800']
})

export const metadata: Metadata = {
  title: 'Marlon Ureta | Software Developer',
  description: "Marlon's developer portfolio"
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
interface RootLayoutProps
  extends Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }> {}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const locale = (await params).locale

  const messages = await getMessages({ locale: locale as Locale })
  return (
    <html lang={locale} className={notoSansMono.className + ' dark'}>
      <body className={'flex flex-col  min-h-[100dvh] overflow-x-hidden'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
export default RootLayout

import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Mono } from 'next/font/google'
import { locales, Locale } from '@/i18n/config'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale, getMessages } from 'next-intl/server'
import { Navbar } from '@/components/navbar/MainNavbar'
import { Footer } from '@/components/Footer'

const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700', '800'] })

export const metadata: Metadata = {
  title: 'Marlon Ureta | Software Developer',
  description: "Marlon's developer portfolio"
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
const RootLayout = async ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: {
    locale: Locale
  }
}>) => {
  unstable_setRequestLocale(params.locale)

  const messages = await getMessages()
  return (
    <html lang={params.locale} className={notoSansMono.className}>
      <body className={'flex flex-col bg-foreground min-h-[100dvh] overflow-x-hidden'}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
export default RootLayout

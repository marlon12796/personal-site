import type { Metadata } from 'next'
import { Noto_Sans_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { type Locale } from '@/config'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700', '800'] })

export const metadata: Metadata = {
  title: 'Marlon Ureta | Software Developer',
  description: "Marlon's developer portfolio"
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: {
    locale: Locale
  }
}>) {
  const messages = useMessages()
  return (
    <html lang={params.locale} className={notoSansMono.className}>
      <body className={'max-w-6xl m-auto flex  flex-col bg-foreground min-h-[100dvh] overflow-x-hidden'}>
        <NextIntlClientProvider messages={messages}>
          <header className='sticky top-0 bg-slate-950 z-[500]'>
            <Navbar />
          </header>

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

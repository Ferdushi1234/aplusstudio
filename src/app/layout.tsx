import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Nav from "./components/Nav"
import localFont from 'next/font/local'


const myFont = localFont({ src: "./fonts/bodoni-mt-1.ttf" })

export const metadata: Metadata = {
  manifest:'manifest.webmanifest',
  title: {
    template: '%s | A Plus Studio',
    default: 'A Plus Studio', // a default is required when creating a template
  },
  description: 'Discover  unequaled  design mastery at A Plus Studio – where invention meets complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style.',
  metadataBase: new URL('https://aplusstudio.in'),
  generator: 'a plus studio',
  applicationName: 'a plus studio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'a plus studio', url:'https://aplusstudio.in' }, { name: 'gulfam saifi', url: 'https://gulfam.in' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', 'https://aplusstudio.in')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: 'favicon.ico',
      },
    ],
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },

  alternates: {
    canonical: '/service',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   
      <body   className={myFont.className}>
        <Nav />
        {children}
      <Footer/>
      </body>
    </html>
  )
}

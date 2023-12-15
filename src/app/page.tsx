import React from 'react' 
import Contacts from "../app/contacts/page.js"
import Door from "../app/door/page"
import Herosection  from './components/Herosection'
import Service from '@/app/service/page.js'
import Wallsection from '@/app/components/Wallsection.js'
import Futured_product from './futured_product/page.js'
export const metadata = {
  title: 'A+ Studio: Design Excellence',
  description: 'At A Plus Studio, we believe in weaving stories through design, capturing the essence of each client vision and translating it into bespoke interiors that resonate with character and charm. Our talented team of designers and artisans collaborates seamlessly to bring forth a harmonious blend of functionality and beauty, ensuring that every piece of furniture and every detail is not just a product but an experience.',
  manifest:'manifest.webmanifest',
  metadataBase: new URL('https://aplusstudio.in'),
  generator: 'aplusstudio',
  applicationName: 'aplusstudio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'aplusstudio', url:'https://aplusstudio.in' }, { name: 'gulfam saifi', url: 'https://gulfam.in' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi',
  type: 'manufacturer,architecture',
    publishedTime: '2023-01-01T00:00:00.000Z',
    archives: ['https://aplusstudio.in/about'],
    bookmarks: ['https://aplusstudio.in/door'],
  formatDetection: {
    email: 'info@aplusstudio.in',
    address: 'noida sector-83 A-Block 218-219 pin-201305',
    telephone: '9873250016',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
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
  robots: {
    noindex: false,
    follow: true,
    nocache: true,
    googleBot: {
      noindex: false,
      nofollow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
function page() {
  return (
    
    <>
    <Herosection/>
    <Service/>
    <Futured_product/>
    <Wallsection />
    <Door />
    <Contacts />
    </>
  );
};

export default page

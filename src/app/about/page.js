import React from 'react'
import Aboutus from '@/app/components/Aboutus' 




export const metadata = {
  title: 'About Us',
  description: 'About Us of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
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
  robots: {
    noindex: true,
    follow: true,
    nocache: true,
    googleBot: {
      noindex: true,
      nofollow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
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
}

const About = () => {
  return (
    <>
      <Aboutus/>
    </>
  )
}

export default About

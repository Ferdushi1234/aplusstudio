import React from 'react'
import Aboutus from '@/app/components/Aboutus' 




export const metadata = {
  title: 'About',
  description: 'About Us of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
  
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://aplusstudio.in')],
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
    google: 'bdLbDU8AMC-KYqW8F2RbsdY_MsKb8TWpxKg9QwUPWsw',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  openGraph: {
    title:'A Plus Studio',
    description: ' a plus studio of about, Discover  unequaled  design mastery at A Plus Studio – where invention meets complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style. aplusstudio noida',
    images: [{
      url: '/CEO.jpg',
      width: 400,
      height: 300,
    }]
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

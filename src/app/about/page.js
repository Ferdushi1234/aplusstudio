import React from 'react'
import Aboutus from '@/app/components/Aboutus' 




export const metadata = {
  title: 'About Us',
  description: 'About Us of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
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

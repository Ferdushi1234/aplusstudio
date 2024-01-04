import React from 'react'
import Contasus from '@/app/components/Contacts' 
export const metadata = {
  title: 'Contact Us',
  description: 'Contects of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
  alternates:{
    canonical: '/contacts',
  },
  openGraph: {
    title:'A Plus Studio',
    description: ' a plus studio, Discover  unequaled  design mastery at A Plus Studio – where invention meets complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style. aplusstudio noida',
  
    images: [{
      url: '/AP4.jpg',
      width: 400,
      height: 300,
    }]
  },
  
}


const Contacts = () => {
  return (
    <>
      <Contasus/>
    </>
  )
}
export default Contacts

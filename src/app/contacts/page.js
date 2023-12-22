import React from 'react'
import Contasus from '@/app/components/Contacts' 
export const metadata = {
  title: 'Contact Us',
  description: 'Contects of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
  alternates:{
    canonical: '/contacts',
    languages:{
      'en': '/en/contacts'
    }
  }
}


const Contacts = () => {
  return (
    <>
      <Contasus/>
    </>
  )
}
export default Contacts

import React from 'react'
import Admin from '@/app/components/Admin'
export const metadata = {
  title: 'Admin',
  description: 'Admin of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
  robots: {
    index: false,
    nocache: true,
  },
}

const Adminpage = () => {
  return (
    <>
      <Admin/>
    </>
  )
}

export default Adminpage

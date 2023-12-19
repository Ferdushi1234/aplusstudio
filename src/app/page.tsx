import React from 'react' 
import Contacts from "../app/contacts/page.js"
import Door from "../app/door/page"
import Herosection  from './components/Herosection'
import Service from '@/app/service/page.js'
import Wallsection from '@/app/components/Wallsection.js'
import Futured_product from './futured_product/page.js'
import Recentproject from '@/app/recentproject/page.js'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home | A Plus Studio',
  description: 'A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
}


function page() {
  return (
    
    <>
    <Herosection/>
    <Service/>
    <Futured_product/>
    <Wallsection />
    <Door />
    <Recentproject />
    <Contacts />
    </>
  );
};

export default page

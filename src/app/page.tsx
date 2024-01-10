import React from 'react' 
import Contacts from "../app/components/Contacts"
import Door from "../app/door/page"
import Herosection  from './components/Herosection'
import Service from '@/app/service/page.js'
import Wallsection from '@/app/components/Wallsection.js'
import Futured_product from './futured_product/page.js'
import Recentproject from '@/app/recentproject/page.js'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  manifest:'manifest.webmanifest',
  title: 'Home | A Plus Studio',
  description: 'A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio. aplusstudio noida',
  generator: 'a plus studio',
  applicationName: 'a plus studio',
  referrer: 'origin-when-cross-origin',
  keywords: ['a plus studio', 'A plus studio', 'doors','doores', 'wallcladding', 'wall cladding','aplusstudio', 'aplusstudio noida', 'a plus studio noida','aplusstudio sector83','aplusstudio noida sector83','doors interior doors','door hinges','door design','concealed hinge','swinging door hinges','door','door swinging','aplusstudio india','wall cladding design','interior wall cladding','interior','pvc wall cladding','metal wall cladding','door mat','wooden door'],
  authors: [{ name: 'a plus studio', url:'https://aplusstudio.in' }, { name: 'gulfam saifi', url: 'https://gulfam.in' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi',
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

import React from 'react'
import Image from "next/image"
import  styles  from './service.module.css'
import heroStyles from "@/app/styles/herosection.module.css"

export const metadata = {
  title: 'Service',
  description: 'Service of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
}

 


const Services = () => {
  return (
    <>
<main style={{marginBottom: '-9rem'}} className={heroStyles.main_section}>
<div  className=" py-24 bg-stone-100 ">
        <div className="relative z-10 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto ">
          <h2  className=" text-4xl mb-8 tracking-tight font-extrabold text-center text-gray-900 dark:text-black">About Services</h2>
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h2 className="font-medium text-2xl">Wall Cladding</h2>
                <h3 > A plus studio provides the good and unique quality of wall cladding for the covering of a wall with materials that provide both aesthetic and functional benefits. 
                </h3>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src="/apc.jpg"
                  alt="ecommerce"
                  width={450}
                  height={100}
                  className=' rounded-sm'
                  priority sizes='40vw'
                />
              </div>
            </div>

          </div>
        </div>
        <div
          className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div className="w-full md:w-1/4 space-y-4">
            <h2 style={{ marginLeft: 30, marginRight: 30 }} className="font-medium text-2xl">High Quality Doores</h2>
            <h3 style={{ marginLeft: 30, marginRight: 30 }}>
                  A plus studio provides the high & good quality of doores. with concealed hinge quality of hinges  for your interior swinging doors. with movement, Adjustability and functionality.
                </h3>
          </div>
          <div className="mx-auto w-1/2 md:w-1/3">
            <Image
              src="/AP3.jpg"
              alt="ecommerce"
              width={450}
              height={100}
              className='rounded-sm'
              priority sizes='40vw'
            />
          </div>
        </div>
      </div>
      <div className={heroStyles['custom-shape-divider-top-1697868820']}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={heroStyles['shape-fill']}></path>
    </svg>
</div>

</main>
    </>
  )
};

export default Services

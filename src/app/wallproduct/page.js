import React from 'react'
import Image from 'next/image';

 
export const metadata = {
  title: 'Wallproduct | A Plus Studio',
  description: 'Wall product of A Plus Studio | it provides the Door with good quality and it also provide the wall cladding. | Discover  unequaled  design mastery at A Plus Studio.',
}
const Wall = () => {
  return (

      <div className="bg-white">
     <div  className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h2 className="font-medium text-2xl">Wall Cladding</h2>                
                <h3>
                A plus studio provides the good and unique quality of Wall cladding for the covering of a wall with materials that provide both aesthetic and functional benefits. and it is easy to install.
                </h3>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">                
                   <Image 
            src="/apc.jpg"
            alt="ecommerce"
            width={400}
            height={100}
            className='rounded-xl'
            priority sizes='40vw'
            />
              </div>
            </div>
          </div>
        </div>
        <div
          className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="font-medium text-2xl">Deffrent color Wall cladding</h3>
            <p style={{ marginLeft: 20, marginRight: 20 }}>
           we provides good and deffrent color of Wall cladding and It is an exterior covering applied to the walls of a building to protect it from weather conditions.
            </p>
          </div>
          <div className="mx-auto w-1/2 md:w-1/3">
            <Image
              src="/01.jpg"
              alt="ecommerce"
              width={400}
              height={100}
              className='rounded-xl'
              priority sizes='40vw'
            />
          </div>
        </div>
        <div className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl"> Wall Cladding</h3>
                <p>
               We provides deffrent size of Cladding. it can be installed horizontally, vertically, or diagonally, allowing for creative and customized design patterns. Wall Cladding come in various styles and designs, allowing architects and designers to achieve diverse aesthetic effects.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src="/01.jpg"
                  alt="ecommerce"
                  width={400}
                  height={100}
                  className='rounded-xl'
                  priority sizes='40vw'
                />
              </div>
            </div>
          </div>
        </div>
       </div>

  );
};
export default Wall

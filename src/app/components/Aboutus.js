"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '@/app/about/about.module.css'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}
const about = () => {
    return (
        <>
        <div style={{ marginBottom: '-6rem' }} className='py-56 bg-gradient-to-r from-violet-100 to-pink-100'>       
            <section  className=" flex items-center  bg-gradient-to-r from-violet-100 to-pink-100 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative z-10 my-4">
                                <Image src="/CEO.jpg" alt="CEO"
                                    width={1000} height={1000}
                                    priority sizes='60vw'
                                    className="relative z-40 object-cover w-full h-100 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                <div
                                    className="absolute z-10 hidden w-full h-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                                <div
                                    className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute-top-20   left-0 text-[20px] lg:text-[100px] text-gray-1000 font-bold  dark:text-gray-300 opacity-40 md:block ">
                                    About Us
                                </h1>
                                <h2 className=" font-bold border-l-8 border-blue-400 md:text-5xl dark:text-black">
                                    <div className={Styles.writertext}>Welcome To Our Site</div>
                                </h2>
                            </div>                           
                            <p className=" text-base leading-7 text-gray-500 dark:text-gray-400">
                            Welcome to A Plus Studio, where innovation meets passion! I'm Aamir Ahmed, the CEO and Founder of this incredible journey that began with a vision to transform industries and empower individuals. 
                            Driven by a relentless pursuit of excellence, I founded A Plus Studio with the belief that a plus studio provide the some products for our clients such as 
                            deffrent types of wall cladding with deffrent colours and uniqueness, and a plus studio provide the high quality of Doors with high quality of concealed hinges
                            . Our journey started 2010 and has since been a thrilling adventure of overcoming challenges and celebrating successes. 
                            As the CEO, I am dedicated to steering our team toward groundbreaking solutions that redefine the status quo. At A Plus Studio, we blend cutting-edge technology with unwavering dedication to deliver products/services that resonate with our customers. Our commitment extends beyond mere transactions; it's about creating meaningful connections and making a positive impact on the world.
                            Innovation is at the heart of everything we do. We constantly strive to push boundaries, challenge norms, and foster a culture that encourages creativity and collaboration. Join us on this exciting voyage as we continue to shape the future and inspire change. 
                            Thank you for being a part of the A Plus Studio community. Together, let's build a future where possibilities are limitless!
                            Meet Aamir Ahmed, the visionary force behind A Plus Studio. A trailblazer with a passion for manufectured industry, Aamir Ahmed embarked on this journey to revolutionize manufectured the wall cladding and doors. Their leadership inspires our team to innovate relentlessly, creating a legacy that defines the future of menufectured industry.
                            </p>
                            <Link aria-label="about" href="/about/1"
                                className="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
        </>
    )
}
export default about

import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image"


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}
const Footer = () => {
    return (
        <>
        <div className='relative z-10'>
            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <Image
                                src="/log2.svg"
                                alt="ecommerce"
                                className={footerStyles.logo_name}
                                width={50}
                                height={80}
                                priority sizes='40vw'
                            />
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link aria-label="Home" href="/"><i > <FaFacebookF /> </i></Link>
                            <Link aria-label="Twitter" href="https://www.instagram.com/aplusstudio.in/"  target="_blank"><i > <FaTwitter /> </i> </Link>
                            <Link aria-label="Instagram" href="https://www.instagram.com/aplusstudio.in/" target="_blank"><i > <FaInstagram />  </i></Link>
                            <Link aria-label="Linkedin" href="https://www.linkedin.com/in/a-plus-studio-688644295?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B82KwpL9pR%2Fa8K2n380TcRA%3D%3D"><i > <FaLinkedinIn /> </i></Link>
                            <Link aria-label="Youtube" href="/"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/contacts">Contact us</Link></li>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/service">Services</Link></li>
                            <li><Link href="/ourteam">OurTeam</Link></li>
                            <li><Link href="/">Get started</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li><Link href="/gallery">Interior Design</Link></li>
                            <li><Link href="/door/1">Door</Link></li>
                            <li><Link href="/">Designing</Link></li>
                            <li><Link href="/wallcladding">Wall Cladding</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><Link href="/">Profile</Link></li>
                            <li><Link href="/">My account</Link></li>
                            <li><Link href="/">Prefrences</Link></li>
                            <li><Link href="/products">Purchase</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>products</li>
                            <li><Link href="/wallcladding">Wall Cladding</Link></li>
                            <li><Link href="/door/1">Door</Link></li>
                            <li><Link href="/gallery">Photography</Link></li>
                            <li><Link href="/gallery">Photoshop</Link></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link aria-label="A Plus Studio." href="/>"> A Plus Studio Noida.</Link> All rights reserved </span>
                        <span >
                            <h2>Privacy policy Terms & condition</h2>                            
                        </span>
                    </div>
                </div>
            </footer>
            </div>
        </>
    );
}

export default Footer;
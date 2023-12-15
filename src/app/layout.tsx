import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Nav from "./components/Nav"
import localFont from 'next/font/local'


const myFont = localFont({ src: "./fonts/bodoni-mt-1.ttf" })

export const metadata: Metadata = {
  title: 'APlusStudio: Designing Dreams, Crafting Brilliance. ',
  description: 'APlusStudio is your gateway to a realm of visionary design and impeccable craftsmanship. With a passion for innovation and an unwavering commitment to excellence, we transform spaces into living works of art. Our diverse portfolio spans from contemporary concepts to timeless classics, reflecting our dedication to meeting and exceeding the unique aspirations of our clients. Explore the extraordinary with APlusStudio – where every project is a testament to the seamless fusion of creativity and precision.',
  manifest:'manifest.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   
      <body   className={myFont.className}>
        <Nav />
        {children}
      <Footer/>
      </body>
    </html>
  )
}

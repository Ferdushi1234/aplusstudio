import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Nav from "./components/Nav"
import localFont from 'next/font/local'


const myFont = localFont({ src: "./fonts/bodoni-mt-1.ttf" })

export const metadata: Metadata = {
  title: 'A+Studio/Home',
  description: 'Discover  unequaled  design mastery at A Plus Studio – where  invention meets  complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style.',
  manifest:'manifest.webmanifest',
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

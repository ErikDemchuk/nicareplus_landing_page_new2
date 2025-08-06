import './globals.css'
import './clash-grotesk.css'
import { Inter, Poppins, Lato } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const lato = Lato({ 
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata = {
  title: 'Flare Paradox',
  description: 'The next generation of AGI is clinically backed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} ${poppins.variable} ${lato.variable} font-inter`}>
        {children}
      </body>
    </html>
  )
}

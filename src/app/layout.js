import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import CartProvider from './Redux/CartProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zoop',
  description: 'Get your products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>        <Navbar/>
        {children}
        <Footer/>
        </CartProvider>

        </body>
    </html>
  )
}

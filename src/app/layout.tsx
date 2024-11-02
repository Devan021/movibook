import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovieMaster - Book Your Cinema Experience',
  description: 'Book movie tickets online for the latest blockbusters and indie films.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  )
}
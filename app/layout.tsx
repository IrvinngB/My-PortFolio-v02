import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Irvin Benitez - Software Developer',
  description: 'Portfolio of Irvin Benitez, a passionate Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}


import type { Metadata } from 'next'
import './globals.css'
import SmoothScrolling from './components/SmoothScrolling'

export const metadata: Metadata = {
  title: 'Sparta Strategy — India\'s Leading FDI Advisory',
  description: 'Connecting Indian destinations with international investors, and Indian corporates with global opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}

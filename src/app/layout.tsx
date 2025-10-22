import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { template: '%s | Tic Tac Toe', default: 'Tic Tac Toe' },
  description: 'Game Tic Tac Toe on your browser',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseLayout from '@/ui/layout/base-layout'

export const metadata: Metadata = {
  title: { template: '%s | Tic Tac Toe', default: 'Tic Tac Toe' },
  description: 'Game Tic Tac Toe on your browser',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <BaseLayout>{children}</BaseLayout>
}

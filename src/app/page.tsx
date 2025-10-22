import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Init | Tic Tac Toe',
}

import InitialPage from '@/ui/pages/initial/initial-page'

export default function Home() {
  return <InitialPage />
}

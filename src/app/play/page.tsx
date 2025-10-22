import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Play',
}

import GamePage from '@/ui/pages/game/game-page'

export default function page() {
  return <GamePage />
}

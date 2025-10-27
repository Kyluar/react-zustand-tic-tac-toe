import React from 'react'

import { GameStoreProvider } from '@/lib/providers/game-store-provider'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br' data-bs-theme='light'>
      <body>
        <GameStoreProvider>
          <main>{children}</main>
        </GameStoreProvider>
      </body>
    </html>
  )
}

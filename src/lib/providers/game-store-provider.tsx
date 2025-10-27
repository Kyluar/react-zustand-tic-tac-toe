'use client'

import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { GameStore, GameStoreApi } from '@/lib/types/store'
import { createGameStore } from '@/lib/stores/game-store'
import { GameStoreProviderProps } from '@/lib/types/provider'

export const GameStoreContext = createContext<GameStoreApi | undefined>(
  undefined,
)

export const GameStoreProvider = ({ children }: GameStoreProviderProps) => {
  const storeRef = useRef<GameStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createGameStore()
  }

  return (
    <GameStoreContext.Provider value={storeRef.current}>
      {children}
    </GameStoreContext.Provider>
  )
}

export const useGameStore = <T,>(selector: (store: GameStore) => T): T => {
  const gameStoreContext = useContext(GameStoreContext)

  if (!gameStoreContext) {
    throw new Error(`gameStoreContext must be used within GameStoreProvider`)
  }

  return useStore(gameStoreContext, selector)
}

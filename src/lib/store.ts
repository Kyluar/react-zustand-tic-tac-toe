import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { GameStore, GameState } from '@/lib/types/store'

const initialState: GameState = { squares: Array(9).fill(null) }

const useGameStore = create<GameStore>(
  combine(initialState, (set) => {
    return {
      setSquares: (nextSquares) => {
        set((state) => ({
          squares:
            typeof nextSquares === 'function'
              ? nextSquares(state.squares)
              : nextSquares,
        }))
      },
    }
  }),
)

export { useGameStore }

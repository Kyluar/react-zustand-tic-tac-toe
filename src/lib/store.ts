import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { GameStore, GameState } from '@/lib/types/store'

const initialState: GameState = { squares: Array(9).fill(null), xIsNext: true }

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
      setXIsNext: (nextXIsNext) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === 'function'
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }))
      },
    }
  }),
)

export { useGameStore }

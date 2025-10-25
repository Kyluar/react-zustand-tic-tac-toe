import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { GameStore, GameState } from '@/lib/types/store'
import {
  calculateStatus,
  calculateTurns,
  calculateWinner,
  storeSetState,
} from './utils/game'

const initialState: GameState = {
  squares: Array(9).fill(null),
  player: 'X',
  status: 'START',
}

const useGameStore = create<GameStore>(
  combine(initialState, (set) => {
    return {
      setSquares: (nextSquares) => {
        set((state) => ({
          squares: storeSetState(state.squares, nextSquares),
        }))
      },

      setPlayer: (nextPlayer) => {
        set((state) => ({
          player: storeSetState(state.player, nextPlayer),
        }))
      },

      makeMove: (i) =>
        set((state) => {
          const nextPlayer = state.player === 'O' ? 'X' : 'O'
          const squaresCopy = state.squares.slice()
          if (squaresCopy[i] || state.status === 'END') return {}
          squaresCopy[i] = state.player
          return {
            squares: squaresCopy,
            player: nextPlayer,
          }
        }),

      updateStatus: () =>
        set((state) => {
          if (state.status === 'END') return {}
          const winner = calculateWinner(state.squares)
          const turns = calculateTurns(state.squares)
          const nextStatus = calculateStatus(winner, turns)
          return { status: nextStatus }
        }),
    }
  }),
)

export { useGameStore }

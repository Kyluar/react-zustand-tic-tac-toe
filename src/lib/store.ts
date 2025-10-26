import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { GameStore, GameState, Player } from '@/lib/types/store'
import {
  calculatePlayer,
  calculateStatus,
  calculateTurns,
  calculateWinner,
  storeSetState,
} from './utils/game'

const initialState: GameState = {
  squares: Array(9).fill(null),
  history: Array(1).fill(Array(9).fill(null)),
  currentMove: 0,
  xIsNext: true,
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

      setXIsNext: (nextXIsNext) => {
        set((state) => ({
          xIsNext: storeSetState(state.xIsNext, nextXIsNext),
        }))
      },

      setCurrentMove: (nextCurrentMove) => {
        set((state) => ({
          currentMove: storeSetState(state.currentMove, nextCurrentMove),
        }))
      },

      makeMove: (i) =>
        set((state) => {
          const nextSquares = state.squares.slice()
          if (nextSquares[i] || state.status === 'END') return {}

          const player = calculatePlayer(state.xIsNext)
          const nextHistory = state.history
            .slice(0, state.currentMove + 1)
            .concat([nextSquares])

          const nextCurrentMove = nextHistory.length - 1

          nextSquares[i] = player

          return {
            squares: nextSquares,
            xIsNext: !state.xIsNext,
            history: nextHistory,
            currentMove: nextCurrentMove,
          }
        }),

      backHistory: (i) => {
        set((state) => {
          const nextSquares = state.history[i]
          return { squares: nextSquares, currentMove: i, xIsNext: i % 2 === 0 }
        })
      },

      updateStatus: () =>
        set((state) => {
          const winner = calculateWinner(state.squares)
          const turns = calculateTurns(state.squares)
          const nextStatus = calculateStatus(winner, turns)
          return { status: nextStatus }
        }),
    }
  }),
)

export { useGameStore }

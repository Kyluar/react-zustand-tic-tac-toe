import { StoreApi } from 'zustand'

export type GameStatus = 'START' | 'ONGOING' | 'DRAW' | 'END'
export type Player = 'X' | 'O'
type SquareValue = Player | null

export type Squares = SquareValue[]

export type GameState = {
  status: GameStatus
  squares: Squares
  history: Squares[]
  currentMove: number
}

export type SetAction<T> = T | ((previusValue: T) => T)
export type MakeMove = (squareIndex: number) => void
export type BackHistory = (squareIndex: number) => void

export type GameActions = {
  setSquares: (nextSquares: SetAction<GameState['squares']>) => void
  setCurrentMove: (nextCurrentMove: SetAction<GameState['currentMove']>) => void
  getXIsNext: () => boolean
  makeMove: MakeMove
  updateStatus: () => void
  backHistory: BackHistory
}

export type GameStore = GameState & GameActions

export type GameStoreApi = StoreApi<GameStore>

export type GameStatus = 'START' | 'ONGOING' | 'DRAW' | 'END'
export type Player = 'X' | 'O'
type SquareValue = Player | null

export type Squares = SquareValue[]

export type GameState = {
  status: GameStatus
  squares: Squares
  xIsNext: boolean
  history: Squares[]
  currentMove: number
}

export type SetAction<T> = T | ((previusValue: T) => T)
export type MakeMove = (squareIndex: number) => void
export type BackHistory = (squareIndex: number) => void

export type GameActions = {
  setSquares: (nextSquares: SetAction<GameState['squares']>) => void
  setXIsNext: (nextXIsNext: SetAction<GameState['xIsNext']>) => void
  setCurrentMove: (nextCurrentMove: SetAction<GameState['currentMove']>) => void
  makeMove: MakeMove
  updateStatus: () => void
  backHistory: BackHistory
}

export type GameStore = GameState & GameActions

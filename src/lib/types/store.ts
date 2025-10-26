export type GameStatus = 'START' | 'ONGOING' | 'DRAW' | 'END'
export type Player = 'X' | 'O'
type SquareValue = Player | null

export type Squares = SquareValue[]

export type GameState = {
  status: GameStatus
  squares: Squares
  player: Player
  history: Squares[]
}

export type SetAction<T> = T | ((previusValue: T) => T)
export type MakeMove = (squareIndex: number) => void

type GameActions = {
  setSquares: (nextSquares: SetAction<GameState['squares']>) => void
  setPlayer: (nextPlayer: SetAction<GameState['player']>) => void
  makeMove: MakeMove
  updateStatus: () => void
}

export type GameStore = GameState & GameActions

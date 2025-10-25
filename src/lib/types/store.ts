export type GameStatus = 'START' | 'ONGOING' | 'DRAW' | 'END'
export type Player = 'X' | 'O'
type SquareValue = Player | null

export type Squares = SquareValue[]

export type GameState = {
  status: GameStatus
  squares: Squares
  player: Player
}

export type SetAction<T> = T | ((previusValue: T) => T)

type GameActions = {
  setSquares: (nextSquares: SetAction<GameState['squares']>) => void
  setPlayer: (nextPlayer: SetAction<GameState['player']>) => void
  makeMove: (squareIndex: number) => void
  updateStatus: () => void
}

export type GameStore = GameState & GameActions

type SquareValue = 'X' | 'O' | null

export type Squares = SquareValue[]

export type GameState = {
  squares: Squares
  xIsNext: boolean
}

type SetAction<T> = T | ((previusValue: T) => T)

type GameActions = {
  setSquares: (nextSquares: SetAction<GameState['squares']>) => void
  setXIsNext: (nextXIsNext: SetAction<GameState['xIsNext']>) => void
}

export type GameStore = GameState & GameActions

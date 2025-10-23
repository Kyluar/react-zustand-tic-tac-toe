type SquareValue = 'X' | 'O' | null

export type Squares = SquareValue[]

export type GameState = {
  squares: Squares
}

type GameActions = {
  setSquares: (
    nextSquares: Squares | ((currentSquares: Squares) => Squares),
  ) => void
}

export type GameStore = GameState & GameActions

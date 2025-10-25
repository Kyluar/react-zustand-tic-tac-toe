import { Squares, Player, SetAction, GameStatus } from '@/lib/types/store'

function isUpdateFunction<T>(
  action: SetAction<T>,
): action is (previusValue: T) => T {
  return typeof action === 'function' && !Array.isArray(action)
}

export function storeSetState<T>(previousValue: T, nextValue: SetAction<T>): T {
  return isUpdateFunction(nextValue) ? nextValue(previousValue) : nextValue
}

export function calculateWinner(squares: Squares): Player | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

export function calculateTurns(squares: Squares): number {
  return squares.filter((square) => !square).length
}

export function calculateStatus(
  winner: Player | null,
  turns: number,
): GameStatus {
  if (!winner && turns === 9) return 'START'
  else if (!winner && !turns) return 'DRAW'
  else if (winner) return 'END'
  else return 'ONGOING'
}

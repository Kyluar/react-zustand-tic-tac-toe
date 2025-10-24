'use client'

import styles from './board.module.css'
import Square from './modules/square/Square'
import { useGameStore } from '@/lib/store'

export default function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext)
  const setXIsNext = useGameStore((state) => state.setXIsNext)
  const squares = useGameStore((state) => state.squares)
  const setSquares = useGameStore((state) => state.setSquares)
  const player = xIsNext ? 'X' : 'O'

  function handleClick(i: number) {
    if (squares[i]) return
    const nextSquares = squares.slice()
    nextSquares[i] = player
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div className={styles.board}>
      {squares.map((square, idx) => (
        <Square
          key={idx}
          value={square ?? ''}
          onSquareClick={() => handleClick(idx)}
        />
      ))}
    </div>
  )
}

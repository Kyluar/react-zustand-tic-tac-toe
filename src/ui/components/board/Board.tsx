'use client'

import styles from './board.module.css'
import Square from './modules/square/Square'
import { useGameStore } from '@/lib/store'

export default function Board() {
  const squares = useGameStore((state) => state.squares)
  const setSquares = useGameStore((state) => state.setSquares)

  function handleClick(i: number) {
    if (squares[i]) return
    const nextSquares = squares.slice()
    nextSquares[i] = 'X'
    setSquares(nextSquares)
  }

  return (
    <div className={styles.board}>
      {squares.map((square, idx) => (
        <Square
          key={idx}
          value={square}
          onSquareClick={() => handleClick(idx)}
        />
      ))}
    </div>
  )
}

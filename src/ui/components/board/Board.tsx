'use client'

import { Squares, MakeMove } from '@/lib/types/store'
import styles from './board.module.css'
import Square from './modules/square/Square'

type BoardProps = {
  squares: Squares
  handleOnSquareClick: MakeMove
}

export default function Board({ squares, handleOnSquareClick }: BoardProps) {
  return (
    <div className={styles.board}>
      {squares.map((square, idx) => (
        <Square
          key={idx}
          value={square ?? ''}
          onSquareClick={() => handleOnSquareClick(idx)}
        />
      ))}
    </div>
  )
}

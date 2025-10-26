'use client'

import { GameState, GameActions } from '@/lib/types/store'
import styles from './board.module.css'
import Square from './modules/square/Square'

type BoardProps = {
  squares: GameState['squares']
  handleOnSquareClick: GameActions['makeMove']
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

'use client'

import styles from './board.module.css'
import Square from './modules/square/Square'

export default function Board() {
  return (
    <div className={styles.board}>
      {Array(9)
        .fill(null)
        .map((_, idx) => (
          <Square
            key={idx}
            value={String(idx)}
            onSquareClick={() => console.log(`Button ${idx} clicked!`)}
          />
        ))}
    </div>
  )
}

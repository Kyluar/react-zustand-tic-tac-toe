'use client'

import styles from './board.module.css'
import Square from './modules/square/Square'
import { useGameStore } from '@/lib/store'
import { useMemo } from 'react'

export default function Board() {
  const squares = useGameStore((state) => state.squares)
  const makeMove = useGameStore((state) => state.makeMove)
  const updateStatus = useGameStore((state) => state.updateStatus)
  const handleClick = useMemo(
    () => (i: number) => {
      console.log('Recalculated...')
      makeMove(i)
      updateStatus()
    },
    [makeMove, updateStatus],
  )

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

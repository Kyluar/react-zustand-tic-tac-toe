'use client'

import styles from './square.module.css'

type SquareProps = {
  value: string
  onSquareClick?: () => void
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button type='button' className={styles.square} onClick={onSquareClick}>
      <span>{value}</span>
    </button>
  )
}

'use client'

import styles from './square.module.css'
import Button from 'react-bootstrap/Button'

type SquareProps = {
  value: string
  onSquareClick?: () => void
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <Button
      type='button'
      variant='dark'
      onClick={onSquareClick}
      className={styles.square}
    >
      {value}
    </Button>
  )
}

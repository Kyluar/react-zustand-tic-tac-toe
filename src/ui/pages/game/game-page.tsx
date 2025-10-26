'use client'

import Status from '@/ui/components/status/Status'
import Board from '@/ui/components/board/Board'
import { useGameStore } from '@/lib/store'

export default function GamePage() {
  const status = useGameStore((state) => state.status)
  const player = useGameStore((state) => state.player)
  const squares = useGameStore((state) => state.squares)
  const makeMove = useGameStore((state) => state.makeMove)
  const updateStatus = useGameStore((state) => state.updateStatus)
  const handleClick = (i: number) => {
    makeMove(i)
    updateStatus()
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
      <Status player={player} status={status} />
      <Board squares={squares} handleOnSquareClick={handleClick} />
    </div>
  )
}

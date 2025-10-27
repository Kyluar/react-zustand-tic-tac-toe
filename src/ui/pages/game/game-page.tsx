'use client'

import Status from '@/ui/components/status/Status'
import Board from '@/ui/components/board/Board'
import History from '@/ui/components/history/History'

import { useGameStore } from '@/lib/providers/game-store-provider'
import { calculatePlayer } from '@/lib/utils/game'

export default function GamePage() {
  const {
    status,
    squares,
    history,
    makeMove,
    updateStatus,
    backHistory,
    getXIsNext,
  } = useGameStore((state) => state)

  const player = calculatePlayer(getXIsNext())

  const handleClick = (i: number) => {
    makeMove(i)
    updateStatus()
  }

  const handleBackTime = (i: number) => {
    backHistory(i)
    updateStatus()
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
      <Status player={player} status={status} />
      <Board squares={squares} handleOnSquareClick={handleClick} />
      <History history={history} handleOnClick={handleBackTime} />
    </div>
  )
}

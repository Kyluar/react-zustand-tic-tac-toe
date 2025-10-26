'use client'

import Status from '@/ui/components/status/Status'
import Board from '@/ui/components/board/Board'
import History from '@/ui/components/history/History'

import { useGameStore } from '@/lib/store'
import { calculatePlayer } from '@/lib/utils/game'

export default function GamePage() {
  const status = useGameStore((state) => state.status)
  const squares = useGameStore((state) => state.squares)
  const xIsNext = useGameStore((state) => state.getXIsNext())
  const history = useGameStore((state) => state.history)

  const makeMove = useGameStore((state) => state.makeMove)
  const updateStatus = useGameStore((state) => state.updateStatus)
  const backTime = useGameStore((state) => state.backHistory)

  const player = calculatePlayer(xIsNext)

  const handleClick = (i: number) => {
    makeMove(i)
    updateStatus()
  }

  const handleBackTime = (i: number) => {
    backTime(i)
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
